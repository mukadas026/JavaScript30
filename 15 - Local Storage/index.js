const form = document.querySelector('#form')
const input = document.querySelector('#input')
const button = document.querySelector('#btn')
const divs = document.querySelectorAll('.row')
var checkboxes = []

function loadState(e){
    
    if(e.target.hasAttribute('type')){
        let index = Array.from(form.children).indexOf(e.target.parentElement.parentElement)
        let state = !JSON.parse(localStorage.getItem(index))[1]
        localStorage.setItem(index, JSON.stringify([JSON.parse(localStorage.getItem(index))[0], state]))
    }

}

function handleClick(e){
    e.preventDefault()
    if(input.value !== ''){
       form.innerHTML += `
                    <div class="row">
                        <label class="label">
                            <input type="checkbox" class="check">
                            <span class="span">${input.value}</span>
                        </label>
                    </div>
                    `;
        
        // let newDiv = document.createElement('div')
        // newDiv.className = 'row'
        // let newLabel = document.createElement('label')
        // newLabel.className = 'label'
        // let newBox = document.createElement('input')
        // newBox.className = 'check'
        // newBox.type = 'checkbox'
        // let newSpan = document.createElement('span')
        // newSpan.className = 'span'
        // let value = document.createTextNode(input.value)

        // newSpan.appendChild(value)
        
        // newLabel.appendChild(newBox)
        // newLabel.appendChild(newSpan)
        // newDiv.appendChild(newLabel)
        // form.appendChild(newDiv)
        
        checkboxes.push(form.querySelector('[type=checkbox]'))
        let len = localStorage.length
        localStorage.setItem(len, JSON.stringify([input.value, checkboxes[len].checked]))
    }
}

function loadForm(e){
    
    if(localStorage.length !== 0){
        for(let i = 0; i < localStorage.length; i++){
            let inputValue = JSON.parse(localStorage.getItem(i))[0]
            let isChecked = JSON.parse(localStorage.getItem(i))[1]

            form.innerHTML += `
                    <div class="row">
                        <label class="label">
                            <input type="checkbox" class="check" ${isChecked? 'checked': ''}>
                            <span class="span">${inputValue}</span>
                        </label>
                    </div>
                    `;

            // let newDiv = document.createElement('div')
            // newDiv.className = 'row'
            // let newLabel = document.createElement('label')
            // newLabel.className = 'label'
            // let newBox = document.createElement('input')
            // newBox.className = 'check'
            // newBox.type = 'checkbox'
            // let newSpan = document.createElement('span')
            // newSpan.className = 'span'
            // let value = document.createTextNode(inputValue)


            // newSpan.appendChild(value)
        
            // newLabel.appendChild(newBox)
            // newLabel.appendChild(newSpan)
            // newDiv.appendChild(newLabel)
            // form.appendChild(newDiv)
        }
    }
}


button.addEventListener('click', handleClick)
window.addEventListener('load', loadForm)
form.addEventListener('click', loadState)
