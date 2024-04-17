const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.user-name')
const userEmail = document.querySelector('.user-email')

let testimonials
let idx = 1
const text = [
  'The quick brown fox jumps over the lazy dog. She sells seashells by the seashore.',
  'Time flies like an arrow; fruit flies like a banana. A watched pot never boils.',
  'Birds of a feather flock together. When the cat is away, the mice will play.',
  'An apple a day keeps the doctor away. Every cloud has a silver lining.',
  'Actions speak louder than words. Curiosity killed the cat, but satisfaction brought it back.',
  'Better late than never. The pen is mightier than the sword.',
  'When in Rome, do as the Romans do. The grass is always greener on the other side.',
  'A picture is worth a thousand words. Absence makes the heart grow fonder.',
  "Barking dogs seldom bite. You can't judge a book by its cover.",
  "Practice makes perfect. Two wrongs don't make a right."
]

getData()

function updateTestimonial() {
  const { name, email, picture } = testimonials[idx]

  testimonial.innerHTML = text[idx]
  userImage.src = picture.large
  userName.innerHTML = name.title + name.first + name.last
  userEmail.innerHTML = email

  idx++
  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=10')
  const { results } = await res.json()
  testimonials = results
}

setInterval(updateTestimonial, 10000)
