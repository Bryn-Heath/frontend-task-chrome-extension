//----------------------------------------------Challenge 1---------------------------------------//

const removeSpinnerContainer = document.querySelector('#root > div.start'); //select the div containing spinner and loading info
removeSpinnerContainer.remove(); // remove starting div container

const appendHere = document.querySelector('#root'); //select div to create new spinner/loading message (my name)
document.querySelector('html');

// NEW LOADING MESSAGE //
let div = document.createElement('div');
div.id = 'bryn';
div.style.cssText = `
    height: 15vh; 
    position: absolute;
    top: 30vh;bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1001;
    color:white;
`;

let h2 = document.createElement('h2');
h2.style.color = 'white';
h2.textContent = '👋 Bryn Heath 👋';
div.appendChild(h2);
// NEW LOADING MESSAGE //

appendHere.append(div); //Finally append the new message to (body root div)

//------------------------------------------------------------------------------------------------//
