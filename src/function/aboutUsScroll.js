// Функция смены содержимого блока aboutUs на событие скролл 
export function aboutUsScroll() {   
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
 
  return (
      top.map((item, index) => {
          return (
              Math.round(item) <= textCenter && Math.round(item) >= Math.round(y) ? textWrapper[index].style.opacity = '1' :
              Math.round(item) <= h && Math.round(item) >= (textCenter + 0.9 * Math.round(h)) ? textWrapper[index].style.opacity = '1' : textWrapper[index].style.opacity = '0'
          )
      })
  )

}