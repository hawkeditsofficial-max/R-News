function addNews() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Please enter both title and content.");
    return;
  }

  const newsContainer = document.getElementById("news-container");
  const newsItem = document.createElement("div");
  newsItem.className = "news bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition";
  newsItem.innerHTML = `
    <h3 class="text-lg font-bold mb-2">${title}</h3>
    <p class="text-gray-700">${content}</p>
  `;
  
  newsContainer.prepend(newsItem);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
