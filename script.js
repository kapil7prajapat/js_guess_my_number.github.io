'use strict';
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
function message(msg) {
    document.querySelector('.message').textContent = msg;
}

//document.querySelector('.number').textContent = secret;                                             // Optional
document.querySelector('.check').addEventListener
    (
        'click', function () {
            const guess = Number(document.querySelector('.guess').value);
            if (guess > 20 || guess < 1)
                message('🚫 No Acepted 🚫');

            else if (score > 0) {
                if (guess === secret) {
                    message('🎊✨🏆 Won 🏆✨🎊');
                    document.querySelector('.number').style.width = '30rem';
                    document.querySelector('.number').textContent = secret;
                    document.querySelector('body').style.backgroundColor = '#23285C';
                    if (heighScore < score) {
                        heighScore = score;
                        document.querySelector('.highscore').textContent = heighScore;
                    }
                }
                else {
                    guess < secret ? message('📉 Too Low') : message('📈 Too High...');
                    document.querySelector('.score').textContent = --score;
                }
            }
            else {
                message('🤭 Lose 🤭');
                document.querySelector('.score').textContent = 0;
            }
        }
    );
document.querySelector('.again').addEventListener
    (
        'click', function () {
            secret = Math.trunc(Math.random() * 20) + 1;
            message('Start guessing...');

            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').textContent = secret;                                 //optional
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.guess').value = '';

            if (heighScore < score) {
                document.querySelector('.highscore').textContent = score;
                heighScore = score;
            }
            score = 20;
            document.querySelector('.score').textContent = score;
        }
    );