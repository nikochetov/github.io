let horShadow, vertShadow, blurShadow, spreadShadow;

horShadow = document.querySelector('.horisontal');
vertShadow = document.querySelector('.vertical');
blurShadow = document.querySelector('.blur');
spreadShadow = document.querySelector('.spread');

let range = document.getElementsByName('rangeShadow');
let codeOut = document.querySelector('.codeOut');

let horShadowN, vertShadowN, blurShadowN, spreadShadowN;
horShadowN = document.querySelector('.horisontalN');
vertShadowN = document.querySelector('.verticalN');
blurShadowN = document.querySelector('.blurN');
spreadShadowN = document.querySelector('.spreadN');

let numValue = document.getElementsByName('numberShadow');

for (i = 0; i < range.length; i++) {
range[i].addEventListener('mousemove', function() {
    let styleValue = getInset() + horShadow.value + 'px ' + vertShadow.value + 'px ' + blurShadow.value + 'px ' + spreadShadow.value + 'px ' + 'black';
    block.style.boxShadow = styleValue;
    codeOut.innerHTML = 'box-shadow: ' + styleValue + ';';
    
    horShadowN.value = horShadow.value;
    vertShadowN.value = vertShadow.value;
    blurShadowN.value = blurShadow.value;
    spreadShadowN.value = spreadShadow.value;   
    }); 
}  

for (j = 0; j < numValue.length; j++) {
numValue[j].addEventListener('input', function() {
    let styleValue = getInset() + horShadowN.value + 'px ' + vertShadowN.value + 'px ' + blurShadowN.value + 'px ' + spreadShadowN.value + 'px ' + 'black';
    block.style.boxShadow = styleValue;
    codeOut.innerHTML = 'Box-shadow: ' + styleValue + ';';
    
    horShadow.value = horShadowN.value;
    vertShadow.value = vertShadowN.value;
    blurShadow.value = blurShadowN.value;
    spreadShadow.value = spreadShadowN.value;   
    }); 
}  

let insetCh = document.querySelector('.ins');
insetCh.addEventListener ('change', function () {
    let styleValue = getInset() + horShadowN.value + 'px ' + vertShadowN.value + 'px ' + blurShadowN.value + 'px ' + spreadShadowN.value + 'px ' + 'black';
    block.style.boxShadow = styleValue;
    codeOut.innerHTML = 'box-shadow: ' + styleValue + ';';
})

function getInset() {
    if (insetCh.checked) {
        return 'inset ';
    } else {
        return '';
    }
}

let resetSh = document.querySelector('.reset_sh');
resetSh.addEventListener('click', resetShadow);

function resetShadow() {
	range.forEach(item => item.value = 0);
    numValue.forEach(item => item.value = 0);
    insetCh.checked = false;
	box.style.boxShadow = 'none';
	codeOut.innerHTML = '';
}
