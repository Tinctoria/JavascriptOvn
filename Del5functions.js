//Functioner till del 5. 

//funktion som skapar ett li element, med text och trycker in det i ul-listan. 
function createListItem(text) {
    const newListItem = document.createElement("li"); 
    newListItem.textContent=text; 
    ul.appendChild(newListItem);
}

// function som kollar om UL elementet innehåller barn. 
function checkUl() {
    if(ul.childNodes==""){
        return true;
    }
}

//funktion som tar bort ett element.
function deleteListItem(event) {
    const target = event.target; 
    target.parentNode.removeChild(target);
}

// Funktion som kollar om det finns element att ta bort och i så fall lägger till en enventlistener på dem. 
function isDeletePossible() {
    if(!checkUl()){
        const listItems=document.querySelectorAll("li"); 
        Array.from(listItems).forEach(listItems=>listItems.addEventListener("click", deleteListItem));
    }
}