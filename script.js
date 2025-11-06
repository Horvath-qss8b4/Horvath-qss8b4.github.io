function loadPage(filename) {
  fetch(filename)
    .then(response => {
      if (!response.ok) throw new Error("Nem sikerült betölteni a fájlt.");
      return response.text();
    })
    .then(text => {
      document.getElementById("content").innerText = text;
    })
    .catch(error => {
      document.getElementById("content").innerText = "Hiba a betöltés során.";
      console.error(error);
    });
}

function loadPdf(url) {
    if (!url) {
        console.warn("Nincs URL megadva.");
        return;
    }
    
    // Mindig új fülön nyitja meg, a böngészőre bízva a PDF megjelenítést
    window.open(url, '_blank'); 
    
    // Opcionálisan frissítheted a tartalomterületet is egy üzenettel
    document.getElementById("content").innerText = "A PDF fájl új fülön nyílt meg.";
}