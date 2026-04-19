const form = document.querySelector(".form")
const range = document.querySelector(".form__range")
const rangeVal = document.getElementById("rangeVal")

range.addEventListener("input", function () {
    rangeVal.textContent = this.value + "%"
    this.style.background = `linear-gradient(to right, var(--color-brand-primary) ${this.value}%, rgba(255, 255, 255, 0.70) ${this.value}%)`
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Форма отправлена!")
})

document.querySelectorAll(".select").forEach((select) => {
    const trigger = select.querySelector(".select__trigger")
    const valueEl = select.querySelector(".select__value")
    const input = select.querySelector('input[type="hidden"]')
    const options = select.querySelectorAll(".select__option")

    trigger.addEventListener("click", () => {
        select.classList.toggle("select--open")
    })

    options.forEach((option) => {
        option.addEventListener("click", () => {
            options.forEach((o) => o.classList.remove("select__option--active"))
            option.classList.add("select__option--active")
            valueEl.textContent = option.textContent
            input.value = option.dataset.value
            select.classList.remove("select--open")
        })
    })

    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove("select--open")
        }
    })
})
