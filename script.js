document.addEventListener("DOMContentLoaded", function () { // Smooth scrolling for navigation links document.querySelectorAll("nav a").forEach(anchor => { anchor.addEventListener("click", function (e) { e.preventDefault(); const targetId = this.getAttribute("href").substring(1); document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); }); });

// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Dynamic blog post loading (Example: Medium embed integration)
fetchMediumPosts();

});

function fetchMediumPosts() { const mediumUsername = "ayushHardeniya"; const mediumFeedUrl = https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername};

fetch(mediumFeedUrl)
    .then(response => response.json())
    .then(data => {
        const blogSection = document.getElementById("blogs");
        const blogContainer = blogSection.querySelector(".blog-list");
        blogContainer.innerHTML = "";
        
        data.items.slice(0, 3).forEach(item => {
            const blogPost = document.createElement("div");
            blogPost.classList.add("blog-post");
            blogPost.innerHTML = `
                <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                <p>${item.description.substring(0, 150)}...</p>
            `;
            blogContainer.appendChild(blogPost);
        });
    })
    .catch(error => console.error("Error fetching Medium posts:", error));

}

