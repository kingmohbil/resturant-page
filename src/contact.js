export function createConatct(container){
    const contactConatiner = document.createElement('div')
    const phoneContainer = document.createElement('div')
    const phoneIcon = document.createElement('div')
    const phoneNumber = document.createElement('div')
    const email = document.createElement('div')
    
    contactConatiner.classList.add('contactContainer')
    phoneContainer.classList.add('phoneContainer')
    phoneIcon.classList.add('phoneIcon')
    phoneNumber.classList.add('phoneNumber')
    email.classList.add('Email')
    
    
    phoneIcon.innerHTML = '<img class ="icon" src="pics/call.png">'
    phoneNumber.textContent = '123-456-789'
    email.textContent = 'Email: totallyReal@gmail.com'
    container.appendChild(contactConatiner)
    contactConatiner.appendChild(phoneContainer)
    contactConatiner.appendChild(email)
    phoneContainer.appendChild(phoneIcon)
    phoneContainer.appendChild(phoneNumber)

    
}