inputElem = document.querySelector('#inputElem')
allComp = document.querySelector('.all ul')
activeComp = document.querySelector('.active ul')
completedComp = document.querySelector('.completed ul')
countSpan = document.querySelector('.count p span')
let count = 0
countSpan.innerContent = `${count} items left`

console.log({allComp, activeComp, completedComp})
console.log(completedComp)

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
    tickImage.addEventListener('click',()=>{
        console.log("Tick Clicked")
        if(Tasks === allComp){
            createListItemAndAppend(completedComp, listItem.innerText)
        }
        
    })

    //bin icon
    const binImage = document.createElement('img')
    binImage.src = "/images/bin.jpg"
    binImage.classList.add('bin')
    listItem.append(binImage)
    //AddEventListen to bin
    binImage.addEventListener("click",()=>{
        listItem.remove()
        count--
        countSpan.innerText = `${count} items left`
    })


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
            event.target.value = ""
            count++
            countSpan.innerText = `${count} items left`
        }  
    }
})

allTab = document.querySelector('.status .status-btn .all-btn')
activeTab = document.querySelector('.status .status-btn .active-btn')
completedTab = document.querySelector('.status .status-btn .completed-btn')

allTab.addEventListener('click', ()=>{
    console.log('All Tab Clicked')
    allComp.classList.remove('hidden')
    activeComp.classList.add('hidden')
    completedComp.classList.add('hidden')
})

activeTab.addEventListener('click', ()=>{
    console.log('Active Tab Clicked')
    activeComp.classList.remove('hidden')
    allComp.classList.add('hidden')
    completedComp.classList.add('hidden')
})

completedTab.addEventListener('click', ()=>{
    console.log('Completed Tab Clicked')
    completedComp.classList.remove('hidden')
    allComp.classList.add('hidden')
    activeComp.classList.add('hidden')
})









