let range = document.querySelectorAll('.b-radius');
let block = document.getElementById('box');
let textArea = document.querySelector('.b_textarea');



for (let i = 0; i < range.length; i++) {
	range[i].oninput = changeRadius;
}

function changeRadius() {
	allRadius.value = 0;
	if (range[0].oninput) {
		block.style.borderTopLeftRadius = range[0].value + 'px';
		textArea.innerHTML = 'border-top-left-radius: ' + range[0].value + 'px;\n';
	}
	if (range[1].oninput) {
		block.style.borderTopRightRadius = range[1].value + 'px';
		textArea.innerHTML += 'border-top-right-radius: ' + range[1].value + 'px;\n';
	}
	if (range[2].oninput) {
		block.style.borderBottomRightRadius = range[2].value + 'px';
		textArea.innerHTML += 'border-bottom-right-radius: ' + range[2].value + 'px;\n';
	}	
	if (range[3].oninput) {
		block.style.borderBottomLeftRadius = range[3].value + 'px';
		textArea.innerHTML += 'border-bottom-left-radius: ' + range[3].value + 'px;\n';	
	}	
}

let allRadius = document.querySelector('.allRadius');
allRadius.oninput = changeRadiusAll;

function changeRadiusAll() {
    box.style.borderRadius = allRadius.value + 'px';
    textArea.innerHTML = '-webkit-border-radius: ' + this.value + 'px;\n';
	textArea.innerHTML += 'border-radius: ' + this.value + 'px;';
	range[0].value = 0;
	range[1].value = 0;
	range[2].value = 0;
	range[3].value = 0;
	
}

let reset = document.querySelector('.reset');
reset.addEventListener('click', resetRadius);

function resetRadius() {
	allRadius.value = 0;
	range[0].value = 0;
	range[1].value = 0;
	range[2].value = 0;
	range[3].value = 0;
	box.style.borderRadius = '0px';
	textArea.innerHTML = '';
}