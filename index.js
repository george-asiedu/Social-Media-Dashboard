const toggleTheme = document.querySelector('.toggle-theme')
const body = document.querySelector('body')
const changeModeText = document.querySelector('.changeMode') 
const card = document.querySelectorAll('#card')
const header = document.querySelectorAll('.white')
const pale = document.querySelectorAll('.pale')


toggleTheme.addEventListener('click', () => {
    toggleTheme.classList.toggle('active')
    body.classList.toggle('dark')
    toggleTheme.style.backgroundImage = 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
    changeModeText.innerHTML = 'Dark Mode'
    changeModeText.style.color = 'hsl(228, 34%, 66%)'   
    for(const cards of card) {
        if(toggleTheme.classList.contains('active')) {
            cards.style.background = 'hsl(228, 28%, 20%)'
            for(const heading of header) {
                heading.style.color = 'white'
            }
            for(const pales of pale) {
                pales.style.color = 'hsl(228, 34%, 66%)'
            }
        } else {
            body.classList.toggle('light')
            toggleTheme.style.background = 'hsl(230, 22%, 74%)'
            changeModeText.innerHTML = 'Light Mode'
            cards.style.background = 'hsl(230, 63%, 93%)'
            for(const heading of header) {
                heading.style.color = 'hsl(230, 17%, 14%)'
            }
            for(const pales of pale) {
                pales.style.color = 'hsl(228, 12%, 44%)'
            } 
        }
    }
})