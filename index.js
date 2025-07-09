const textarea = document.querySelector('textarea')
const addBtn = document.getElementById('addBtn')
const todoContainer = document.querySelector('.todoContainer')

let todoList = []

function addTodo() {
    const todo = textarea.value
    if (!todo) { return }
    console.log('Add todo: ', todo)
    todoList.push(todo)
    textarea.value = '' // resests to empty
    updateUI()
}
function updateUI() {
    let newInnerHTML = ''
    todoList.forEach((todoElement) => {
        newInnerHTML += `
        <div class="todo">
        <p>${todoElement}</p>
        <div class="btnContainer"> 
            <button class="iconbtn">
                <i class="fa-solid fa-pen-to-square"></i>
            </button> 
            <button class="iconbtn">
                <i class="fa-solid fa-trash"></i>
            </button> 
        </div>
    </div>      
        `
    })

    todoContainer.innerHTML = newInnerHTML
}

addBtn.addEventListener('click', addTodo)
