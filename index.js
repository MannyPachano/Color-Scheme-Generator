const colorPicker = document.getElementById("color-picker")
const modePicker = document.getElementById("color-mode")
const hexContainer = document.getElementById("hex-container")
    
let colorOne = ""
let colorTwo = ""
let colorThree = ""
let colorFour = ""
let colorFive = ""


function renderColors(data){
    let html = ""
    colorOne = data.colors[0].hex.value
    colorTwo = data.colors[1].hex.value
    colorThree = data.colors[2].hex.value
    colorFour = data.colors[3].hex.value
    colorFive = data.colors[4].hex.value
    
    html = `
        <p>${colorOne}</p>
        <p>${colorTwo}</p>
        <p>${colorThree}</p>
        <p>${colorFour}</p>
        <p>${colorFive}</p>
        `
        
    hexContainer.innerHTML = html
    
    document.getElementById("color-box-one").style.backgroundColor = colorOne
    document.getElementById("color-box-two").style.backgroundColor = colorTwo
    document.getElementById("color-box-three").style.backgroundColor = colorThree
    document.getElementById("color-box-four").style.backgroundColor = colorFour
    document.getElementById("color-box-five").style.backgroundColor = colorFive
}

modePicker.addEventListener("change", function(){
    const hexColor = colorPicker.value.slice(1, 7)
    const schemeMode = modePicker.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=` + hexColor + `&mode=` + schemeMode, {method: "GET"})
        .then( res => res.json())
        .then( data => {
          renderColors(data)  
        })
})


colorPicker.addEventListener("change", function(){
    const hexColor = colorPicker.value.slice(1, 7)
    const schemeMode = modePicker.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=` + hexColor + `&mode=` + schemeMode, {method: "GET"})
        .then( res => res.json())
        .then( data => {
          renderColors(data)  
        })
})