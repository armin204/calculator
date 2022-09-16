var div = document.getElementById("show"),
    finish;

function show(id, isKey = false) {
    if (finish == true)
        div.innerHTML = ""

    console.log(id.value)
    finish = false;
    if (id == equiel || id == "=") {
        div.innerHTML = eval(div.innerHTML);
        return finish = true
    }
    if (isKey) return div.innerHTML += id

    div.innerHTML += id.value
}

function checkkey(event) {
    if (isFinite(event.key) || event.key == '+' || event.key == '*' || event.key == '/' || event.key == '-' || event.key == '=') {
        show(event.key, true);
    }
}

function clean() {
    div.innerHTML = ""
}
