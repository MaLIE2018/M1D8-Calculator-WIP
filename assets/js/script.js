// Exercise 5

const addTask = (params) => {
    let task = document.querySelector("#taskInput").value
    let tasklist = document.querySelector("#taskList")
        // Create 
    let li = document.createElement("li")
    let removeButton = document.createElement("button")
    let UpButton = document.createElement("button")
        //let DownButton = document.createElement("button")
    let textNode = document.createTextNode(`${task}`)
    let span = document.createElement("span")


    removeButton.textContent = "Remove Task"
        //DownButton.textContent = "Move Down"
    UpButton.textContent = "Move Up"

    li.appendChild(textNode)
    li.appendChild(span)
    li.appendChild(removeButton)
    li.appendChild(UpButton)
        //li.appendChild(DownButton)

    tasklist.appendChild(li)

    document.querySelector("#taskInput").value = ""

    /* EXERCISE 6: 
        Create a method "removeLast" which removes the last item from the task list
    */
    removeButton.addEventListener("click", () => {
        removeButton.parentElement.remove()
    })

    UpButton.addEventListener("click", (event) => {
        // let ul = document.querySelector("#taskList")
        // console.log('ul:', ul)
        // console.log(ul.children);
        // let li = event.target.parentNode //li element
        // let listArray = Array.from(li.parentNode.children)
        // let oldPosition = listArray.indexOf(li)
        // ul.children[5]
    })

    //Extra

}

const removeLast = () => {
        let tasklist = document.querySelector("#taskList")
        tasklist.lastChild.remove()
    }
    /* EXERCISE 7: 
              Create a method "removeFirst" which removes the first item from the task list
          */

const removeFirst = () => {
    let tasklist = document.querySelector("#taskList")
    tasklist.firstChild.remove()
}

/* EXERCISE 8: 
         Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as string
      */

const getTasksAsArray = () => {
    let taskList = document.querySelector("#taskList").children
    let taskArray = []

    for (const item of taskList) {
        taskArray.push(item.firstChild.textContent)
    }
    console.log(taskArray)
}

getTasksAsArray()

/* EXERCISE 9:
         Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
         onchange event listener ad applies it as background to every list item
      */

const changeTaskBackgroundColor = (event) => {
    let colorPicker = document.querySelector("#colorPicker")
    let tasklist = document.querySelector("#taskList").children
    for (const item of tasklist) {
        item.style.backgroundColor = colorPicker.value
    }

}

/* EXTRA */

/* EXERCISE 10: 
         Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
      
         Use your spare time to beautify your task list via CSS.

         Suggestion:
         - Break the code into many function for semplicity 
         - Reuse the functions previously created
      */
const bubblesort = (params) => {
    console.log("test");
}




Window.onload = function() {
    let AddTaskButton = document.querySelector("#addTask")
    let RemoveTaskButton = document.querySelector("#removeTask")
    let RemoveFirstTaskButton = document.querySelector("#removeFirstTask")
    let BackgroundButton = document.querySelector("#background")
    let SortButton = document.querySelector("#sort")



    AddTaskButton.onclick = function(event) {
        addTask()
    }
    RemoveTaskButton.onclick = function(event) {
        removeLast()
    }
    RemoveFirstTaskButton.onclick = function(event) {
        removeFirst()
    }
    BackgroundButton.onclick = function(event) {
        changeTaskBackgroundColor()
    }

    SortButton.onclick = function(event) {
        bubblesort()
    }



}

Window.onload()


// array = [a, b, c, d, e, f]

// const swop = (i) => {
//     let changeElement array[i]
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//     }
// }

// swop(6)

console.log("taska" < "taskb");