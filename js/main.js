function initMap() {
    const loc = { lat: 40.712776, lng: -74.005974 };

    const map = new google.maps.Map(document.querySelector('.map'), {
        center: loc,
        zoom: 8,
    });
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
} 