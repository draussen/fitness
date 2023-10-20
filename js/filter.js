// script.js
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const articles = document.querySelectorAll(".articles");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");

            articles.forEach((article) => {
                const articleCategory = article.getAttribute("data-category");

                if (filterValue === "all" || filterValue === articleCategory) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
        });
    });
});
