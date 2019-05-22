var counter = 1;

window.onload = function() {
    var inputVal = document.getElementById("taskName");
    var addTask = document.getElementById("buttonAdd");
    var listToDo = document.getElementById("todo");

    addTask.onclick = function() {
        if (inputVal.value === "")
            alert("Veuillez renseigner un nom de tâche");
        else {
            listToDo.innerHTML += "<tr id=\"" + counter + "\"><td>" + inputVal.value + "</td><td class=\"isDone\"><a onclick=\"done(" + counter + ")\" href=\"#\">" + getBtn("btn btn-success", "Fait") + "</a></td><td class=\"delete\"><a href=\"#\" onclick=\"removeElement(" + counter + ")\">" + getBtn("btn btn-danger", "Supprimer") + "</a></td></tr>";
            inputVal.value = "";
            counter++;
        }
    }
}

function getBtn(type, text) {
    return "<button type=\"button\" class=\"" + type + "\">" + text + "</button>";
}

function done(id) {
    var content = document.getElementById(id);
    var done = document.getElementById("done");

    done.innerHTML += "<tr id=\"" + counter + "\"><td>" + content.children[0].innerHTML + "</td><td class=\"delete\"><a onclick=\"removeElement(" + counter + ")\" href=\"#\">" + getBtn("btn btn-danger", "Supprimer") + "</a></td></tr>";
    counter++;
    removeElement(id);
}


function removeElement(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}
