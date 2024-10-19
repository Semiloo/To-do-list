let body = document.querySelector("body")

body.addEventListener("click", () => {

})

let line = document.querySelector("ul")
let li = document.querySelectorAll("ul li")
console.log(li.length)


task.addEventListener("click", (e) => {

   if (e.target.tagName === "LI") {
      // This block will execute only if the clicked element is an li
      console.log(e.target.firstChild)
      e.target.firstChild.classList.toggle("checked")
      e.target.classList.toggle("strikethrough")
   }

})


let input = document.querySelector("input") // Target the input bar
let ul = document.querySelector("ul") // Target the input text
let checked = document.querySelector("li")
let change = document.querySelector("footer .first")
change.innerHTML = li.length + " " + "items left"


input.addEventListener("keypress", (event) => { //To add an eventListener to perform a function
   if (event.key === "Enter") { //To check if enter is clicked 
      let newTodo = document.createElement("li") //Create a new todo
      let check = document.createElement("span") //create the new todo check box
      if (input.value === "") {
         alert("Type a sentence to add a new todo")
         return
      } else {
         newTodo.innerHTML = input.value //To write the todo into the todo list
         newTodo.prepend(check) //To add put the new todo below all other todo 
         ul.prepend(newTodo)
         input.value = ""
         console.log(newTodo)
         li = document.querySelectorAll("ul li")
         change.innerHTML = li.length + " " + "items left"
         console.log(li.length)
      }

   }
   if (change.value === "") {

   }
})