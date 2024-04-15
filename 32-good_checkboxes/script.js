const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
)

function doTheTrick(el) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === el) {
      fast.checked = false
    }

    if (cheap === el) {
      good.checked = false
    }

    if (fast === el) {
      cheap.checked = false
    }
  }
}
