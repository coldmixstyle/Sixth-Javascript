/*console.log("Merhaba Dunya")

const konsol_yazisi = "Selam!";
const konsol_yazisi2 = "Merhaba";
let konsol_sayi;                               // eğer LET e sayi eklersen çıktısında onu gösterir. yoksa aşağıdaki numberparametre den alır.


function konsolaYazdir (textParam,textParam2 , numberParametre=5) {
    console.log(textParam +"-" + textParam2 +"-" + numberParametre);
}
konsolaYazdir(konsol_yazisi,konsol_yazisi2,konsol_sayi);
konsolaYazdir("Deneme","Diğer Deneme",30);*/

function ilkFonksiyon (param){
    console.log("İlk Fonksiyon cagirildi")
}

const ikinciFonksiyon = (param1 , param2) => { // arrow function
    console.log("İkinci Fonksiyon cagirildi:", param1 + "-" + param2 );
}

ilkFonksiyon();
ikinciFonksiyon ("İlk parametre","İkinci paramete");

function sayilariCarp (num1, num2){
    const carpim_sonucu = num1 * num2;
    console.log(carpim_sonucu);
}

sayilariCarp(10,5); //scope kavrami: FONKSİYON İÇERİSİNDE TANIMLANAN DEGİSKENLER SADECE FONKSİYON İÇERSİNDE KULLANILIR.

function sayilariBol (num1, num2){
    const bolme_sonucu  = num1 / num2;
    console.log("Bölme işlemin sonucu:",bolme_sonucu);
}
sayilariBol(100,10)

/*function sayilariCikart (num1, num2){
    const cikartma_sonucu = num1 - num2;
    console.log("Çıkartma işlemin sonucu:",cikartma_sonucu);  // standart fonksiyon işlemin sonucu
}
sayilariCikart (100,10)*/

function sayilariCikart (num1, num2){
    const cikartma_sonucu = num1 - num2;
    return cikartma_sonucu                                        //RETURN ile çıkartma sonucu
}
const cikartma_sonucu = sayilariCikart(50,20);
console.log ("Çıkartma sonucu return sonucu" , cikartma_sonucu);


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



/*function ekranaBas(){
    sayac++; //sayac = sayac +1 , tanımlanmasını kısa hali
    console.log("Sayac guncel degeri:",sayac);
}
//setTimeout(ekranaBas,5000); sayfa ilk yüklendikten 5 saniye (5000 milisaniye) sonra ekranabas fonk. cagirilir.

setInterval (ekranaBas, 3000); //Her 3 saniye de 1 çalışacak*/


/*
setInterval(() => {
    sayac++;
    console.log("Sayac guncel degeri:",sayac);   //Bu farklı bir versiyon.
},3000)*/ 


/*
const arrowFunc = (sayi1,sayi2) => {
return sayi1 * sayi2
}*/
/*
const carpim_sonucu = arrowFunc(10,3);        //ÜSTTEKİ DAHA UZUN VERSİYON BU DAHA KISA.
console.log("Carpim sonucu:",carpim_sonucu)
*/

/*let sayac2 = 0;
let new_array2 =[];

const arrowFunc2 = () => {
    while(new_array2.length<10 ) {        //while ve lentght kullanarak sayı olarak 10 kadar gidiyor ve sonra devam etmeyecek.

        sayac2++;
    new_array2.push(sayac2);
    console.log("Sayac guncel degeri:",sayac2);
    }
}

setInterval(arrowFunc2,1000);*/


// console.log (document)          HTML elemana erişim.

const ilkEleman = document.getElementById("birinci");
const ucuncuEleman = document.getElementsByClassName("ucuncu");
console.log (ucuncuEleman);



function yaziyiGuncelle(){
    document.getElementById("ikinci").innerHTML = "FrontedDevelopment"
    ucuncuEleman[1].innerHTML = "Burasi yeni geldi!"
}


setTimeout(yaziyiGuncelle,2000)

console.log (ilkEleman);

const dorduncuEleman = document.getElementById("dorduncu");
const dorduncuEleman2 = document.getElementsByClassName("dorduncu");

console.log(dorduncuEleman)


function yaziyiGuncelle2 (){
    document.getElementById("besinci").innerHTML = "20.08.2023"
    dorduncuEleman2[1].innerHTML = "20.08.2023"
}
setTimeout(yaziyiGuncelle2 , 2000)

console.log (dorduncuEleman2);




