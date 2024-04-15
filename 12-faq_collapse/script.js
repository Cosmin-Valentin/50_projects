const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('active')
  })
})
