
(function printCard() {

    let btnStart = document.querySelector('#btnStart');
    let btnYes = document.querySelector('#btnYes');
    let btnNot = document.querySelector('#btnNot');
    let btnPlayAgain = document.querySelector('#btnPlayAgain');
    let response = document.querySelector('#responseCard');
    let rTentativas = document.querySelector('#responseTentativas');
    let tentativas = 0;

    btnStart.addEventListener('click', () => {
        getCarta();
        document.querySelector('.frase').style.display = "none";
        document.querySelector('#btnStart').style.display = "none";
        document.querySelector('.textCard').style.display = "block";
        document.querySelector('.buttons').style.display = "block";
    });

    btnNot.addEventListener('click', () => {
        getCarta();
    });

    btnYes.addEventListener('click', () => {
        document.querySelector('.textCard').style.display = "none";
        document.querySelector('.buttons').style.display = "none";
        document.querySelector('.textTentativas').style.display = "block";
        document.querySelector('#btnPlayAgain').style.display = "block";

        if (tentativas > 1) {
            rTentativas.innerText = `Foram necessárias ${tentativas} tentativas até acertar.`;
        } else {
            rTentativas.innerText = `Foi necessário somente ${tentativas} tentativa até acertar.`;
        }
    });

    btnPlayAgain.addEventListener('click', () => {
        window.location.reload()
    });

    function getCarta() {
        const naipe = ['copas', 'paus', 'ouros', 'espadas'];
        const carta = ['as', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'valete', 'dama', 'rei'];

        const getNaipe = Math.round(Math.random() * 3);
        const getCarta = Math.round(Math.random() * 12)

        let urlCard = "img" + "/" + naipe[getNaipe] + "/" + carta[getCarta] + ".png";
        let card = carta[getCarta] + " de " + naipe[getNaipe];
        console.log(urlCard);
        console.log(card);
        document.querySelector('#imgCard').src = urlCard;
        response.innerText = card;
        tentativas++;
        console.log(tentativas);
    };
})();






    