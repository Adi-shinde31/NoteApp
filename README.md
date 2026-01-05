# 📝 Note App (MERN Stack)

A full-stack **Note Taking Application** built using the **MERN stack** that allows users to create, read, update, and delete notes in a clean and intuitive interface. The project demonstrates proper separation of frontend and backend concerns, RESTful APIs, and MongoDB integration.

---

## 🚀 Features

- ✍️ Create new notes
- 📄 View all notes
- ✏️ Edit existing notes
- 🗑️ Delete notes with confirmation
- 🔔 Toast notifications for actions
- 🌐 RESTful API architecture
- 📦 MongoDB for persistent storage
- 🚦 Rate limiting enabled (50 requests per minute per IP) to prevent abuse
---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Axios
- Tailwind CSS
- Lucide Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- express-rate-limit

---

## 📂 Project Structure

```
NoteApp/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── noteControllers.js
│   ├── middlewares/
│   │   └── rateLimiter.js
│   ├── models/
│   │   └── noteModel.js
│   ├── routes/
│   │   └── noteRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.js
│   ├── package.json
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavBar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   └── RateLimitReached.jsx
│   │   ├── pages/
│   │   │   ├── CreateNotePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.js
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

---

## ▶️ Getting Started

### 1️⃣ Clone the Repository

```
git clone https://github.com/Adi-shinde31/NoteApp.git
cd NoteApp
```

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run server
```

The backend server will start on:
```
http://localhost:3000
```

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

The frontend will start on:
```
http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint        | Description         |
|------|----------------|---------------------|
| GET  | /api/notes     | Fetch all notes     |
| POST | /api/notes     | Create a new note   |
| PUT  | /api/notes/:id | Update a note       |
| DELETE | /api/notes/:id | Delete a note       |

---

## 🧠 Learning Outcomes

- Building REST APIs with Express
- MongoDB schema design using Mongoose
- Connecting frontend and backend using Axios
- Handling async operations and error handling
- Clean project structure for MERN applications

---

## 🚧 Future Improvements

- User authentication (JWT)
- User-specific notes
- Search and filter notes
- Pagination
- Deployment (Render / Vercel)

---

## 👨‍💻 Author

**Aditya Shinde**  
MS in Computer Science, Illinois Institute of Technology  

---

## 📄 License

This project is for learning and personal use.

---

⭐ If you like this project, feel free to star the repository!
