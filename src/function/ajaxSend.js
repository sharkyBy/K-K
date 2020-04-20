export function ajaxSend(formData, success) {
  console.log(formData)
  fetch('mail.php', { // файл-обработчик
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', // отправляемые данные
      },
      body: JSON.stringify(formData)
  })
      .then(response => alert(success))
      .catch(error => console.error(error))
};