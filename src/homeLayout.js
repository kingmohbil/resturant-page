// this function creates the home layout 
// and addds all the items in the home layout 
export function homeLayout(container) {
    const home = document.createElement('div')
    const imgContainer = document.createElement('div')
    const TEXT1 = 'Horizon resturant since 1991 '
    const TEXT2 = 'Best view you can have'
    const TEXT3 = 'View like you never had before'
    const TEXT4 = '-Horizon Resturant since 1991-'
    imgContainer.classList.add('imgContainer')
    home.classList.add('homeContent')
    home.style.width = '100%'
    home.style.height = '100%'
    container.appendChild(home)
    createText(home, TEXT1)
    createText(home, TEXT2)
    home.appendChild(imgContainer)
    createImageArea(imgContainer,'../src/firstChef.jpg','firstChef',  'imgHolder', 'homeImages')
    createImageArea(imgContainer,'../src/secondChef.jpg','secondChef','imgHolder', 'homeImages')
    createImageArea(imgContainer,'../src/thirdChef.jpg','thirdChef'  , 'imgHolder', 'homeImages')
    createText(home,TEXT3)
    createText(home,TEXT4)
    }

//  this function to create texts for the home page
    function createText(parent, text){
        const Text = document.createElement('div')
        Text.classList.add('textArea')
        Text.textContent = text
        parent.appendChild(Text)
    }


// this functionm here is to create the image containers and add certain images 
// to the home layout 
    export function createImageArea(parent, url, id, firstClass, SecondClass){
        const imgHolder = document.createElement('div')
        const img = document.createElement('img')
        imgHolder.classList.add(firstClass)
        img.setAttribute('src', url)
        imgHolder.id=id
        imgHolder.appendChild(img)
        img.classList.add(SecondClass)
        parent.appendChild(imgHolder)
    }


    