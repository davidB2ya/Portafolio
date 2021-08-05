const btn = document.querySelector('.img-logo')
const desplegable = document.querySelector('.menu-desplegable')
const red = document.querySelector('.redes')

console.log(btn)
console.log(desplegable)
console.log(red)

btn.addEventListener('click',() => {
    desplegable.classList.toggle('.active')
    red.classList.toggle('.active')
    
})




// ---------------------------- proyectos ---------------

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}

// --------------------------------- / proyectos ------------------------------------


// ---------------- Auto text ----------------

const textEl1 = document.getElementById('text1')
const text1 = 'Sobre mi'
const textEl2 = document.getElementById('text2')
const text2 = 'Proyectos Destacados'
const textEl3 = document.getElementById('text3')
const text3 = 'Contáctame'

let idx1 = 1
let idx2 = 1
let idx3 = 1
let speed1 = 300 / 1.5
let speed2 = 300 / 2
let speed3 = 300 / 2

writeText1()

function writeText1() {
    textEl1.innerText = text1.slice(0, idx1)

    idx1++

    if (idx1 > text1.length) {
        idx1 = 1
    }

    setTimeout(writeText1, speed1)
}

writeText2()

function writeText2() {
    textEl2.innerText = text2.slice(0, idx2)

    idx2++

    if (idx2 > text2.length) {
        idx2 = 1
    }

    setTimeout(writeText2, speed2)
}

writeText3()

function writeText3() {
    textEl3.innerText = text3.slice(0, idx3)

    idx3++

    if (idx3 > text3.length) {
        idx3 = 1
    }

    setTimeout(writeText3, speed3)
}


// ---------------- /Auto text ----------------

