inputElem = document.querySelector('#inputElem')
allComp = document.querySelector('.all ul')
activeComp = document.querySelector('.active ul')
completedComp = document.querySelector('.completed ul')

allTab = document.querySelector('.todos-display  div .all')
activeTab = document.querySelector('.todos-display  div .active')
completedTab = document.querySelector('.todos-display div .completed')

let allTask = []
let activeTask = []
let completedTask = []

function createListItemAndAppend(Tasks, listText){
    //Creating list item to display the entered todos
    const listItem = document.createElement('li');
    listItem.classList.add("listItem")
    listItem.textContent = listText
    Tasks.append(listItem);

    //Div elem so that icons can be enclosed for better alignment/styling
    const divElem = document.createElement('div');
    divElem.classList.add('buttonAlign')
    listItem.append(divElem)

    //tick icon
    const tickImage = document.createElement('img')
    tickImage.src = "/images/tick.png"
    tickImage.classList.add('tick')
    listItem.append(tickImage)
    //AddEventListen to tick
    // tickImage.addEventListener('click',tickFunctionality)

    //bin icon
    const binImage = document.createElement('img')
    binImage.src = "/images/bin.jpg"
    binImage.classList.add('bin')
    listItem.append(binImage)
    //AddEventListen to bin
    binImage.addEventListener("click",()=>{
        console.log("Hella")
        listItem.remove()
    })

    // function binFunctionality(){
    //     console.log("Bin Function")
    //     listItem.remove()
    // }

    //Edit icon
    const editImage = document.createElement('img')
    editImage.src = "/images/edit.webp"
    editImage.classList.add('edit')
    listItem.append(editImage)
    //AddEventListen to edit
    // editImage.addEventListener('click',editFunctionality)

    // Enclosing tick, bin, edit icons into a div
    divElem.append(tickImage)
    divElem.append(binImage)
    divElem.append(editImage)
}

inputElem.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        if(event.target.value !== ""){
            //List is created and appended in task tab
            createListItemAndAppend(allComp,event.target.value)
            //reseting the last value of the input field
            allTask.push(event.target.value)
            event.target.value = ""
        }  
    }
})

allTab.addEventListener('click',(event)=>{
    console.log("Clicked alltab")
    event.target.classList.remove('hidden')
    console.log(event.target)
})
activeTab.addEventListener('click',(event)=>{
    console.log("Clicked active tab")
    event.target.classList.remove('hidden')
    console.log(event.target)
})
completedTab.addEventListener('click',(event)=>{
    console.log("Clicked completed tab")
    event.target.classList.remove('hidden')
    console.log(event.target)
})




