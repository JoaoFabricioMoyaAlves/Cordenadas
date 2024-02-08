


   
   var map = L.map('map').setView([-23.5505, -46.6333], 13);
var x = -23.5505;
var y = -46.6333;
var marker; // Declaração da variável marker fora da função pesquisa()

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([x, y]).addTo(map)
    .bindPopup('Sua Cordenada!')
    .openPopup();

function pesquisa() {
    var latitude = parseFloat(document.getElementById('latitude').value);
    var longitude = parseFloat(document.getElementById('longitude').value);

    // Atualiza as variáveis de coordenadas com os valores dos campos de formulário
    x = latitude;
    y = longitude;

    // Remove o marcador existente do mapa, se existir
    if (marker) {
        map.removeLayer(marker);
    }

    // Adiciona um novo marcador com as coordenadas atualizadas
    marker = L.marker([x, y]).addTo(map)
        .bindPopup('Sua Localização!')
        .openPopup();
}