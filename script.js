function handleClick() {
    const counter = document.getElementById("counter");
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function resetCounter() {
    const counter = document.getElementById("counter");
    counter.innerHTML = "0";
}

