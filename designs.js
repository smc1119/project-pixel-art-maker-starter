// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function respondToClick(event) {

    const color = document.querySelector('#colorPicker');

// Check if backgroundColor is set if not set it to the selected color

    if (event.target.style.backgroundColor === "") {
        event.target.style.backgroundColor = color.value;
     } else {
        event.target.style.backgroundColor = ""; 
     }

 }

function makeGrid(event) {

// Your code goes here!

// Prevent the default behavior which causes the page to refresh when the submit button is clicked
// https://stackoverflow.com/questions/40472091/why-do-my-dom-changes-disappear-when-i-click-a-form-button

    event.preventDefault();

    const pixelTbl = document.querySelector('#pixelCanvas');
    const height = document.querySelector('#inputHeight');
    const width = document.querySelector('#inputWidth');

//  Loop that removes an existing grid when the submit button is clicked
//  https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

    while (pixelTbl.firstChild) {
        pixelTbl.removeChild(pixelTbl.lastChild);
    };

    pixelTbl.addEventListener('click', respondToClick);

    const tblRow = document.createElement('tr');
    const tblCol = document.createElement('td');

// Add cloneNode(true) so duplicate children will be appended to the node
// https://stackoverflow.com/questions/4222186/using-appendchild-multiple-times-with-the-same-node-in-js

    for (let j=1; j<=width.value; j++) {
        tblRow.appendChild(tblCol.cloneNode(true));
    };

    for (let i=1; i<=height.value; i++) {
        pixelTbl.appendChild(tblRow.cloneNode(true));
    };



}

const inputForm = document.querySelector('#sizePicker');

inputForm.addEventListener('submit', makeGrid);


