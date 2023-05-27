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

let login = document.querySelectorAll('.loginA');
let reg = document.querySelectorAll('.regA');
let gen = document.querySelectorAll('.genA');
let mainList = document.querySelector('.main-list');


login.forEach((el) => {
    el.addEventListener('click', function() {
        mainList.classList.add('active-login');
        mainList.classList.remove('active-reg');
    });
});

reg.forEach((el) => {
    el.addEventListener('click', function() {
        mainList.classList.add('active-reg');
        mainList.classList.remove('active-login');
    })
})

gen.forEach((el) => {
    el.addEventListener('click', function() {
        mainList.classList.remove('active-reg');
        mainList.classList.remove('active-login');
    })    
})

// menu toggler

let iconToggler = document.querySelector('.icon-toggler');
let nav = document.querySelector('.nav');

iconToggler.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
})

// login

let emailLogin = document.querySelector('.login input[type=text]');
let passLogin = document.querySelector('.login input[type=password]');
let msgErrorLogin = document.querySelector('.login .block-input>p');
let btnLogin = document.querySelector('.login input[type=submit]');

function msgErrorEnter() {
    msgErrorLogin.innerHTML = 'Логин или пароль введены неверно!'
};

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    if(emailLogin.value && passLogin.value) {
        setTimeout(msgErrorEnter, 1500);
    } else {
        msgErrorLogin.innerHTML = 'Введены не все поля!';;
    }
})

// reg

let emailReg = document.querySelector('.reg input[type=text]');
let passReg = document.querySelector('.reg input[type=password]');
let passReg2 = document.querySelector('.reg .input-box:nth-child(3) input[type=password]');
let msgErrorReg = document.querySelector('.reg .block-input>p');
let btnReg = document.querySelector('.reg a.form-btn');

btnReg.addEventListener('click', (e) => {
    if(emailReg.value && passReg.value && passReg2.value) {
        btnReg.innerHTML = 'Ожидается оплата!';
    } else {    
        e.preventDefault()
        msgErrorReg.innerHTML = 'Введены не все поля!';;
    }
})