let inputs = document.getElementById("inp")
let text = document.querySelector("#list")

function addTask() {
    if (inputs.value == "") {
        alert("Enter your task")
    }
    else {
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputs.value}`
        "<i>click to delete</i>";
        text.appendChild(newElement);
        inputs.value = "";
        newElement.querySelector("i").addEventListener("click", remove);
        function remove() {
            newElement.remove();
        }
    }
}