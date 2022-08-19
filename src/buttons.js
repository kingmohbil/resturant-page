// creates the buttons to the header file and this function is exported to 
// the header.js file to organize the work 
export function createButton(parent, text, id){
    const btn = document.createElement('button')
    btn.classList.add('headerButtons')
    btn.id = id
    btn.textContent = text 
    btn.addEventListener('click',() =>{
        const button = document.getElementsByClassName('headerButtons')
        for(let i=0; i < button.length; i++){
            button[i].style.borderBottom = 'none'
        }
        btn.style.borderBottom = '1px solid #E7E8EB'
    })
    parent.appendChild(btn)

}



