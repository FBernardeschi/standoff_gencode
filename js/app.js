let code = document.querySelector('#code');
let btn = document.querySelector('#btn');

btn.addEventListener('click', randCode)

function randCode() {
    let res = '';
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    for(let i = 0; i<8; i++) {
        res += alph[Math.floor(Math.random() * 36)];
    }

    res += '****';
    
    code.innerHTML = res;    
}