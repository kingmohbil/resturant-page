// this function creates the footer and the content inside it 

export function createFooter(){
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent = `Copyright \u00A9 | kingmohbil | 2022`
    document.body.appendChild(footer)
}