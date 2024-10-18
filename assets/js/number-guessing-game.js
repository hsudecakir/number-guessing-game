// Kullanıcıya 1-20 arası bir sayı tahmin etmesini isteyelim.
// Cevap hakkı 5 olacak.
// Her bir yanlış cevapta cevap hakkından -1 azalacak.
// Eğer tahmin ettiği sayı random üretilen sayıdan büyükse "Daha küçük bir sayı deneyin." , tahmin ettiği sayı random üretilen sayıdan küçükse "Daha büyük bir sayı deneyin." diye console'da mesaj çıkartalım.
// Doğru bildiğinde console'da tebrikler yazdıralım.

// let number = Number(prompt('1-20 arasından rastgele bir sayı tahmin ediniz.'));
// let guessingRight = 5;
randomNumber = Math.floor(Math.random() * 20) + 1;

function compareNumbers() {
  for(let i = 0; i < 5; i++) {
    let number = Number(prompt('1-20 arasından rastgele bir sayı tahmin ediniz.'));
    if(randomNumber === number){
      console.log('Tebrikler!');
      return;
    } else if(randomNumber < number){
      console.log('Daha küçük bir sayı deneyiniz.');
    } else if(randomNumber > number){
      console.log('Daha büyük bir sayı deneyiniz.');
    }
  }
  console.log(`Tahmin hakkınız bitti. Bilgisayarın seçtiği sayı: ${randomNumber}`);
}

compareNumbers();