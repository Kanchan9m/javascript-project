const note = document.querySelector("#note")
const todobox = document.querySelector("#todo-box")

note.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter"){
            addtodo(this.value)
            this.value = ""
        }
    }
)
const addtodo = (note) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `
        ${note}
    <i class="fas fa-times"></i>`;

    listitem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove();
        }
    )
    todobox.appendChild(listitem)
}