function addNews() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const image = document.getElementById("image").value;

  if (!title || !content) {
    alert("Please enter both title and content.");
    return;
  }

  const newsContainer = document.getElementById("news-container");
  const newsItem = document.createElement("div");

  newsItem.className = "news bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 opacity-0";
  
  newsItem.innerHTML = `
    ${image ? `<img src="${image}" alt="${title}" class="w-full h-40 object-cover rounded-md mb-3">` : ''}
    <h3 class="text-lg font-bold mb-2">${title}</h3>
    <p class="text-gray-700">${content}</p>
  `;

  newsContainer.prepend(newsItem);

  // Fade-in animation
  setTimeout(() => {
    newsItem.style.opacity = 1;
    newsItem.style.transition = "opacity 0.5s";
  }, 10);

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("image").value = "";
}
