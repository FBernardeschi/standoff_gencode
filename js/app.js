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

// scroll

let login = document.querySelector('.loginA');
let reg = document.querySelector('.regA');
let gen = document.querySelector('.genA');
let mainList = document.querySelector('.main-list');

login.addEventListener('click', function() {
    mainList.classList.add('active-login');
    mainList.classList.remove('active-reg');
});

reg.addEventListener('click', function() {
    mainList.classList.add('active-reg');
    mainList.classList.remove('active-login');
})

gen.addEventListener('click', function() {
    mainList.classList.remove('active-reg');
    mainList.classList.remove('active-login');
})