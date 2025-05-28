const mainViews = document.getElementsByClassName("main-view");
const navbarItems = document.getElementsByClassName("navbar-item");
const views = new Map();

var activeView = 1;

// interpreting views
for (var element of mainViews) {
    const index = element.getAttribute("index");
    views.set(parseInt(index), element);
}

function changeView(index) {
    for (var view of views.values()) {
        if (views.get(index) === view) {
            view.style.display = "block";
        } else {
            view.style.display = "none";
        }
    }
}

for (var nav of navbarItems) {
    nav.addEventListener("click", (event) => {
        const target = event.target;
        const ref = target.getAttribute("ref");
        changeView(parseInt(ref))
    })
}

document.addEventListener("keydown", (event) => {
    const key = event.keyCode;
    if (event.ctrlKey) return;
    if (key !== 37 || key !== 39) return;
    if (key == 37) {
        if (activeView > 1) {
            activeView -= 1;
        } else {
            activeView = views.size;
        }
    } else if (key == 39) {
        if (activeView > 0 && activeView !== views.size) {
            activeView += 1;
        } else {
            activeView = 1;
        }
    }
    changeView(activeView);
})

changeView(activeView);