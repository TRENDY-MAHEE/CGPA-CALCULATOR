// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/trendy_mahee", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/maheendra/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/TRENDY-MAHEE", "_blank");
    }
    if (x == 4) {
        window.open("https://maheeportfolio.netlify.app/", "_blank");
    }
}