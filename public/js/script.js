mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l6bW9jbGFyZGluIiwiYSI6ImNrN2cweWphYjA4c2ozZnBoem4xZXE0aGEifQ.baCX86GsMCWYHESCaq00PA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gizmoclardin/ck7iudrwv681g1ip8cvyxfbpk',
    center: [78.22265625, 22.998851594142913],
    zoom: 4
});

var points = [];
var beaconCounter = document.getElementById('beaconCounter');
var medicalCounter = document.getElementById('medicalCounter');
var populationCounter = document.getElementById('populationCounter');



window.onload = () => {

    setInterval(() => {
        axios.get('/getdata')
            .then((response) => {
                console.log(response.data);
                points = response.data;
                const arr = document.querySelectorAll(".marker");
                arr.forEach((marker) => {
                    marker.parentNode.removeChild(marker);
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                var medicalEmergencies = 0;
                var population = 0;
                var parsedPoints = [];
                points.forEach((element) => {
                    parsedPoints.push({
                        "nodeId": element.nodeId,
                        "coordinates": [element.latitude,element.longitude],
                        "population": element.population,
                        "medicalNeed": element.medicalNeed
                    });
                });
                beaconCounter.innerHTML = parsedPoints.length;
     
                console.log(parsedPoints);
                parsedPoints.forEach((point) => {
                    medicalEmergencies += parseInt(point.medicalNeed);
                    population += parseInt(point.population);
                    var el = document.createElement('div');
                    el.className = 'marker';
                    new mapboxgl.Marker(el)
                        .setLngLat(point.coordinates)
                        .setPopup(new mapboxgl.Popup({
                                offset: 25
                            }) // add popups
                            .setHTML('<h3> Population: ' + point.population + '</h3><p>Beacon ID: ' + point.nodeId + '</p>'))
                        .addTo(map);
                });
                medicalCounter.innerHTML = medicalEmergencies;
                populationCounter.innerHTML = population;

            });
    }, 1000);
};
