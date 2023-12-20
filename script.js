let degrees = 90;
function spin() {
    degrees++;
    document.body.style.backgroundImage = "linear-gradient(" + degrees + "deg, #ff738e, #da6fe1, #997efa)";
}

let keylog = [];
let still = true;
document.onkeydown = function (e) {
    let keypressed = e.key;
    keylog.push(keypressed);
    if (keylog.toString().includes("s,p,i,n")) {
        if (still) {
            still = false;
            setInterval(spin, 5);
            spin();
        }
    }
};

function display() {
    alert("this link doesn't work yet");
}