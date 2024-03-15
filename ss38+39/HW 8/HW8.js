function convertFromPounds(pounds) {
    document.getElementById('kilograms').value = (pounds / 2.2046).toFixed(2);
    document.getElementById('ounces').value = (pounds * 16).toFixed(2);
  }

  function convertFromKilograms(kilograms) {
    document.getElementById('pounds').value = (kilograms * 2.2046).toFixed(2);
    document.getElementById('ounces').value = (kilograms * 35.274).toFixed(2);
  }

  function convertFromOunces(ounces) {
    document.getElementById('pounds').value = (ounces / 16).toFixed(2);
    document.getElementById('kilograms').value = (ounces / 35.274).toFixed(2);
  }