document.addEventListener("DOMContentLoaded", () => {
    const regex = /\(\(p\.\s*(\d+)\)\)/gi;

    // Broader selectors that work better with current Material
    const selectors = [
        ".md-content__inner",
        ".md-typeset",
        "article",
        "main"
    ];

    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((content) => {
            if (content.innerHTML) {
                content.innerHTML = content.innerHTML.replace(regex, (match, num) => {
                    return `<span class="page-number">p. ${num}</span>`;
                });
            }
        });
    });
});