let HTML = `
<div id='testDiv'>


<button onclick='giveBorder()'>Border</button>
<button onclick='noBorder()'>Remove Border</button><br>

<button onclick='giveBackground()'>Background Colour</button>
<button onclick='noBackground()'>Remove Background Colour</button><br>

<button onclick='giveTextColour()'>Text Colour Red</button>
<button onclick='noTextColour()'>Remove Text Colour Red</button><br>

<button onclick='hide()'>Hide everything</button><br>

<p>This is some sample text</p>
</div>

`

window.onload = document.getElementsByTagName("body")[0].innerHTML = HTML;


let targetDiv = document.getElementById('testDiv')


function giveBorder(){
    // targetDiv.classList.add('greenBorder')
}

function noBorder(){
}

function giveBackground(){
}

function noBackground(){
}

function giveTextColour(){
}

function noTextColour(){
}

function hide(){
}