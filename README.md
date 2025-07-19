# PURR!: A Pet Adoption Portal 🐾

PURR! is a MERN Stack web application designed to simplify the pet adoption process. It connects pet owners looking to rehome their pets with individuals eager to adopt, all managed through a seamless, admin-monitored system.

## 🌟 Features

* **Pet Submission**: Users can easily submit details and photos of pets for adoption.
* **Admin Review**: Administrators review and either approve or reject pet submissions, ensuring quality and suitability.
* **Pet Listing**: Approved pets are prominently displayed, making it easy for potential adopters to browse.
* **Adoption Application**: Interested users can apply for pets by submitting their details.
* **Admin Selection**: Admins have the capability to select the most suitable adopter for a pet, manage other applications, and maintain comprehensive adoption records.
* **Browse & Search**: Users can explore all available pets, filter by type (e.g., dog, cat, fish), and view detailed profiles.

## 🚀 Technology Stack

* **MongoDB**: NoSQL database for flexible data storage.
* **Express.js**: Backend web application framework for Node.js.
* **React**: Frontend JavaScript library for building user interfaces.
* **Node.js**: JavaScript runtime for server-side logic.

## 💻 Device Compatibility

* Optimized for **laptop screens**.
* Please note: Not yet responsive for mobile or tablet devices.

## 🛠️ Installation & Setup (Local)

To get PURR! running on your local machine, follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/chaitanya21a/PURR-Pet-Adoption
cd PURR-Pet-Adoption
```

2. **Install dependencies (for both frontend and backend):**
```bash
cd frontend && npm install && cd ../backend && npm install
```

3. **Create a `.env` file in the `backend` directory:**
```
# server/.env
mongooseURL=mongodb://username:password@host:port/database_name
```

*Replace `mongodb://username:password@host:port/database_name` with your actual MongoDB connection string.*

4. **Start the server:**
```bash
node server.js
```

5. **Start the frontend:**
```bash
npm start
```

*Ensure you have Node.js and npm installed on your system.*
