
//Убираю функцию на странице "community"
export function checkUrl(func1, func2) {
  document.documentURI.includes('community') ? func2() : func1();

}

