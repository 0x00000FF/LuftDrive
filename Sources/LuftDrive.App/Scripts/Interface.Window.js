function Window(props) {
    /*
     * Event related properties and handlers
     */

    this.dragOffset = { x: -1, y: -1 };
    this.isDragging = false;

    this.isFullScreen = false;
    this.isMinimized = false;

    /*
     * Initialization codes
     */

    const id = props.id;
    const windowElement = document.getElementById(id);

    if (!windowElement)
        throw "Not Found";

    const windowTitlebarElement = document.querySelector(`#${id} > .window-header`);

    if (!windowTitlebarElement)
        throw "Invalid";

    windowTitlebarElement.addEventListener("dblclick", e => {
        this.isFullScreen = !this.isFullScreen;
        windowElement.setAttribute("is-fullscreen", this.isFullScreen);
    });

    windowTitlebarElement.addEventListener("mousedown", e => {
        this.isDragging = true;

        this.dragOffset.x = e.offsetX;
        this.dragOffset.y = e.offsetY;
    });

    windowTitlebarElement.addEventListener("mouseup", e => {
        this.isDragging = false;
    });

    windowTitlebarElement.addEventListener("mousemove", e => {
        if (this.isDragging) {
            windowElement.style.left = (e.clientX - this.dragOffset.x) + "px";
            windowElement.style.top = (e.clientY - this.dragOffset.y) + "px";
        }
    });

    windowTitlebarElement.addEventListener("mouseout", e => {
        if (this.isDragging) {
            const nextPosX = e.clientX - this.dragOffset.x;
            const nextPosY = e.clientY - this.dragOffset.y;

            if (e.clientX < 0 || e.clientY < 0)
                return;

            windowElement.style.left = nextPosX + "px";
            windowElement.style.top = nextPosY + "px";
        }
    });

    windowElement.style.height = props.height;
    windowElement.style.width = props.width;
}

function CreateWindow(id) {
    return new Window(id);
}