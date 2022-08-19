
export function createMenu(container){
    const menu = document.createElement('div')
    const menuTitle = document.createElement('div')
    const mainDishes = document.createElement('div')
    const desert = document.createElement('div')
    const sides = document.createElement('div')
    menuTitle.classList.add('menuTitle')
    menuTitle.textContent = `'The Menu'`
    mainDishes.classList.add('mainDishes')
    mainDishes.textContent = 'Main Dishes:'
    desert.classList.add('desert')
    desert.textContent = 'Deserts:'
    sides.classList.add('sides')
    sides.textContent = 'Sides:'
    menu.classList.add('menu')
    container.appendChild(menu)
    menu.appendChild(menuTitle)
    menu.appendChild(mainDishes)
    createMenuItem(menu, 'Chicken Burger', '../src/chickenBurger.jpg', '$5',
     'A 180gm of chicken between two buns and honey mustard sauce ')
    createMenuItem(menu, 'Beef Burger', '../src/beefBurger.jpg', '$7', 
    'A 200gm of beef between two buns and BBQ sauce ')
    createMenuItem(menu, 'Pizza', '../src/classicPizza.jpg', '$8', 
    'A well baked classic pizza with a lot of cheese')
    createMenuItem(menu, 'Mushroom Burger', '../src/mushroomBurger.jpg', '$7', 
    'A 200gm of beef between two buns and Mushrrom sauce ')
    menu.appendChild(desert)
    createMenuItem(menu, 'Cheese Cake', '../src/cheeseCake.jpg', '$4', 
    'A light sweet chase cake with a cherry topping')
    createMenuItem(menu, 'Cookies', '../src/cookies.jpg', '$3', 
    'A sweet baked classic cookies with choclate topping')
    menu.appendChild(sides)
    createMenuItem(menu, 'Water', '../src/water.jpg', '$1', 
    'A 250ml of pure water')
    createMenuItem(menu, 'Coke', '../src/coke.jpg', '$1', 
    'A 250ml of coke', 'Coke')
    createMenuItem(menu, 'Tea', '../src/tea.jpg', '$2', 
    'A hot cup of tea')
    createMenuItem(menu, 'Sauces', '../src/sauces.jpg', '$1', 
    'Sauces')
    createMenuItem(menu, 'Fries', '../src/fries.jpg', '$1', 
    'A golden french fries')
} 





function createMenuItem(container, name, url, Price, desc, id){
    
    const menuItem = document.createElement('div')
    const Name = document.createElement('div')
    const Description = document.createElement('div')
    const imgHolder = document.createElement('div')
    const img = document.createElement('img')
    const price = document.createElement('div')

    menuItem.classList.add('menuItem')
    Name.classList.add('name')
    Description.classList.add('desc')
    imgHolder.classList.add('imgHolder')
    img.classList.add('menuImg')
    price.classList.add('price')
  
    if(id !== undefined){
        menuItem.id = id;
    }

    Name.textContent = name 
    Description.textContent = desc
    img.src = url 
    price.textContent = Price
  
    menuItem.appendChild(price)
    menuItem.appendChild(Name)
    Name.appendChild(Description)
    imgHolder.appendChild(img)
    menuItem.appendChild(imgHolder)
    container.appendChild(menuItem)
}
