function hideshow() {
    var x = document.getElementById("nav-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
$(document).ready(function() {

    var typed = new Typed(".typing", {
        strings: ["ウェブサイト開発者", "フロントエンド エンジニア"],
        typeSpeed: 200,
        backSpeed: 120,
        loop: true
    });
});