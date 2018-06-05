function debounce(func, wait = 20, immediate = true) {
  var timeout
  return function() {
    var context = this,
      args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const height = window.innerHeight
console.log(height)
const width = window.innerWidth
console.log(width)
const listItems = document.querySelectorAll('.list-group-item')

function checkSlide() {
  listItems.forEach(item => {
    const slideIn = window.scrollY + height - item.offsetHeight / 2
    console.log(slideIn)
    const liBottom = item.offsetTop + item.offsetHeight
    console.log(liBottom)
    const isHalfShown = slideIn > item.offsetTop
    console.log(isHalfShown)
    const isNotScrolledPast = window.scrollY < liBottom
    console.log(isNotScrolledPast)
    if (isHalfShown && isNotScrolledPast) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))
