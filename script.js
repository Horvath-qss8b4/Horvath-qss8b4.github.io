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
