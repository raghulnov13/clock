const counter = document.querySelector('.counter');
const incr = document.querySelector('.incr');
const decr = document.querySelector('.decr');

let count = 0;
incr.addEventListener("click", () => {
    count = count + 1;
    counter.innerHTML = count;
});
decr.addEventListener("click", () => {
    count = count - 1;
    counter.innerHTML = count;
});