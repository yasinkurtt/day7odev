function kaydet(){
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;
    localStorage.setItem('isim', isim);
    localStorage.setItem('soyisim', soyisim);
    
  }
  function notHesapla() {
    var vize1 = Number(document.getElementById("vize1").value);
    var vize2 = Number(document.getElementById("vize2").value);
    var final = Number(document.getElementById("final").value);
    var puan = (vize1 + vize2 + final) / 3;
  
    
    if (puan >=90) {
      var harf = "AA 😊";
    } else if (puan >= 80) {
      var harf = "BA 😊";
    } else if (puan >= 70) {
      var harf = "BB 😊";
    } else if (puan >= 60) {
      var harf = "CB 😊";
    } else if (puan >= 50) {
        var harf = "CC 😊";
    } else {
      var harf = "FF 😥";
    }
  
    document.getElementById("sonuc").innerHTML =
      "Sayın " +
      localStorage.getItem("isim") +
      " " +
      localStorage.getItem("soyisim")+
      " Harf Notunuz: " +
      harf;
  }
  function sayfa1(){
    window.location.assign('index.html');
  }
  
  function sayfa2(){
  
    window.location.assign('sayfa2.html');
  }