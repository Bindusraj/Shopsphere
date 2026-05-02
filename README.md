# 🛍️ ShopSphere - E-Commerce Web Application

ShopSphere is a full-stack e-commerce web application that allows users to browse products, add items to cart, and securely place orders using Razorpay payment integration.

---

## 🚀 Features

### 👤 User Features
- 🔐 User Authentication (JWT based)
- 🛍️ Browse Products
- 🔍 Search & Filter Products (Category + Price + Sorting)
- 🛒 Add to Cart / Remove from Cart
- 💳 Secure Checkout (Razorpay Payment Gateway)
- 📦 Order Placement & Tracking

### 🛠️ Admin/Backend Features
- 📦 Product Management (CRUD)
- 🛒 Cart Management API
- 📑 Order Management
- 💰 Payment Verification
- 📉 Stock Management

---

## 🧱 Tech Stack

### 🌐 Frontend
- React.js (Vite)
- Tailwind CSS
- Axios

### ⚙️ Backend
- Node.js
- Express.js

### 🗄️ Database
- MongoDB (Mongoose)

### 💳 Payment Gateway
- Razorpay API

### ☁️ Deployment
- Frontend: Vercel
- Backend: Render

---

## 📁 Project Structure

```

shopsphere/
│
├── client/          # React frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│
├── server/          # Node backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│
└── README.md

````

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/Bindusraj/Shopsphere.git
cd Shopsphere
````

---

### 🔹 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

Run backend:

```bash
npm start
```

---

### 🔹 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🌐 API Endpoints

### 🔐 Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### 📦 Products

* GET `/api/products`

### 🛒 Cart

* POST `/api/cart/add`
* GET `/api/cart`

### 💳 Payment

* POST `/api/payment/create-order`

### 📑 Orders

* POST `/api/orders`
* GET `/api/orders/my`

---

## 💡 Key Functionalities

* Dynamic product filtering (search + category + price)
* Real-time cart updates using events
* Secure payment verification with Razorpay
* Auto cart clearing after successful order
* Stock validation before order placement


## 🧪 Future Enhancements

* Wishlist Feature ❤️
* Admin Dashboard 📊
* Product Reviews ⭐
* Order Tracking UI 📍

---

## 🎯 Conclusion

ShopSphere demonstrates a complete e-commerce workflow including product browsing, cart management, and payment processing. It showcases strong full-stack development skills with real-world application design.


---

## 👩‍💻 Author

**Bindushree**

