

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll(".img-12-min");
let bigImg = document.querySelector("div.div-12-max img");
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector(".next");
next.onclick = nextFunction;
next.ontouchstart = nextFunction;

const prev = document.querySelector(".prev");
prev.onclick = prevFunction;
prev.ontouchstart = prevFunction;

const resetBtn=document.createElement('button');
resetBtn.classList.add('button-primary');               //Добавил кнопку reset
resetBtn.textContent='Reset';                             
document.querySelector('button.next').after(resetBtn);

resetBtn.onclick=resetSlider;
resetBtn.ontouchstart=resetSlider;


function changeImg() {
  if (count == images.length) {
    count = 0;
  }
 if (count<0) {             
    count = images.length - 1;
  } 
   //count=count%images.length; //так листает только вперёд в конце перейдёт на 1 картинку
    
  images.forEach((el, i) => {
    if (count == i) {
      let current = el.getAttribute("src");
      el.classList.add("active-img");
      bigImg.setAttribute("src", current);
    } else if (el.classList.contains("active-img")) {
      images[i].classList.remove("active-img");
    }
  });
}

function nextFunction() {
  count++;
  changeImg();
}

function prevFunction() {
  count--;
  changeImg();
}

function resetSlider(){
  count=0;
  changeImg();
}
