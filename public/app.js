// --- 1. DATA (Massive Menu Expansion) ---
const menu = [
    // --- BESTSELLERS ---
    { id: 101, name: "Hyderabadi Chicken Biryani", price: 349, category: "Bestsellers", image: "Hyderbadi-Briyani.jpg" },
    { id: 102, name: "Paneer Butter Masala", price: 289, category: "Bestsellers", image: "Paneer Butter Masala.jpg" },
    { id: 103, name: "Chicken 65", price: 219, category: "Bestsellers", image: "Chicken 65.jpg" },

    // --- BIRYANI & RICE ---0
    { id: 201, name: "Mutton Bam Biryani", price: 449, category: "Biryani & Rice", image: "Mutton Briyani.jpg" },
    { id: 202, name: "Egg Biryani", price: 249, category: "Biryani & Rice", image: "Briyani Rice.jpg" },
    { id: 203, name: "Veg Dum Biryani", price: 229, category: "Biryani & Rice", image: "Veg Briyani.jpg" },
    { id: 204, name: "Jeera Rice", price: 149, category: "Biryani & Rice", image: "jeera rice.jpg" },
    { id: 205, name: "Ghee Rice", price: 179, category: "Biryani & Rice", image: "Ghee rice.jpg" },

    // --- PIZZAS ---
    { id: 301, name: "Margherita Pizza", price: 299, category: "Pizzas", image: "Margherita Pizza.jpg" },
    { id: 302, name: "Peppy Paneer Pizza", price: 399, category: "Pizzas", image: "Peppy Paneer Pizza.jpg" },
    { id: 303, name: "Farmhouse Pizza", price: 419, category: "Pizzas", image: "Farmhouse Pizza.jpg" },
    { id: 304, name: "Chicken Pepperoni", price: 459, category: "Pizzas", image: "Chicken Pepperoni.jpg" },
    { id: 305, name: "BBQ Chicken Pizza", price: 479, category: "Pizzas", image: "BBQ Chicken Pizza.jpg" },

    // --- BURGERS & WRAPS ---
    { id: 401, name: "Classic Chicken Burger", price: 199, category: "Burgers & Wraps", image: "Classic Chicken Burger.jpg" },
    { id: 402, name: "Veggie Supreme Burger", price: 149, category: "Burgers & Wraps", image: "Veggie Supreme Burger.jpg" },
    { id: 403, name: "Spicy Paneer Wrap", price: 169, category: "Burgers & Wraps", image: "Spicy Paneer Wrap.jpg" },
    { id: 404, name: "Chicken Tikka Wrap", price: 199, category: "Burgers & Wraps", image: "Chicken Tikka Wrap.jpg" },

    // --- NORTH INDIAN CURRIES ---
    { id: 501, name: "Dal Makhani", price: 249, category: "North Indian Curries", image: "Dal Makhani.jpg" },
    { id: 502, name: "Kadai Paneer", price: 279, category: "North Indian Curries", image: "Kadai Paneer.jpg" },
    { id: 503, name: "Butter Chicken", price: 319, category: "North Indian Curries", image: "Butter Chicken.jpg" },
    { id: 504, name: "Malai Kofta", price: 289, category: "North Indian Curries", image: "Malai Kofta.jpg" },
    { id: 505, name: "Palak Paneer", price: 269, category: "North Indian Curries", image: "Palak Paneer.jpg" },

    // --- INDIAN BREADS ---
    { id: 601, name: "Butter Naan", price: 50, category: "Indian Breads", image: "Butter Naan.jpg" },
    { id: 602, name: "Garlic Naan", price: 60, category: "Indian Breads", image: "Garlic Naan.jpg" },
    { id: 603, name: "Tandoori Roti", price: 40, category: "Indian Breads", image: "Tandoori Roti.jpg" },
    { id: 604, name: "Pudina Paratha", price: 55, category: "Indian Breads", image: "Pudina Paratha.jpg" },

    // --- CHINESE & ASIAN ---
    { id: 701, name: "Veg Hakka Noodles", price: 199, category: "Chinese & Asian", image: "Veg Hakka Noodles.jpg" },
    { id: 702, name: "Chicken Schezwan Noodles", price: 239, category: "Chinese & Asian", image: "Chicken Schezwan Noodles.jpg" },
    { id: 703, name: "Gobi Manchurian", price: 189, category: "Chinese & Asian", image: "Gobi Manchurian.jpg" },
    { id: 704, name: "Chilli Chicken", price: 249, category: "Chinese & Asian", image: "Chilli Chicken.jpg" },
    { id: 705, name: "Veg Fried Rice", price: 199, category: "Chinese & Asian", image: "Veg Fried Rice.jpg" },

    // --- SOUTH INDIAN ---
    { id: 801, name: "Masala Dosa", price: 129, category: "South Indian", image: "Masala Dosa.jpg" },
    { id: 802, name: "Idli Sambar (2 pcs)", price: 89, category: "South Indian", image: "Idli Sambar.jpg" },
    { id: 803, name: "Medu Vada (2 pcs)", price: 99, category: "South Indian", image: "Medu Vada.jpg" },
    { id: 804, name: "Uttapam", price: 119, category: "South Indian", image: "Uttapam.jpg" },

    // --- DESSERTS & ICE CREAMS ---
    { id: 901, name: "Chocolate Brownie", price: 169, category: "Desserts", image: "Chocolate Brownie.jpg" },
    { id: 902, name: "Gulab Jamun (2 pcs)", price: 99, category: "Desserts", image: "Gulab Jamun.jpg" },
    { id: 903, name: "Rasmalai", price: 119, category: "Desserts", image: "Rasmalai.jpg" },
    { id: 904, name: "Vanilla Ice Cream", price: 89, category: "Desserts", image: "Vanilla Ice Cream.jpg" },
    { id: 905, name: "Chocolate Ice Cream", price: 99, category: "Desserts", image: "Chocolate Ice Cream.jpg" },

    // --- BEVERAGES ---
    { id: 1001, name: "Cold Coffee", price: 139, category: "Beverages", image: "Cold Coffee.jpg" },
    { id: 1002, name: "Chocolate Milkshake", price: 159, category: "Beverages", image: "Chocolate Milkshake.jpg" },
    { id: 1003, name: "Fresh Lime Soda", price: 79, category: "Beverages", image: "Fresh Lime Soda.jpg" },
    { id: 1004, name: "Mango Lassi", price: 109, category: "Beverages", image: "Mango Lassi.jpg" },
    { id: 1005, name: "Watermelon Juice", price: 99, category: "Beverages", image: "Watermelon Juice.jpg" }
];

// --- 2. GLOBAL STATE ---
let currentOrder = [];
const TAX_RATE = 0.05;
let selectedPaymentMethod = null;

// --- 3. DOM ELEMENTS ---
const menuItemsEl = document.getElementById('menu-items');
const categoryNavEl = document.getElementById('category-nav'); // New Nav Element

// Bottom Cart Elements
const bottomCartBar = document.getElementById('bottom-cart-bar');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const viewCartBtn = document.getElementById('view-cart-btn');

// Modal Elements
const paymentModal = document.getElementById('payment-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalItemsList = document.getElementById('modal-items-list');
const modalGrandTotal = document.getElementById('modal-grand-total');
const paymentOptions = document.querySelectorAll('.payment-option');
const confirmPaymentBtn = document.getElementById('confirm-payment-btn');

const step1 = document.getElementById('payment-step-1');
const step2 = document.getElementById('payment-step-2');
const step3 = document.getElementById('payment-step-3');
const closeSuccessBtn = document.getElementById('close-success-btn');

// Booking Page Elements (if present)
const bookingForm = document.getElementById('booking-form');
const bookingMessageEl = document.getElementById('booking-message');
const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');


// --- 4. CORE FUNCTIONS ---

/**
 * Renders the menu categorized like Swiggy.
 * Also generates the Category Navigation bar.
 */
/**
 * Renders the menu categorized like Swiggy.
 * Also generates the Category Navigation bar.
 */
function renderMenu() {
    if (!menuItemsEl) return;

    menuItemsEl.innerHTML = '';
    if (categoryNavEl) categoryNavEl.innerHTML = '';

    // Group by category
    const categories = {};
    menu.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });

    // Render by category
    for (const [category, items] of Object.entries(categories)) {

        // 1. Create Navigation Pill
        if (categoryNavEl) {
            const navBtn = document.createElement('button');
            navBtn.className = 'nav-pill';
            navBtn.textContent = category;
            navBtn.onclick = () => {
                const section = document.getElementById(`cat-${category.replace(/\s+/g, '-')}`);
                if (section) {
                    // Offset for sticky headers
                    const offset = 140;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = section.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update Active State
                    document.querySelectorAll('.nav-pill').forEach(btn => btn.classList.remove('active'));
                    navBtn.classList.add('active');
                }
            };
            categoryNavEl.appendChild(navBtn);
        }

        // 2. Section Header (Anchor for scrolling)
        const sectionHeader = document.createElement('h2');
        sectionHeader.className = 'category-header';
        sectionHeader.id = `cat-${category.replace(/\s+/g, '-')}`; // Create ID like cat-Biryani-&-Rice
        sectionHeader.textContent = category;
        menuItemsEl.appendChild(sectionHeader);

        // 3. Grid for this category
        const grid = document.createElement('div');
        grid.className = 'category-grid';

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item-card glass-panel';
            const qty = getItemQuantity(item.id);

            // Logic to switch between ADD button and Qty Control
            let buttonHTML = '';
            if (qty > 0) {
                buttonHTML = `
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="qty-count">${qty}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                `;
            } else {
                buttonHTML = `<button class="add-btn" onclick="updateQuantity(${item.id}, 1)">ADD</button>`;
            }

            card.innerHTML = `
                <div class="card-img-container">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150'">
                </div>
                <div class="menu-content">
                    <h3>${item.name}</h3>
                    <p class="price">₹${item.price}</p>
                    ${buttonHTML}
                </div>
            `;
            grid.appendChild(card);
        });

        menuItemsEl.appendChild(grid);
    }
}

// Helper to get current qty
function getItemQuantity(id) {
    const item = currentOrder.find(i => i.id === id);
    return item ? item.quantity : 0;
}

// Unified Update Function (Add/Remove)
window.updateQuantity = function (itemId, change) {
    const existingItemIndex = currentOrder.findIndex(item => item.id === itemId);

    if (existingItemIndex > -1) {
        // Item exists
        currentOrder[existingItemIndex].quantity += change;
        if (currentOrder[existingItemIndex].quantity <= 0) {
            // Remove if 0
            currentOrder.splice(existingItemIndex, 1);
        }
    } else if (change > 0) {
        // Add new item
        const selectedItem = menu.find(item => item.id === itemId);
        currentOrder.push({ ...selectedItem, quantity: 1 });
    }

    renderMenu(); // Re-render to update buttons
    updateCartUI();
};

/**
 * Updates the Bottom Cart Bar and the Modal UI
 */
function updateCartUI() {
    // 1. Calculate Totals
    const count = currentOrder.reduce((sum, item) => sum + item.quantity, 0);
    const itemTotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = itemTotal * TAX_RATE;
    const finalTotal = itemTotal + tax;

    // 2. Update Bottom Bar
    if (bottomCartBar) {
        if (count > 0) {
            bottomCartBar.classList.add('visible');
            cartCountEl.textContent = `${count} ITEM${count > 1 ? 'S' : ''}`;
            cartTotalEl.textContent = `₹${finalTotal.toFixed(0)}`;
        } else {
            bottomCartBar.classList.remove('visible');
        }
    }

    // 3. Update Modal List (with controls)
    if (modalItemsList) {
        modalItemsList.innerHTML = '';
        currentOrder.forEach(item => {
            const row = document.createElement('div');
            row.className = 'cart-row';
            row.style.alignItems = "center";

            row.innerHTML = `
                <div style="flex-grow: 1;">
                    <div style="font-weight:600;">${item.name}</div>
                    <div style="font-size:0.8rem; color:#666;">₹${item.price} each</div>
                </div>
                
                <div style="display:flex; align-items:center; gap:8px; margin-right:15px;">
                     <button onclick="updateQuantity(${item.id}, -1)" style="padding:2px 8px; border:1px solid #ddd; background:#fff; cursor:pointer; border-radius:4px;">-</button>
                     <span style="font-weight:bold;">${item.id === 999 ? '1' : item.quantity}</span>
                     <button onclick="updateQuantity(${item.id}, 1)" style="padding:2px 8px; border:1px solid #ddd; background:#fff; cursor:pointer; border-radius:4px;">+</button>
                </div>

                <div style="font-weight:bold;">₹${item.price * item.quantity}</div>
            `;
            modalItemsList.appendChild(row);
        });

        // Add Tax and Total rows
        const taxRow = document.createElement('div');
        taxRow.className = 'cart-row tax-row';
        taxRow.innerHTML = `<span>Tax (5%)</span><span>₹${tax.toFixed(2)}</span>`;
        modalItemsList.appendChild(taxRow);

        modalGrandTotal.textContent = `₹${finalTotal.toFixed(2)}`;
    }
}

// --- PAYMENT MODAL LOGIC ---

if (viewCartBtn) {
    viewCartBtn.addEventListener('click', () => {
        paymentModal.style.display = 'flex';
        resetModal();
        updateCartUI(); // Ensure modal is fresh
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });
}

if (paymentOptions.length > 0) {
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedPaymentMethod = option.dataset.method;
            confirmPaymentBtn.disabled = false;
        });
    });
}

if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', async () => {

        // Parse the total from the modal's grand total text (remove ₹ symbol)
        const totalAmount = parseFloat(modalGrandTotal.textContent.replace('₹', ''));

        step1.classList.add('hidden');
        step2.classList.remove('hidden'); // Processing

        setTimeout(async () => {
            try {
                const response = await fetch('http://localhost:3000/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        items: currentOrder,
                        totalAmount: totalAmount,
                        paymentMethod: selectedPaymentMethod,
                        customerName: "Guest",
                        phone: "9999999999"
                    })
                });

                if (response.ok) {
                    step2.classList.add('hidden');
                    step3.classList.remove('hidden'); // Success
                    currentOrder = []; // Clear cart
                    updateCartUI(); // Hide bottom bar
                } else {
                    alert("Payment Failed.");
                    resetModal();
                }
            } catch (e) {
                console.error(e);
                alert("Connection Error");
                resetModal();
            }
        }, 2000);
    });
}

if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });
}

function resetModal() {
    step1.classList.remove('hidden');
    step2.classList.add('hidden');
    step3.classList.add('hidden');
    selectedPaymentMethod = null;
    confirmPaymentBtn.disabled = true;
    paymentOptions.forEach(opt => opt.classList.remove('selected'));
}


// --- BOOKING LOGIC (Keep existing) ---
// Just the parts that are booking specific, guarded by element checks.

// Generate Time Slots
function generateTimeSlots() {
    const slots = [];
    for (let i = 11; i <= 21; i++) {
        slots.push(`${i}:00`);
        slots.push(`${i}:30`);
    }
    return slots;
}

async function checkAvailability(date) {
    if (!date || !timeSelect) return;
    timeSelect.innerHTML = '<option>Loading...</option>';
    try {
        const response = await fetch(`http://localhost:3000/api/bookings?date=${date}`);
        const data = await response.json();
        const bookedSlots = data.bookedSlots || [];
        const allSlots = generateTimeSlots();
        timeSelect.innerHTML = '<option value="" disabled selected>Select a time</option>';
        allSlots.forEach(slot => {
            const option = document.createElement('option');
            option.value = slot;
            option.textContent = slot;
            if (bookedSlots.includes(slot)) {
                option.disabled = true;
                option.textContent += " (Booked)";
            }
            timeSelect.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        timeSelect.innerHTML = '<option>Error</option>';
    }
}

if (dateInput) {
    dateInput.addEventListener('change', (e) => checkAvailability(e.target.value));
}

if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            guests: document.getElementById('guests').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value
        };
        try {
            const response = await fetch('http://localhost:3000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                bookingMessageEl.style.color = 'green';
                bookingMessageEl.textContent = "✅ Booking Confirmed!";
                bookingForm.reset();
                checkAvailability(formData.date);
            } else {
                bookingMessageEl.textContent = `❌ ${result.error}`;
            }
        } catch (error) {
            bookingMessageEl.textContent = "❌ Error";
        }
    });
}

// Init
// --- CHATBOT LOGIC ---
const chatToggleBtn = document.getElementById('chat-toggle-btn');
const chatBox = document.getElementById('chat-box');
const closeChatBtn = document.getElementById('close-chat');
const sendChatBtn = document.getElementById('send-chat-btn');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

if (chatToggleBtn && chatBox) {
    chatToggleBtn.addEventListener('click', () => {
        chatBox.classList.toggle('open');
    });
}

if (closeChatBtn) {
    closeChatBtn.addEventListener('click', () => {
        chatBox.classList.remove('open');
    });
}

const botReplies = {
    "hello": "Hi there! Welcome to Diner. Hungry?",
    "hi": "Hello! Ready to order something delicious?",
    "food": "We have amazing Biryanis and Pizzas! Check out the menu.",
    "menu": "You can browse our menu on the main page. It's properly categorized!",
    "payment": "We accept UPI, Cards, and Cash.",
    "delivery": "We deliver super fast! Usually in 30 minutes.",
    "price": "Our prices are very affordable. Check the menu!",
    "thank": "You're welcome! Enjoy your meal.",
    "default": "I'm just a simple bot. Please check the menu to order food!"
};

function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isUser ? 'user-msg' : 'bot-msg'}`;
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChat() {
    const text = chatInput.value.trim().toLowerCase();
    if (!text) return;

    addMessage(chatInput.value, true);
    chatInput.value = '';

    // Simple keyword matching
    setTimeout(() => {
        let reply = botReplies["default"];
        for (const key in botReplies) {
            if (text.includes(key)) {
                reply = botReplies[key];
                break;
            }
        }
        addMessage(reply, false);
    }, 600);
}

if (sendChatBtn) {
    sendChatBtn.addEventListener('click', handleChat);
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChat();
    });
}


// Init
renderMenu();
