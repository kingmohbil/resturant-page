import {homeLayout} from './homeLayout' 
import {createHeader} from './header'
import { createFooter } from './footer';
createHeader()
createFooter()
const container = document.getElementById('container')
const HomeBtn = document.getElementById('Home')
homeLayout(container)
HomeBtn.addEventListener('click', () =>{
    container.innerHTML = ''
    homeLayout(container)
})
document.getElementById('Menu').onclick = () =>{
    container.innerHTML = ''
    
}

