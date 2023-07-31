const toggleTheme = document.querySelector('.toggle-theme')
const body = document.querySelector('body')
const header = document.querySelectorAll('h1')
const headerText = document.querySelector('.header p')
const countText = document.querySelectorAll('.count h3')
const socials = document.querySelectorAll('#socials')
const boxes = document.querySelectorAll('.box')
const h2 = document.querySelectorAll('h2')

localStorage.setItem('mode', 'light')
// localStorage.setItem('mode', 'dark')

const getMode = localStorage.getItem('mode')

if(getMode === 'light') {
    body.classList.toggle('light')
}

toggleTheme.addEventListener('click', () => {
    toggleTheme.classList.toggle('active')
    body.classList.toggle('dark')
    for(const social of socials) {
        social.style.background = 'hsl(228, 28%, 20%)'
    }
    for(const heading2 of h2) {
        heading2.style.color = 'hsl(0, 0%, 100%)'
    }
    for(const heading of header) {
        heading.style.color = 'hsl(0, 0%, 100%)'
    }
    headerText.style.color = 'hsl(228, 34%, 66%)'
    for(const box of boxes) {
        box.style.background = 'hsl(228, 28%, 20%)'
    }

    for(const text of countText) {
        text.style.color = 'hsl(0, 0%, 100%)'
    }
    
})