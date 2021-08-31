const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')

btn1.addEventListener('click', function () {
    btn1.classList.add('btn-active')
    btn2.classList.remove('btn-active')
    btn3.classList.remove('btn-active')
})
btn2.addEventListener('click', function () {
    btn2.classList.add('btn-active')
    btn1.classList.remove('btn-active')
    btn3.classList.remove('btn-active')
})
btn3.addEventListener('click', function () {
    btn3.classList.add('btn-active')
    btn2.classList.remove('btn-active')
    btn1.classList.remove('btn-active')

})