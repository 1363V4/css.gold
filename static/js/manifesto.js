var phoneDisplay = 1;

function updatePhone() {
    $$("#texts div").forEach(div => {
        div.style.display = div.id === phoneDisplay.toString() ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var isDesktop = window.innerWidth > 768;
    document.body.classList.add(isDesktop ? "gg-01" : "gg-10-v");
    if (isDesktop) {
        document.body.classList.add("gg-01");
        $("#arrow").classList.add("hidden");
        $$("#links div a").forEach(link => {
            link.addEventListener("click", function() {
                $$("#links div").forEach(div => div.classList.remove("selected"));
                this.parentNode.classList.add("selected");
            });
        });
    } else {
        document.body.classList.add("gg-10-v");
        $("#links").classList.add("hidden");
        $("#arrow").addEventListener("click", function() {
            phoneDisplay = (phoneDisplay % 13) + 1;
            console.log(phoneDisplay);
            updatePhone();
        });
        updatePhone();
    }
});
