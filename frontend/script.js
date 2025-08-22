const API_URL = "http://127.0.0.1:8000/blogs/";
const messageBox = document.getElementById("message");
const loader = document.getElementById("loader");

async function fetchBlogs() {
  loader.style.display = "block"; // show loader
  const response = await fetch(API_URL);
  const blogs = await response.json();
  loader.style.display = "none"; // hide loader

  const blogsDiv = document.getElementById("blogs");
  blogsDiv.innerHTML = "";

  if (blogs.length === 0) {
    blogsDiv.innerHTML = "<p style='text-align:center;color:#888;'>No blogs yet. Be the first to post!</p>";
    return;
  }

  blogs.forEach(blog => {
    const div = document.createElement("div");
    div.classList.add("blog-item");
    div.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
    `;
    blogsDiv.appendChild(div);
  });
}

async function addBlog() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  // Validation
  if (!title || !content) {
    showMessage("⚠️ Title and content cannot be empty.", "red");
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title, content})
    });

    if (response.ok) {
      showMessage("✅ Blog posted successfully!", "green");
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
      fetchBlogs();
    } else {
      showMessage("❌ Failed to post blog.", "red");
    }
  } catch (error) {
    showMessage("❌ Error connecting to server.", "red");
  }
}

function showMessage(msg, color) {
  messageBox.innerText = msg;
  messageBox.style.color = color;
  setTimeout(() => {
    messageBox.innerText = "";
  }, 3000);
}

// Load blogs on page load
window.onload = fetchBlogs;
