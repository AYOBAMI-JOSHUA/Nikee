const initApp = () => {
    const hamburgerBtn = document.getElementById
    ('hamburger-button')
    const mobileMenu = document.getElementById
    ('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

const saleEl = document.getElementById("sale-el")

function switchback() {
    saleEl.textContent = "Look for store pick-up at check point"
}

function switchfront() {
    saleEl.textContent = "Sale: up to 40% off every goods carts"
}


const filterEl = document.getElementById("filter-el")
const deleteBtn = document.getElementById("delete-btn")


function fill() {
    filterEl.innerHTML += `
            <li class="text-2xl font-medium mb-6">
                Filters
            </li>
            <li class="underline">
                <a target='_blank' href='find.html'>
                    All Stores
                </a>
            </li>
            <li>
                <a target='_blank' href='shop.html'>
                    Nike Stores
                </a>
            </li>
            <li>
                <a target='_blank' href='shop.html'>
                     Nike Value Stores
                </a>
            </li>
        `

}

let countEl = document.getElementById("count-el")
let count = 0

function add() {
    count++
    countEl.innerText = count
}
