var desktop = $("#desktop");
var phone = $("#phone");

var arrow = $("#arrow");
var phone_text = $("#phone_text");
arrow.addEventListener("click", function() {
    var currentNum = parseInt(phone_text.getAttribute("data-num")) || 1;
    var nextNum = (currentNum % 13) + 1;
    phone_text.setAttribute("data-num", nextNum);
});
