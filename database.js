const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./restaurant.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initializeTables();
    }
});

function initializeTables() {
    // Bookings Table
    db.run(`CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        guests INTEGER NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        phone TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(date, time) -- Prevent double booking for the same slot (simplified logic)
    )`, (err) => {
        if (err) console.error("Error creating bookings table:", err.message);
    });

    // Orders Table
    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        items TEXT NOT NULL, -- JSON string of items
        total_amount REAL NOT NULL,
        payment_method TEXT NOT NULL,
        customer_name TEXT,
        status TEXT DEFAULT 'Paid',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
        if (err) console.error("Error creating orders table:", err.message);
    });
}

module.exports = db;
