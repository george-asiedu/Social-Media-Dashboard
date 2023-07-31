const toggleTheme = document.querySelector('.toggle-theme')
const body = document.querySelector('body')
const header = document.querySelectorAll('h1')
const headerText = document.querySelector('.header p')
const countText = document.querySelectorAll('.count h3')
const socials = document.querySelectorAll('#socials')
const boxes = document.querySelectorAll('.box')
const h2 = document.querySelectorAll('h2')
const change = document.querySelectorAll('.change')
const h5 = document.querySelectorAll('h5')
const changeModeText = document.querySelector('.changeMode') 

localStorage.setItem('mode', 'light')

const getMode = localStorage.getItem('mode')

if(getMode === 'light') {
    body.classList.toggle('light')
}

toggleTheme.addEventListener('click', () => {
    toggleTheme.classList.toggle('active')
        body.classList.toggle('dark')
        toggleTheme.style.backgroundImage = 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
        changeModeText.innerHTML = 'Dark Mode'
        changeModeText.style.color = 'hsl(228, 34%, 66%)'

        headerText.style.color = 'hsl(228, 34%, 66%)'

        for(const social of socials) {
            social.style.background = 'hsl(228, 28%, 20%)'
        }

        for(changes of change) {
            changes.style.color = 'hsl(228, 34%, 66%)'
        }

        for(const heading2 of h2) {
            heading2.style.color = 'hsl(0, 0%, 100%)'
        }

        for(heading5 of h5) {
            heading5.style.color = 'hsl(228, 34%, 66%)'
        }

        for(const heading of header) {
            heading.style.color = 'hsl(0, 0%, 100%)'
        }

        
        for(const box of boxes) {
            box.style.background = 'hsl(228, 28%, 20%)'
        }

        for(const text of countText) {
            text.style.color = 'hsl(0, 0%, 100%)'
        }
})