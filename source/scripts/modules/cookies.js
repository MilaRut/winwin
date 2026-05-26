function checkCookies() {

  // Проверка наличия кукис
  function checkCookieConsent() {
    const consent = document.cookie.split('; ').find((row) => row.startsWith('cookieConsent='));
    return consent ? consent.split('=')[1] === 'true' : false;
  }

  // Показать уведомление, если согласие не дано
  if (!checkCookieConsent()) {
    setTimeout(() => {
      document.querySelector('.cookie-consent').style.display = 'block';
    }, 2000);
  }

  // Обработчик нажатия кнопки
  document.querySelector('.accept-cookies').onclick = function () {
    document.cookie = `cookieConsent=true; path=/; max-age=${ 60 * 60 * 24 * 30}`; // 30 дней
    document.querySelector('.cookie-consent').style.display = 'none';
  };
}

export {checkCookies};
