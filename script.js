// Dynamically change text content
function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'The text has been changed dynamically!';
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const styleElement = document.getElementById('dynamicText');
    styleElement.style.color = 'blue';
    styleElement.style.fontSize = '20px';
    styleElement.style.fontWeight = 'bold';
}

// Add or remove an element when a button is clicked
function toggleElement() {
    const container = document.getElementById('container');
    const existingElement = document.getElementById('dynamicElement');

    if (existingElement) {
        container.removeChild(existingElement); // Remove the element
    } else {
        const newElement = document.createElement('section');
        newElement.id = 'dynamicElement';
        newElement.className = 'card';
        newElement.innerHTML = `
            <h2>Feature 3</h2>
            <p id="dynamicText">Ut enim ad minim veniam, quis nostrud exercitation.</p>
        `;
        newElement.style.marginTop = '10px';
        container.appendChild(newElement); // Add the element
    }
}