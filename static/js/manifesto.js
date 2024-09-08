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
