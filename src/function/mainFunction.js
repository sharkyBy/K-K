
import { aboutUsScroll } from './aboutUsScroll';
import { projectHorizontalScroll } from './projectHorizontalScroll';
import { checkUrl } from './checkUrl';

// Получение языка браузера
export const userLang = (window.navigator.language ||
  window.navigator.systemLanguage ||
  window.navigator.userLanguage);


//  Добавление события "scroll" для блока aboutUs, Project 
document.addEventListener('scroll', () => { checkUrl(aboutUsScroll, removeEvent) },
  false);
document.addEventListener('scroll', () => { checkUrl(projectHorizontalScroll, removeEvent) },
  false);

// Удаление события "scroll" на вкладке 'comunity'
function removeEvent() {
  document.removeEventListener('scroll', aboutUsScroll);
  document.removeEventListener('scroll', projectHorizontalScroll);
  console.log('функция получения координат по событию scroll удалена!')
}











