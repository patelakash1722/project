function createDiv(width, height, text) {
    const div = document.createElement("div")
    console.log(typeof (String(width) + "px"))
    div.style.width = String(width) + "px"
    div.style.height = String(height) + "px"
    const textNode = document.createTextNode(text)
    div.appendChild(textNode)
    document.body.appendChild(div)
}