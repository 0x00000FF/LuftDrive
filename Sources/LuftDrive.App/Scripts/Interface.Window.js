function Window(props) {
    /*
     * Event related properties and handlers
     */

    this.dragOffset = { x: -1, y: -1 };
    this.isDragging = false;

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

    windowTitlebarElement.addEventListener("mousedown", e => {
        this.isDragging = true;

        this.dragOffset.x = e.offsetX;
        this.dragOffset.y = e.offsetY;

        console.log("[window] mousedown on titlebar, offsetX:" + this.dragOffset.x + ", offsetY:" + this.dragOffset.y);
    });

    windowTitlebarElement.addEventListener("mouseup", e => {
        this.isDragging = false;
        console.log("[window] mouseup on titlebar");
    });

    windowTitlebarElement.addEventListener("mousemove", e => {
        if (this.isDragging) {
            windowElement.style.left = (e.clientX - this.dragOffset.x) + "px";
            windowElement.style.top = (e.clientY - this.dragOffset.y) + "px";

            console.log("[window] window is moving!!");
        }
    });

    windowTitlebarElement.addEventListener("mouseout", e => {
        if (this.isDragging) {
            windowElement.style.left = (e.clientX - this.dragOffset.x) + "px";
            windowElement.style.top = (e.clientY - this.dragOffset.y) + "px";
        }
    });

    windowElement.style.height = props.height;
    windowElement.style.width = props.width;

    console.log("[window] initialized, id: " + id);
}

function CreateWindow(id) {
    return new Window(id);
}