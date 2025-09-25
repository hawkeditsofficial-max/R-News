// -------------------------
// Script.js for R-News
// -------------------------

// Admin panel (hidden for now)
const adminSection = document.getElementById("admin-section");
adminSection.style.display = "none"; // Hidden for normal users

// Navbar: highlight active tab and disable click on current page
const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "home";
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.dataset.page === currentPage) {
    link.classList.add("text-yellow-400"); // highlight current page
    link.addEventListener("click", e => e.preventDefault()); // disable click
  }
});

// Auto-set category for category pages (World, Tech, Sports)
const categorySelect = document.getElementById("category");
const pageCategoryMap = { world: "World", tech: "Tech", sports: "Sports" };
if (pageCategoryMap[currentPage]) {
  categorySelect.value = pageCategoryMap[currentPage];
}

// Load news from localStorage
let newsList = JSON.parse(localStorage.getItem("newsList")) || [];

function displayNews() {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  newsList.forEach((news) => {
    // Filter by category if on category page
    if (pageCategoryMap[currentPage] && news.category !== pageCategoryMap[currentPage]) return;

    const newsItem = document.createElement("div");
    newsItem.className = "news bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300";

    newsItem.innerHTML = `
      ${news.image ? `<img src="${news.image}" alt="${news.title}" class="w-full h-40 object-cover rounded-md mb-3">` : ''}
      <h3 class="text-lg font-bold mb-2">${news.title}</h3>
      <p class="text-gray-700 mb-2">${news.content}</p>
      <span class="inline-block bg-yellow-400 rounded-full px-2 py-1 text-sm cursor-pointer" onclick="goToCategory('${news.category}')">${news.category} News</span>
    `;

    newsContainer.prepend(newsItem);
  });
}
displayNews();

// Add news (admin only, hidden for now)
function addNews() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const image = document.getElementById("image").value.trim();
  const category = document.getElementById("category").value;

  if (!title || !content || !category) {
    alert("Please fill title, content, and category!");
    return;
  }

  newsList.push({ title, content, image, category });
  localStorage.setItem("newsList", JSON.stringify(newsList));

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("image").value = "";
  if (!pageCategoryMap[currentPage]) document.getElementById("category").value = "";

  displayNews();
}

// Click category label → navigate to category page
function goToCategory(category) {
  const categoryPageMap = { "World": "world.html", "Tech": "tech.html", "Sports": "sports.html" };
  if (categoryPageMap[category]) window.location.href = categoryPageMap[category];
}
