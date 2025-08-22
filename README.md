# 📝 Sushant's Simple Blog App

A beginner-friendly **Blog Application** built with:

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** FastAPI (Python)  
- **Database:** SQLite  

Create and view blog posts through a sleek and interactive interface.

---

## 🚀 Features

- Add new blog posts instantly  
- View dynamically loaded posts  
- Styled, vibrant UI with responsive cards  
- Simple REST API powered by FastAPI  
- SQLite database (`blog.db`) is auto-created  

---

## 📂 Project Structure

Blog_project/
│
├── backend/ # FastAPI backend
│ ├── main.py # API routes & setup
│ ├── database.py # SQLite config
│ ├── models.py # SQLAlchemy models
│ └── schemas.py # Pydantic schemas
│
├── frontend/ # Frontend assets
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── blog.db # Auto-generated SQLite DB
├── .gitignore # Excludes venv, DB, cache, etc.
└── README.md # You're reading it!

yaml
Copy
Edit

---

## ⚡ Setup & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/Sushantm15/Blog_project.git
cd Blog_project
2. Create & Activate a Virtual Environment
bash
Copy
Edit
python -m venv venv
Windows:

bash
Copy
Edit
venv\Scripts\activate
macOS/Linux:

bash
Copy
Edit
source venv/bin/activate
3. Install Dependencies
bash
Copy
Edit
pip install fastapi uvicorn sqlalchemy pydantic
(Optional: Use a requirements.txt file for one-step installation.)

4. Run the Backend
bash
Copy
Edit
cd backend
uvicorn main:app --reload
Open the API at 👉 http://127.0.0.1:8000

5. Launch the Frontend
Open frontend/index.html in your browser to start posting and viewing blogs.

✍️ Sample Blog Ideas
 Machine Learning

Generative AI (GenAI)

