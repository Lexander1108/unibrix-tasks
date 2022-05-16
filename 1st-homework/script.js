document.getElementById("add").onclick = addNew;
document.getElementById("remove").onclick = removeLast;

let list = document.querySelector('ol');

function addNew(){
    let newNote = document.createElement('li');
    newNote.innerHTML = document.querySelector(".inputData").value;
    if (document.querySelector(".inputData").value == ''){
        alert('Please, enter some text firstly!');
    }
    else {
        list.append(newNote);
    }
}

function removeLast(){
    list.removeChild(list.lastElementChild);
}