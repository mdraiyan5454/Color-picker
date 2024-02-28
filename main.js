
function changeFontSize(size) {
    document.getElementById('txt').style.fontSize = size + 'px';
}

document.getElementById('color').addEventListener('input', function() {
    let color = this.value;
    document.getElementById('hex').value = color;
    document.querySelector('.notepad').style.color = color; 
    // document.querySelector('body').style.background = color;
    document.getElementById('txt').style.color = color
});
