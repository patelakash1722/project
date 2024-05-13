const textContainer = document.getElementById('text-container');
const colorBox = document.getElementById('colorbox');
const colorChangeButton = document.getElementById('colorchange');
const fontSizeRange = document.getElementById('fontsize');
const underlineButton = document.getElementById('underline');
const italicButton = document.getElementById('italic');
const boldButton = document.getElementById('bold');
const fontFamilyDropdown = document.getElementById('list');
const getStyleButton = document.getElementById('getstyle');
const cssPropsParagraph = document.getElementById('css-props');

colorChangeButton.addEventListener('click', () => {
    textContainer.style.color = colorBox.value;
});

fontSizeRange.addEventListener('input', () => {
    textContainer.style.fontSize = fontSizeRange.value + 'px';
});

underlineButton.addEventListener('click', () => {
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

italicButton.addEventListener('click', () => {
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

boldButton.addEventListener('click', () => {
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

fontFamilyDropdown.addEventListener('change', () => {
    textContainer.style.fontFamily = fontFamilyDropdown.value;
});

getStyleButton.addEventListener('click', () => {
    const cssProperties = getComputedStyle(textContainer);
    let cssText = '';
    for (let prop of cssProperties) {
        cssText += `${prop}: ${cssProperties.getPropertyValue(prop)}; `;
    }
    cssPropsParagraph.textContent = cssText;
});