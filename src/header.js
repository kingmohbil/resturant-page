import { createButton } from "./buttons"

// this function here used to create the header and the three buttons 
export function createHeader(){
    const header = document.createElement('div')
    header.classList.add('header')
    document.body.prepend(header)
    createHeaderElemnts(header)
}

// this function here creates the buttons and the text in the header 
// also it adds event listners to it to add a little annimation 

function createHeaderElemnts(header){
    const title = document.createElement('div')
    const btnContainer = document.createElement('div')
    createButton(btnContainer,'Home', 'Home')
    createButton(btnContainer,'Menu', 'Menu')
    createButton(btnContainer, 'Contact', 'Contact')
    btnContainer.classList.add('btnContainer')
    title.classList.add('headerTitle')
    title.textContent = 'Horizon Resturant'
    header.prepend(title)
    header.appendChild(btnContainer)

}
