'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let tag_score = document.querySelector('.score');
let message = document.querySelector('.guess-message');
let body = document.querySelector('body');
let question = document.querySelector('.question');
let best_score = 0;

const eventHandler = () => {
  let input_value = document.querySelector('.number-input').value;

  if (input_value == null || input_value == 0) {
    message.textContent = 'Введите число!';
    message.style.color = 'red';
  } else {
    // Control Score
    if (score > 1) {
      // Too Low
      if (input_value > secretNumber) {
        message.textContent = 'Слишком много!';
        score--;
        tag_score.textContent = score;
        body.style.backgroundColor = 'orange';
      }
      // Too Hight
      else if (input_value < secretNumber) {
        message.textContent = 'Слишком мало!';
        score--;
        tag_score.textContent = score;
        body.style.backgroundColor = 'orange';
      }
      // Too Won
      else {
        message.textContent = 'Правильно!';
        score++;
        tag_score.textContent = score;
        body.style.backgroundColor = 'green';
        question.textContent = secretNumber;
        // Add to new best score
        if(score >= best_score){
            best_score = score;
            document.querySelector('.highscore').textContent = best_score;
        }
      }
    }
    // Too Lose
    else {
      message.textContent = 'Игра закончена!';
      tag_score.textContent = '0';
      question.textContent = secretNumber;
      body.style.backgroundColor = 'red';
    }
  }
};

document.querySelector('.check').addEventListener('click', eventHandler);

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.number-input').value = null;
  message.textContent = 'Начни угадывать';
  message.style.color = 'white';
  body.style.backgroundColor = 'black';
  question.textContent = '???';
  score = 20;
  tag_score.textContent = score;
});
