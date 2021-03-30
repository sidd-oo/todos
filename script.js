inputElem = document.querySelector('#inputElem')
allComp = document.querySelector('.all ')
activeComp = document.querySelector('.active')
completedComp = document.querySelector('.completed')

countSpan = document.querySelector('.count p span')
countSpan.innerText = `${document.querySelectorAll('.todos-display .all ul li').length} todos here`

let allTask = []
let activeTask = []
let completedTask = []

function createListItemAndAppend(Tasks, listText){
    //Creating list item to display the entered todos
    const listItem = document.createElement('li');
    listItem.classList.add("listItem")
    listItem.textContent = listText
    Tasks.querySelector('ul').append(listItem);

    //Div elem so that icons can be enclosed for better alignment/styling
    const divElem = document.createElement('div');
    divElem.classList.add('buttonAlign')
    listItem.append(divElem)

    //Main the counts
    if(Tasks === allComp){
            countSpan.innerText = `${document.querySelectorAll('.todos-display .all ul li').length} todos here`
    }else if(Tasks === activeComp){
            countSpan.innerText = `${document.querySelectorAll('.todos-display .active ul li').length} active todos`
    }else if(Tasks === completedComp){
            countSpan.innerText = `${document.querySelectorAll('.todos-display .completed ul li').length} todos done`   
    }

    //tick icon
    const tickImage = document.createElement('img')
    tickImage.src = "/images/tick.png"
    tickImage.classList.add('tick')
    listItem.append(tickImage)
    //AddEventListen to tick
    tickImage.addEventListener('click',()=>{
        console.log("Tick Clicked")
        if(Tasks === allComp){
            let flagAdded = false
            //Searching whether it exists or not in completed tab
            completedComp.querySelectorAll('ul li').forEach((list)=>{
                if(list.innerText === listItem.innerText){
                    //Mark truem, if exists
                    flagAdded = true
                }
            })

            if(flagAdded === true){
                // Exists, prompt a warning
                  document.querySelector('p.warn').innerText = "This task is already in the completed todos tab."
                  setTimeout(()=>{
                      document.querySelector('p.warn').innerText = ""
                  },1000)
            }else{
                //Not Exist, add and promt a success message and change count 
                createListItemAndAppend(completedComp, listItem.innerText)
                countSpan.innerText = `${document.querySelectorAll('.todos-display .completed ul li').length} todos done`
                document.querySelector('p.success').innerText = "Task Completed !"
                setTimeout(()=>{
                      document.querySelector('p.success').innerText = ""
                  },1000)
            }
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
        document.querySelector('p.warn').innerText = "Removed Successfully !"
        setTimeout(()=>{
            document.querySelector('p.warn').innerText = ""
        },1000)

        //Count lists present
        if(Tasks === allComp){
            countSpan.innerText = `${document.querySelectorAll('.todos-display .all ul li').length} todos here`
        }else if(Tasks === activeComp){
            countSpan.innerText = `${document.querySelectorAll('.todos-display .active ul li').length} active todos`
        }else if(Tasks === completedComp){
            countSpan.innerText = `${document.querySelectorAll('.todos-display .completed ul li').length} todos done`   
        }
        
    })


    //Edit icon
    const editImage = document.createElement('img')
    editImage.src = "/images/edit.webp"
    editImage.classList.add('edit')
    listItem.append(editImage)
    //AddEventListen to edit
    // editImage.addEventListener('click',editFunctionality)

    
    //Strikethrough
    if(Tasks === allComp){
            const overText = document.querySelectorAll('.todos-display .all ul li')
            overText.forEach((item)=>{
            item.addEventListener('click',()=>{ 
                if(item.style.textDecoration === "line-through"){
                    item.style.textDecoration = "none"

                    createListItemAndAppend(activeComp,item.innerText)
                }else{
                    item.style.textDecoration = "line-through"
                    console.log("Strike through")
                    const listActiveItem = document.querySelectorAll(".todos-display .active ul li")
                    listActiveItem.forEach((i)=>{
                        if(item.innerText === i.innerText){
                            console.log(``)
                            i.remove()
                        }
                    })
                }
            })
        })
    }


    // Enclosing tick, bin, edit icons into a div
    divElem.append(tickImage)
    divElem.append(binImage)
    divElem.append(editImage)
 
}

//Driver function
inputElem.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        if(event.target.value !== ""){
            //List is created and appended in task tab
            createListItemAndAppend(allComp,event.target.value)
            createListItemAndAppend(activeComp,event.target.value)
            //reseting the last value of the input field
            event.target.value = ""
        }  
    }
})


//Tab buttons - All, Active, Completed
allTab = document.querySelector('.status .status-btn .all-btn')
activeTab = document.querySelector('.status .status-btn .active-btn')
completedTab = document.querySelector('.status .status-btn .completed-btn')

allTab.addEventListener('click', ()=>{
    console.log('All Tab Clicked')
    countSpan.innerText = `${document.querySelectorAll('.todos-display .all ul li').length} todos here`
    allComp.classList.remove('hidden')
    if(activeComp.className !== "hidden"){
           activeComp.classList.add('hidden')
    }
    if(completedComp.className !== "hidden"){
        completedComp.classList.add('hidden')
    }
    
})

activeTab.addEventListener('click', ()=>{
    console.log('Active Tab Clicked')
    countSpan.innerText = `${document.querySelectorAll('.todos-display .active ul li').length} active todos`
    activeComp.classList.remove('hidden')
    if(allComp.className !== "hidden"){
           allComp.classList.add('hidden')
    }
    if(completedComp.className !== "hidden"){
        completedComp.classList.add('hidden')
    }
})

completedTab.addEventListener('click', ()=>{
    console.log('Completed Tab Clicked')
    countSpan.innerText = `${document.querySelectorAll('.todos-display .completed ul li').length} todos done`
    completedComp.classList.remove('hidden')
    if(allComp.className !== "hidden"){
           allComp.classList.add('hidden')
    }
    if(activeComp.className !== "hidden"){
        activeComp.classList.add('hidden')
    }
})









