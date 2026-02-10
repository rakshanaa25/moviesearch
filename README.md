# 🎬 Movie Search App

A simple and interactive **Movie Search Web Application** built using **HTML, CSS, and JavaScript**.  
The app allows users to search for movies and TV shows and view results dynamically using a public API.

The UI is inspired by **IMDb**, featuring a dark theme with yellow highlights.

---

## ✨ Features

- 🔍 Search functionality for movies and TV shows  
- 📄 Dynamic display of results using DOM manipulation  
- ⏳ Loading indicator while fetching data  
- ❌ User-friendly message when no results are found  
- ⚠️ Error handling for API failures  
- 🎨 Dark-themed UI (black background with yellow accents)

---

## 🛠️ Technologies Used

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **TVMaze Public API**

---

## ⚙️ How the Application Works

1. User enters a movie or TV show name in the search bar  
2. The app sends a request to the TVMaze API  
3. Data is fetched asynchronously using `fetch` and `async/await`  
4. Results are rendered dynamically as cards on the page  
5. Handles missing images, empty results, and API errors gracefully  

---

## ⚠️ API Limitations

This project uses the **TVMaze public API**, which has certain limitations:

- The API primarily focuses on **TV shows**, not all movies  
- Some popular or upcoming movies may not appear in search results  
- Results depend entirely on the data available in the TVMaze database  

These limitations are acknowledged and documented as part of the project.

---

## 📁 Project Structure

movie-search-app
│
├── index.html
├── style.css
├── script.js
└── README.md




---

## 🌐 Live Demo

🔗 **Deployed Link:** https://rakshanaa25.github.io/moviesearch/

---

## 👤 Author

**Rakshanaa**  
Developed as part of **Week 2 – JavaScript + DOM Interactivity Task**

---

⭐ Thank you for checking out this project!
