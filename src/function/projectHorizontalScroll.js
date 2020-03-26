
let subScrollingX = scrollingX();

export function projectHorizontalScroll() {  
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