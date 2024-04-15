const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
  'Message Five'
]

const types = ['info', 'success', 'error']

btn.addEventListener('click', () => createNotification())

function createNotification() {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add(getRandomType())
  toast.textContent = getRandomMessage()
  toasts.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
