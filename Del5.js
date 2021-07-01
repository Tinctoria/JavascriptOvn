// Del 5. Javasript på webben

//Hämtar de element jag behöver från HTML

const inputField=document.getElementById("inputField")
const button=document.getElementById("myButton"); 
const ul=document.getElementById("myUl");

//Eventlistener på knappen. 
button.addEventListener("click", function(){
    if(inputField.value===""){
        alert("Field must not be empty");   //felmeddelande om inputfältet är tomt. 
    } else{
        createListItem(inputField.value);
        isDeletePossible();
        inputField.value=""; //rensar inputfältet efter att litsitem blivit tillagt. 
    }
});