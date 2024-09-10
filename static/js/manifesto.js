var desktop = $("#desktop");
var phone = $("#phone");
function toggleDisplay() {
    if (window.innerWidth < 610) {
        desktop.classList.add("hidden");
        phone.classList.remove("hidden");
    } else {
        desktop.classList.remove("hidden");
        phone.classList.add("hidden");
    }
}
toggleDisplay();
window.addEventListener('resize', toggleDisplay);

var links = $$("a");
var texts = $$("div[id*='text']");
links.forEach(function(link) {
    link.addEventListener("click", function() {
        links.forEach(function(link) {
            link.parentNode.classList.remove("selected");
        });
        link.parentNode.classList.add("selected");
        var target = `text_${link.id.split('_')[1]}`;
        texts.forEach(function(text) {
            text.classList.add("hidden");
        });
        $(`div[id='${target}']`).classList.remove("hidden");
    });
});

var arrow = $("arrow");
arrow.addEventListener("click", function() {
    var nextSibling = arrow.nextElementSibling;
    if (nextSibling) {
        var currentNum = parseInt(nextSibling.getAttribute("data-num")) || 0;
        nextSibling.setAttribute("data-num", currentNum + 1);
    }
});
