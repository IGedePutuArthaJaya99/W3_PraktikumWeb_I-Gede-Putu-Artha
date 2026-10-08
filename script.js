let form_task = document.getElementById("form_task");
let input_task = document.getElementById("input_task");
let list_task = document.getElementById("list_task");

// let saved_task = []
let saved_task_storage = JSON.parse(localStorage.getItem("saved_task")) || []

function render_task(){
    list_task.innerHTML = ''

    for(const element of saved_task_storage){
        let new_task = document.createElement("li")
        new_task.textContent = element
        list_task.appendChild(new_task);
    }

    // for(let i = 0; i < saved_task.length; i++){
    //     let new_task = document.createElement("li")
    //     new_task.textContent = saved_task[i]
    //     list_task.appendChild(new_task);
    // }
}
render_task()

    form_task.addEventListener("submit", function (e){
        e.preventDefault();
        
        saved_task_storage.push(input_task.value)
        localStorage.setItem("saved_task", JSON.stringify(saved_task_storage))

        render_task()
        input_task.value = ''
        
    })

// form_task.addEventListener("submit", function (e){
//     e.preventDefault();

//     saved_task.push(input_task.value)
//     render_task()
//     input_task.value = ''
// })

// form_task.addEventListener("submit", function (e){
//     e.preventDefault();
//     if(input_task.value.trim() !== ''){
//         let new_task = document.createElement("li");
//         new_task.textContent = input_task.value
//         list_task.appendChild(new_task);

//         input_task.value = '';
//     }
// })