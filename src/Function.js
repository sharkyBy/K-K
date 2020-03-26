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
  document.removeEventListener('scroll',projectHorizontalScroll);  
  console.log('функция получения координат по событию scroll удалена!')
}


let subScrollingX = scrollingX();

function projectHorizontalScroll() {  
let container = document.querySelector('.project__container');
let box = container.getBoundingClientRect();
let stickyContainer = document.querySelector('#project');
let position = window.getComputedStyle(container).top;
position = parseInt(position.match(/\d+/)); 

//координаты и размеры блока Project

let blockY = Math.round(box.y);
let blockW = Math.round(container.scrollWidth);

// устанавливаю высоту липкого контейнера равного ширине содержимого липкого элемента
stickyContainer.style = `height:${blockW}px`;


if (blockY === position) {    
  subScrollingX(container);
}

}

//Функция горизонтального скрола блока Project

function scrollingX() {  
  //горизонтальный скролл  
  let scrollPos=0;
    return  function(container) {     
    let nextPos =Math.round(window.pageYOffset);
    let diff = nextPos - scrollPos;
    // console.log(`prev: ${scrollPos}; next: ${nextPos}`);    
    nextPos > scrollPos ? container.scrollLeft += scrollPos !==0?diff:0 : container.scrollLeft += diff;
    // nextPos > scrollPos ? console.log(`down`) : console.log(`up`);
    scrollPos = nextPos;
    // console.log(`положение горизонтального скролла: ${container.scrollLeft}`)ж    
  }; 
  
}







// Функция смены содержимого блока aboutUs на событие скролл 

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


 