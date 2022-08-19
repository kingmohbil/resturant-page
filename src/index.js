import {homeLayout} from './homeLayout' 
import {createHeader} from './header'
import {createFooter } from './footer'
import {createMenu} from './menu'
import {createConatct} from './contact'
createHeader()
createFooter()
const container = document.getElementById('container')
const HomeBtn = document.getElementById('Home')
const MenuBtn = document.getElementById('Menu')
const contactBtn = document.getElementById('Contact')
homeLayout(container)
HomeBtn.addEventListener('click', () =>{
    container.innerHTML = ''
    homeLayout(container)
})
MenuBtn.addEventListener('click', () =>{
    container.innerHTML = ''
    createMenu(container)
})

contactBtn.addEventListener('click', () =>{
    container.innerHTML = ''
    createConatct(container)
})
