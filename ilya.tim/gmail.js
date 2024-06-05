//цепляем событие на onclick кнопки
var button = document.getElementById('gmail');
button.addEventListener('click', function () {
  //нашли наш контейнер
  var ta = document.getElementById('contGmail'); 
  //производим его выделение
  var range = document.createRange();
  range.selectNode(ta); 
  window.getSelection().addRange(range); 
 
  //пытаемся скопировать текст в буфер обмена
  try { 
    document.execCommand('copy'); 
  } catch(err) { 
    console.log('Can`t copy, boss'); 
  } 
  //очистим выделение текста, чтобы пользователь "не парился"
  window.getSelection().removeAllRanges();
});

$(document).ready(function(){
  var engEm = $(".eng-em");
  var ruEm = $(".ru-em");

  $(engEm).click(function() {
    // $( this ).css({"transform": "translate(-202px, -11px) scale(1)", "transition-delay": "0s", "transition": "0.3s"});
    $.alert({
    title: 'Copied!',
    content: "it.ilya.tim@gmail.com",
   
});
  });
  $(ruEm).click(function() {
    // $( this ).css({"transform": "translate(-202px, -11px) scale(1)", "transition-delay": "0s", "transition": "0.3s"});
    $.alert({
    title: 'Cкопировано!',
    content: "it.ilya.tim@gmail.com",
   
});
  });
  // .mousedown(function() {
  //   // $( this ).css({"transform": "translate(-202px, -11px) scale(1.1)", "transition-delay": "0s", "transition": "0.2s"});
   
  // });

  });
