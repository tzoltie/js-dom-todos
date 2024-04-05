const toDoForm = document.querySelector('form')
toDoForm.setAttribute('id', 'add-toDo')

const toDoInput = document.querySelector('input')
toDoInput.classList = 'toDo-Input'

const findAddBtn = document.querySelectorAll('input')
const addToDoBtn = findAddBtn[1]
addToDoBtn.classList = 'add-toDo-Btn'

const toDoList = document.querySelector('ul')
toDoList.classList = 'toDo-List'


function getToDo() {
    fetch('https://boolean-api-server.fly.dev/tzoltie/todo')
    .then(response => response.json())
    .then(json => {
        toDoList.innerHTML = ''
        json.forEach(toDo => createToDoList(toDo.title, toDo.completed))
    })
}


function createToDoList(toDo, completed) {
        const toDoListItem = document.createElement('li')
        toDoListItem.innerText = toDo
        toDoList.append(toDoListItem)
        if (completed === true) {
            toDoListItem.classList.add('completed')
        }
}

const userInputValue = toDoInput.value

toDoForm.addEventListener('submit', (element) => {
    element.preventDefault()

    fetch('https://boolean-api-server.fly.dev/tzoltie/todo', {
        method: 'POST',
        body: JSON.stringify({
            title: userInputValue,
            body: userInputValue,
        }),
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then(json => {
            getToDo()
            toDoInput.innerHTML = ''
        })
})


