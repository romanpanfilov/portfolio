//цепляем событие на onclick кнопки
var button = document.getElementById('telegram');
button.addEventListener('click', function () {
  //нашли наш контейнер
  var ta = document.getElementById('contTel'); 
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
  var engTel = $(".eng-tel");
  var ruTel = $(".ru-tel");

  $(engTel).mouseup(function() {
    // $( this ).css({"transform": "translate(158px, -11px) scale(1)", "transition-delay": "0s", "transition": "0.3s"});
    var dst = window.matchMedia('all and (min-width: 992px)');
    var mob = window.matchMedia('all and (max-width: 991px)');

    if (dst.matches) {
        $.alert({
        title: 'Copied!',
        content: "@Ilya_Tim",
       
      });
    } else if(mob.matches) {
        $.alert({
        title: 'Copied!',
        content: "@Ilya_Tim",
       
      });
    }

  
  })
  $(ruTel).mouseup(function() {
    // $( this ).css({"transform": "translate(158px, -11px) scale(1)", "transition-delay": "0s", "transition": "0.3s"});
    var dst = window.matchMedia('all and (min-width: 992px)');
    var mob = window.matchMedia('all and (max-width: 991px)');

    if (dst.matches) {
        $.alert({
        title: 'Cкопировано!',
        content: "@Ilya_Tim",
       
      });
    } else if(mob.matches) {
        $.alert({
        title: 'Скопировано!',
        content: "@Ilya_Tim",
       
      });
    }

  
  })
  .mousedown(function() {
    // $( this ).css({"transform": "translate(158px, -11px) scale(1.1)", "transition-delay": "0s", "transition": "0.2s"});
   
  });

  });
