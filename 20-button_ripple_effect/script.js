const btn = document.querySelector('.ripple')

btn.addEventListener('click', function (e) {
  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = y + 'px'
  circle.style.left = x + 'px'

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
})
