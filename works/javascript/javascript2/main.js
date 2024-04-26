'use strict';

let start;
let StartTimer;
const clock = document.getElementById('timer');
const btn = document.getElementById('btn');
const question =document.getElementsByClassName('test')[0];
const inputText = document.querySelector('input');

btn.addEventListener('click',function(){
  
  if(btn.innerHTML==="回　答"){ //もしボタンのテキストが「回答」なら
    
    if(inputText.value == question.innerHTML){ //回答が合っているなら
      clearInterval(StartTimer); //タイマーを止める

      alert('正解です！　回答にかかった時間は' + clock.innerHTML + 'です！'); 

      inputText.value = ""; //テキストを空欄にする

      btn.innerHTML = 'スタート'; //ボタンを「スタート」に戻す
    }
    
  }else{
    start = new Date(); //②ボタン(start)を押した時刻
    StartTimer = setInterval(TimerCount,10);

    btn.innerHTML = '回　答'; //ボタンを「回答」に変更
    
    RandomArrText();
  }

});

let TimerCount = function(){
  let now = new Date(); //①クリックした後、10ミリ秒後に日時取得
 
    let milli = now.getTime() - start.getTime(); //①ー②で経過秒数を取得
    let seconds = Math.floor(milli / 1000); //UNIX時間をミリ秒から１秒に加工して取得
    let minutes = Math.floor(seconds / 60); //秒を60秒で割って1分に加工して取得
  
    seconds = seconds - minutes * 60; //秒が分に繰り上がった分を減らす
 
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    clock.innerHTML = minutes + ':' + seconds;
 }


 let addZero = function(value){ //10未満の時に0を追加する
  if(value < 10){
   value = '0' + value;
   }
  return value;
 }


 let RandomArrText = function(){ //配列に格納した文字列をランダムに表示する
  let arrText = ['123456789','987654321','1597536482','751934682'];
  question.innerHTML = arrText[getRandomInt(4)];
 }


let getRandomInt = function(Int) { //整数をランダムに表示する
  return Math.floor(Math.random() * Int);
};

