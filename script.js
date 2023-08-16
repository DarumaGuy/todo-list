const list = document.querySelector('[data-list]')
const input = document.querySelector('[data-input]')
const addButton = document.querySelector('[data-button="add"]')

function removeListItem (id) {
    const itemToBeRemoved = document.querySelector(`[data-id="${id}"]`)
    itemToBeRemoved.remove()
}

function addListItem () {
    const idNumber = list.childElementCount + 1
    const text = ""
    const item = document.createElement('li')
    
    item.setAttribute('data-id', idNumber)
    item.innerHTML = `
        <input type="checkbox" name="" id="item-${idNumber}" class="checkbox__input">
    `

    const label = document.createElement('label')
    label.innerHTML = `
        <div class="checkbox__icon-wrapper">
            <img class="checkbox__icon" src="./images/check-icon.png" alt="">
        </div>
        <input class="checkbox__text">
    `

    label.setAttribute('for', `item-${idNumber}`)
    label.classList.add('checkbox__label')

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('button--delete')
    deleteButton.innerHTML = '<img class="checkbox__icon checkbox__icon--delete" src="./images/delete-icon.png"/>'
    deleteButton.addEventListener('click', () => removeListItem(idNumber))

    label.appendChild(deleteButton)
    item.appendChild(label)
    list.prepend(item)
}

addButton.addEventListener('click', addListItem)

