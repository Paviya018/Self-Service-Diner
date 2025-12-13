const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- API ROUTES ---

// 1. GET Booked Slots for a specific date
app.get('/api/bookings', (req, res) => {
    const { date } = req.query;
    if (!date) {
        return res.status(400).json({ error: 'Date is required' });
    }

    const sql = `SELECT time FROM bookings WHERE date = ?`;
    db.all(sql, [date], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // distinct times that are already booked
        const bookedSlots = rows.map(row => row.time);
        res.json({ bookedSlots });
    });
});

// 2. CREATE Booking
app.post('/api/bookings', (req, res) => {
    const { name, guests, date, time, phone } = req.body;

    if (!name || !guests || !date || !time) {
        return res.status(400).json({ error: 'Missing required booking details.' });
    }

    // Attempt to insert. The UNIQUE(date, time) constraint in DB will prevent duplicates.
    const sql = `INSERT INTO bookings (name, guests, date, time, phone) VALUES (?, ?, ?, ?, ?)`;

    db.run(sql, [name, guests, date, time, phone], function (err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(409).json({ error: 'This slot is already booked. Please choose another time.' });
            }
            return res.status(500).json({ error: err.message });
        }

        // Simulate SMS Notification
        console.log(`[SMS SIMULATION] To: ${phone || 'Customer'} | Msg: Booking Confirmed! ${date} at ${time} for ${guests} guests.`);

        res.json({
            message: 'Booking successful!',
            bookingId: this.lastID,
            smsSent: true
        });
    });
});

// 3. CREATE Order (Payment is assumed successful from frontend simulation)
app.post('/api/orders', (req, res) => {
    const { items, totalAmount, paymentMethod, customerName, phone } = req.body;

    if (!items || !totalAmount || !paymentMethod) {
        return res.status(400).json({ error: 'Invalid order data.' });
    }

    const sql = `INSERT INTO orders (items, total_amount, payment_method, customer_name) VALUES (?, ?, ?, ?)`;
    const itemsJson = JSON.stringify(items);

    db.run(sql, [itemsJson, totalAmount, paymentMethod, customerName], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Simulate Payment Confirmation SMS
        console.log(`[SMS SIMULATION] To: ${phone || 'Customer'} | Msg: Order #${this.lastID} Confirmed. Amount: $${totalAmount}. Payment: ${paymentMethod}.`);

        res.json({
            message: 'Order placed successfully!',
            orderId: this.lastID,
            smsSent: true
        });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Simulated SMS logs will appear in this console.`);
});
