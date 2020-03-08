mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l6bW9jbGFyZGluIiwiYSI6ImNrN2cweWphYjA4c2ozZnBoem4xZXE0aGEifQ.baCX86GsMCWYHESCaq00PA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gizmoclardin/ck7hwxcok5gxn1imz4haqpo74',
    center: [79.15823221206665, 12.97120831559555],
    zoom: 5
});


var points = [{
        coordinates: [78.4259033203125, 12.758231584069796],
        title: 'Mapbox',
        description: 'Washington, D.C.'
    },
    {
        coordinates: [79.398193359375, 12.130634779728421],
        title: 'Mapbox',
        description: 'San Francisco, California'
    }
];

points.forEach(function (marker) {

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.coordinates)
        .setPopup(new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML('<h3>' + marker.title + '</h3><p>' + marker.description + '</p>'))
        .addTo(map);
});