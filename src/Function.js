// Получение языка браузера
export const userLang = (window.navigator.language ||
  window.navigator.systemLanguage ||
  window.navigator.userLanguage);
// console.log(document.documentURI)



// Обработка события "scroll" для блока aboutUs, Project 
document.addEventListener('scroll', () => { validUrl(aboutUsScroll, removeEvent) },
  false);
  document.addEventListener('scroll', () => { validUrl(projectHorizontalScroll, removeEvent) },
  false);



//Убираю функцию на странице "community"
function validUrl(func1, func2) {
  document.documentURI.includes('community') ? func2() : func1();

}

function removeEvent() {
  document.removeEventListener('scroll', aboutUsScroll);
  document.removeEventListener('scroll',projectHorizontalScroll)
  console.log('функция получения координат по событию scroll удалена!')
}


function projectHorizontalScroll() { 
let container = document.querySelector('.project__container')
let box = container.getBoundingClientRect();
let stickyContainer = document.querySelector('#project');

//координаты и размеры блока с проектами

let blockY = Math.round(box.y);
// let blockW = Math.round(container.scrollWidth);
let blockWidth = box.width;
// console.log(blockW, blockWidth)

// устанавливаю высоту липкого контейнера равного ширине содержимого липкого элемента
stickyContainer.style = `height:${blockWidth}px`;

//горизонтальный скролл 
 let  scrollPos = 0;
 let step = 0;
if (blockY === 100 ) {
 
 window.addEventListener('scroll',function () {
    let nextPos = this.pageYOffset;
    console.log(`prev: ${scrollPos}; next: ${nextPos}`)    
    if(nextPos > scrollPos) {      
      container.scrollBy(step +=50,0)
      console.log(`down, step: ${step}`);
    }else {      
      container.scrollBy(step -=50,0)
      console.log(`up, step: ${step}`);
    }   
    scrollPos = nextPos;   
   
  });
  
}
}





// Функция на событие скролл 

function aboutUsScroll() {  
  let textWrap = document.documentElement.querySelector('.aboutUs__text_wrapper'); 
  let textWrapper = [...textWrap.children];   
  let carouselWrapper = [...document.documentElement.querySelector('#carousel').children];

  let top = carouselWrapper.map((item) => {
      let y = item.getBoundingClientRect().y;
      let height = item.getBoundingClientRect().height;

      return y + height / 2;
  });


  let y = textWrap.getBoundingClientRect().y;
  let h = textWrap.getBoundingClientRect().height;
  let textCenter = Math.round(y + h / 2);

  // el.scrollIntoView({block:"center",behavior: "smooth"}) 
  // console.log(`pictCenter: ${top}; textCenter: ${textCenter}; y: ${y}`)
 
  return (
      top.map((item, index) => {
          return (
              Math.round(item) <= textCenter && Math.round(item) >= Math.round(y) ? textWrapper[index].style.opacity = '1' :
              Math.round(item) <= h && Math.round(item) >= (textCenter + 0.9 * Math.round(h)) ? textWrapper[index].style.opacity = '1' : textWrapper[index].style.opacity = '0'
          )
      })
  )

}


 