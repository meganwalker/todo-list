//For date at top of page
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + " / " + dd + ' / ' + yyyy;
document.querySelector('.currentdate').innerHTML = (today);


// striking though a completed task
function lineThrough(elem) {
  elem.style.textDecoration = 'line-through';
}

//adding task to list

let input = document.getElementById('addtask');
 input.addEventListener("keydown", addItem)


function addItem(event) {
  if (event.keyCode === 13) {
    let text = event.target.value
    appendTask(text)
    document.querySelector('.task').value = ' '
  }
}

function appendTask(text) {
  let newItem = document.createElement("li")
  newItem.innerHTML = text;
  newItem.setAttribute("onclick", "lineThrough(this)");
  document.querySelector('ul').appendChild(newItem);
}

// how to add attributes onto elements line 39
