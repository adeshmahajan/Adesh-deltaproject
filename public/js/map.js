//let mapTokens =  mapToken;
 // console.log(mapToken);
	mapboxgl.accessToken = mapToken;
   
   
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    //console.log(coordinates);



    const marker = new mapboxgl.Marker({ color: 'red', rotation: 45 })
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>location</h4><p>Exact Location provided</p>`))
    .addTo(map);

   
    
  