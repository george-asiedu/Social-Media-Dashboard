const toggleTheme = document.querySelector('.toggle-theme')
const body = document.querySelector('body')

let getMode = localStorage.getItem('mode')
if(getMode && getMode === 'dark') {
    body.classList.toggle('dark')
}

toggleTheme.addEventListener('click', () => {
    body.classList.add('light')

    if(!body.classList.contains('dark')) {
        return localStorage.setItem('mode', 'light')
    } else {
        return localStorage.setItem('mode', 'dark')
    }
    
})

toggleTheme.addEventListener('click', () => 
    toggleTheme.classList.toggle('active')
)