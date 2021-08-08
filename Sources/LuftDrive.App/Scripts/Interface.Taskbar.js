function StartTaskbarClock() {
    const clock = document.querySelector(".taskbar-clock");

    if (!clock)
        return;

    setInterval(() => {
        clock.innerHTML = new Date().toLocaleString();
    }, 1000);
}