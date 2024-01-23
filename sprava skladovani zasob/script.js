produkty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];

function Vypsat() {


    const popElement = document.getElementById('pop');


    popElement.innerHTML = `<ul>${produkty.map(produkt => `<li>${produkt.nazev} - Cena: ${produkt.cenaZaKus} - Skladem: ${produkt.pocetNaSklade}</li>`).join('')}</ul>`;
}

function seradit() {



    produkty.sort((a, b) => b.cenaZaKus - a.cenaZaKus);



    const popElement = document.getElementById('pop');


    popElement.innerHTML = `<ul>${produkty.map(produkt => `<li>${produkt.nazev} - Cena: ${produkt.cenaZaKus} - Skladem: ${produkt.pocetNaSklade}</li>`).join('')}</ul>`;

}
function mnozstvi() {


    const iMnozsvi = parseInt(document.getElementById("lul").value, 10);
    const result = produkty.filter((produkt) => produkt.pocetNaSklade < iMnozsvi);
   
   
    const resultElement = document.getElementById('pop');
    
    
    resultElement.innerHTML = `<ul>${result.map(produkt => `<li>${produkt.nazev} - Cena: ${produkt.cenaZaKus} - Skladem: ${produkt.pocetNaSklade}</li>`).join('')}</ul>`;
}
function cena() {
    
    const sumaCen = produkty.reduce((acc, produkt) => acc + produkt.cenaZaKus, 0);
    const sumaSkladu = produkty.reduce((acc, produkt) => acc + produkt.pocetNaSklade, 0);
   
    
    const celkovaCena = sumaCen * sumaSkladu;
   
    const resultElement = document.getElementById('pop');
    resultElement.innerHTML = `<p>Celková cena: ${celkovaCena}</p>`;
  }