const form = document.getElementById('action');
const orderedList = document.getElementById('list');
var listArray = [];

function addRemoveButtonHTML(index) {
    orderedList.innerHTML += "<button type='button' onClick='deleteFromList(" + index + ")'>Remove from list ❌</button>";
}

function addDoneButtonHTML(index) {
    orderedList.innerHTML += "<button type='button' onClick='strikeThru(" + index + ")'>Finished ✔️</button>";
}

function updateList() {
    orderedList.innerHTML = "";
    for (var i = 0; i < (listArray.length); i++){
        if(listArray[i].strike){
            orderedList.innerHTML += "<p style = 'text-decoration: line-through;'>" + (i+1) + ". " + listArray[i].data + "</p>";
        }
        else{
            orderedList.innerHTML += "<p>" + (i+1) + ". " + listArray[i].data + "</p>";
        }
        addDoneButtonHTML(i);
        addRemoveButtonHTML(i);

    }

}

function checkDuplicate() {
    for(var i = 0; i < listArray.length; i++){
        if(form.value == listArray[i].data){
            return false;
        }
    }
    return true;
        
}

function addToList() {
    if(form.value != "" && checkDuplicate()){
        listArray.push({"data": form.value, "strike": false});
        updateList();
    }
}

function deleteFromList(index) {
    listArray.splice(index, 1);
    updateList();
}

function strikeThru(index) {
    listArray[index].strike = true;
    updateList();

}

function clearList() {
    const length = listArray.length;
    for(var i = 0; i < length; i++){
        listArray.pop();
    }
    updateList();
}