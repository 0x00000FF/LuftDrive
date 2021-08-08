function Window(id) {
    /*
     * Event related properties and handlers
     */

    this.dragOffset = { x: -1, y: -1 };

    this.onDragStart = function (e) {

    };

    this.onDrag = function (e) {

    }

    this.onTitleDblClick = function (e) {

    }

    this.onResize = function (e) {

    }

    /*
     * Initialization codes
     */

    const windowElement = document.getElementById(id);

    if (!windowElement)
        throw "Not Found";

    const windowTitlebarElement = document.querySelector(`${id} > .window-header`);

    if (!windowTitlebarElement)
        throw "Invalid";

    windowTitlebarElement.addEventListener("mouseover", function (e) {
        e.target.focus();
    });

}