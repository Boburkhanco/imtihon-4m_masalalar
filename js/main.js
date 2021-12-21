//  Birinchi masala 
function reverse() {
    request = input.value
    const res = request.split('').reverse().join('')
    result.textContent = res
}
submit.addEventListener('click', e => {
    reverse()
    input.value = ''
    input.focus()
})
