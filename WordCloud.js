let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let addBtn = document.getElementById("addBtn");
let wordContain = document.getElementById("wordsContainer");
let userIp = document.getElementById("userInput");
let errmsg = document.getElementById("errorMsg");

function createWord() {
    if (userIp.value === "") {
        errmsg.textContent = "Enter Valid Word";
    } else {
        let spanEl = document.createElement("span");
        let random = parseInt((Math.random()) * 50);
        spanEl.textContent = userIp.value;
        spanEl.style.fontSize = String(random) + "px";
        userIp.value = null;
        wordContain.appendChild(spanEl);
        errmsg.textContent = "";
    }
}
addBtn.onclick = function() {
    createWord();
}
for (let eachitem of wordCloud) {
    let spanEl = document.createElement("span");
    let random = parseInt((Math.random()) * 50);
    spanEl.textContent = eachitem;
    spanEl.style.fontSize = String(random) + "px";
    wordContain.appendChild(spanEl);
}
