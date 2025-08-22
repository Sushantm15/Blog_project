📝 Blog Project

A simple Blog Application built with:

Frontend: HTML, CSS, JavaScript

Backend: FastAPI (Python)

Database: SQLite

Users can create, view, and manage blog posts.

🚀 Features

Add new blog posts

View all posts dynamically

SQLite database auto-created (blog.db)

Clean separation of frontend & backend

REST API built with FastAPI

🛠️ Installation & Setup
1. Clone the repository
git clone https://github.com/Sushantm15/Blog_project.git
cd Blog_project

2. Create a virtual environment
python -m venv venv

3. Activate the environment

Windows:

venv\Scripts\activate

4.Install Libraries
pip install fastapi uvicorn sqlalchemy pydantic

▶️ Running the Project
Start the FastAPI backend
cd backend
uvicorn main:app --reload


Backend runs on: 👉 http://127.0.0.1:8000

Open the frontend

Simply open frontend/index.html in your browser.
It will interact with the FastAPI backend.

📂 Project Structure
Blog_project/
│── backend/         # FastAPI backend
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   └── schemas.py
│
│── frontend/        # HTML, CSS, JS files
│   ├── index.html
│   ├── style.css
│   └── script.js
│
│── blog.db          # SQLite database (auto-created)
│── README.md

✅ Example Blog Topics

Introduction to Machine Learning

Generative AI (GenAI) Explained
Linux/Mac:

source venv/bin/activate
