let input_box = document.querySelector(".inputfield")
let btn = document.querySelector("#btn")
let task_list = document.querySelector("#task_container")


btn.addEventListener("click", todo_list)

function todo_list(value) {
    if (input_box.value === "") {
        alert("plz enter your remember activity");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input_box.value;
        task_list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input_box.value = '';
}

task_list.addEventListener("click",
    function (e) {
        if (e.target.tagName === 'LI') {
                   e.target.classList.toggle("checked");
                   savedata();
        }
        else if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove();
             savedata();
        }
    }
)

function savedata(){
    localStorage.setItem("task" ,task_list.innerHTML)
}

function showdata() {
    task_list.innerHTML = localStorage.getItem("task");
}

showdata()