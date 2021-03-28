inputElem = document.querySelector('#inputElem')
allTasks = document.querySelector('.all ul');

function createListItemAndAppend(Tasks, listText){
    const list = document.createElement('li');
    list.classList.add("listItem")
    list.textContent = listText
    Tasks.append(list);

}

inputElem.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        if(event.target.value !== ""){
            //List is created and appended in task tab
            createListItemAndAppend(allTasks,event.target.value)
        }
        //reseting the last value of the input
        event.target.value = ""
    }
})