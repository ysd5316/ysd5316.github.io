'use strict'

// 当日を取得
let todayFull = new Date;
let today = todayFull.getFullYear() + '/' + (todayFull.getMonth()+1) + '/' + todayFull.getDate();

// 本日の日付を表示
document.querySelector('time').textContent = today;

// ボタンを押した後の変化
{
  const btn = document.querySelector('button');
  const stg = document.querySelector('strong');

  btn.addEventListener('click',clickAction);

  function clickAction(){
    stg.style.color = 'skyblue';
    stg.textContent = '後10日';
    btn.textContent = 'Wait a little!';
    btn.style.opacity = 0.4;
  }
}
