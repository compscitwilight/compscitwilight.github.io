const cursor = document.getElementById("cursor-blink");
function loopStart() {
    cursor.style.display = cursor.style.display == "block" ? "none" : "block";
    setTimeout(() => {
        loopStart();
    }, 750);
}

loopStart();