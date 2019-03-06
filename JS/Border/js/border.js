let rangeBorder = document.querySelectorAll('.b-radius');
let block = document.getElementById('box');
let textArea = document.querySelector('.textArea');

for (let i = 0; i < rangeBorder.length; i++) {
	rangeBorder[i].oninput = changeRadius;
}

function changeRadius() {
    allRadius.value = 0;
	allRadiusNum.value = 0;
        if (rangeBorder[0].oninput) {
		block.style.borderTopLeftRadius = rangeBorder[0].value + 'px';
		textArea.innerHTML = 'border-radius: ' + rangeBorder[0].value + 'px ';
		borderNum[0].value = rangeBorder[0].value;
	}
	if (rangeBorder[1].oninput) {
		block.style.borderTopRightRadius = rangeBorder[1].value + 'px';
		textArea.innerHTML += rangeBorder[1].value + 'px ';
		borderNum[1].value = rangeBorder[1].value;
	}
	if (rangeBorder[2].oninput) {
		block.style.borderBottomRightRadius = rangeBorder[2].value + 'px';
		textArea.innerHTML += rangeBorder[2].value + 'px ';
		borderNum[2].value = rangeBorder[2].value;
	}	
	if (rangeBorder[3].oninput) {
		block.style.borderBottomLeftRadius = rangeBorder[3].value + 'px';
		textArea.innerHTML += rangeBorder[3].value + 'px;';	
		borderNum[3].value = rangeBorder[3].value;
	}	
}

let borderNum = document.getElementsByName('borderNum')

for (let k = 0; k < borderNum.length; k++) {
	borderNum[k].oninput = changeRadiusNum;
}

function changeRadiusNum() {
    allRadiusNum.value = 0;
    allRadius.value = 0;
	if (borderNum[0].oninput) {
        block.style.borderTopLeftRadius = borderNum[0].value + 'px';
		textArea.innerHTML = 'border-radius: ' + borderNum[0].value + 'px ';
		rangeBorder[0].value = borderNum[0].value;
	}
	if (borderNum[1].oninput) {
		block.style.borderTopRightRadius = borderNum[1].value + 'px';
		textArea.innerHTML += borderNum[1].value + 'px ';
		rangeBorder[1].value = borderNum[1].value;
	}
	if (borderNum[2].oninput) {
		block.style.borderBottomRightRadius = borderNum[2].value + 'px';
		textArea.innerHTML += borderNum[2].value + 'px ';
		rangeBorder[2].value = borderNum[2].value;
	}	
	if (borderNum[3].oninput) {
		block.style.borderBottomLeftRadius = borderNum[3].value + 'px';
		textArea.innerHTML += borderNum[3].value + 'px;';
		rangeBorder[3].value = borderNum[3].value;	
	}
}


let allRadius = document.querySelector('.allRadius');
allRadius.oninput = changeRadiusAll;

let allRadiusNum = document.querySelector('.num-br');
allRadiusNum.addEventListener('input', function () {
	box.style.borderRadius = this.value + 'px';
	textArea.innerHTML = 'border-radius: ' + this.value + 'px;';
    rangeBorder.forEach(item => item.value = 0);
    allRadius.value = allRadiusNum.value;
	borderNum.forEach(item => item.value = 0);
})

function changeRadiusAll() {
    box.style.borderRadius = allRadius.value + 'px';
	textArea.innerHTML = 'border-radius: ' + this.value + 'px;';
	rangeBorder.forEach(item => item.value = 0);
    borderNum.forEach(item => item.value = 0);
    allRadiusNum.value = allRadius.value;
}

let resetRad = document.querySelector('.reset_b');
resetRad.addEventListener('click', resetRadius);

function resetRadius() {
	allRadius.value = 0;
	rangeBorder.forEach(item => item.value = 0);
    borderNum.forEach(item => item.value = 0);
    allRadiusNum.value = 0;
	box.style.borderRadius = '0px';
	textArea.innerHTML = '';
}