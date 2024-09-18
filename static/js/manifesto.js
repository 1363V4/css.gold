var links = $$("a");
links.forEach(function(link) {
    link.addEventListener("click", function() {
        links.forEach(function(link) {
            link.parentNode.classList.remove("selected");
        });
        link.parentNode.classList.add("selected");
    });
});

var arrow = $("#arrow");
var phone_text = $("#phone_text");
arrow.addEventListener("click", function() {
    var currentNum = parseInt(phone_text.getAttribute("data-num")) || 1;
    var nextNum = (currentNum % 13) + 1;
    phone_text.setAttribute("data-num", nextNum);
});
