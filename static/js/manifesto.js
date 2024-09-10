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
var texts = $$("#desktop div[id*='text']");
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

var arrow = $("#arrow");
var phone_text = $("#phone_text");
arrow.addEventListener("click", function() {
    var currentNum = parseInt(phone_text.getAttribute("data-num")) || 1;
    var nextNum = (currentNum % 13) + 1;
    phone_text.setAttribute("data-num", nextNum);
});
