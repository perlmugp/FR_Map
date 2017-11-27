var townLargeIcon = L.icon({
    iconUrl: './images/citySmall.png',

    iconSize:     [16, 16], // size of the icon
    iconAnchor:   [8, 8], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var townSmallIcon = L.icon({
    iconUrl: './images/citySmall.png',

    iconSize:     [12, 12], // size of the icon
    iconAnchor:   [6, 6], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var villageIcon = L.icon({
    iconUrl: './images/citySmall.png',

    iconSize:     [10, 10], // size of the icon
    iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var keepSmallIcon = L.icon({
    iconUrl: './images/Keep.png',
    shadowUrl: './images/KeepShadow.png',

    iconSize:     [13, 13], // size of the icon
    shadowSize:   [18, 13], // size of the shadow
    iconAnchor:   [6, 6], // point of the icon which will correspond to marker's location
    shadowAnchor: [6, 6],  // the same for the shadow
    popupAnchor:  [0, -6] // point from which the popup should open relative to the iconAnchor
});

	var townsLarge = new L.LayerGroup();	
	
		L.marker([37.80544, -56.78009],{icon: townLargeIcon}).bindPopup('<a class="townsLargeLink" href="http://forgottenrealms.wikia.com/wiki/Beorunna%27s_Well">Beorunna%27s_Well</a>').addTo(townsLarge),
		L.marker([23.58161, -59.24927],{icon: townLargeIcon}).bindPopup('<a class="townsLargeLink" href="http://forgottenrealms.wikia.com/wiki/Beregost">Beregost</a>').addTo(townsLarge),
		L.marker([29.7453, -46.4502],{icon: townLargeIcon}).bindPopup('<a class="townsLargeLink" href="http://forgottenrealms.wikia.com/wiki/Dagger_Falls">Dagger Falls</a>').addTo(townsLarge),
		L.marker([32.24068, -55.79407],{icon: townLargeIcon}).bindPopup('<a class="townsLargeLink" href="http://forgottenrealms.wikia.com/wiki/Llorkh">Llorkh</a>').addTo(townsLarge),
		L.marker([37.16688, -58.92242],{icon: keepSmallIcon}).bindPopup('<a class="townsLargeLink" href="http://forgottenrealms.wikia.com/wiki/Mithral_Hall">Mithral Hall</a>').addTo(townsLarge),
		L.marker([34.9805, -61.4534],{icon: townLargeIcon}).bindPopup('<a class="townsLargeLink" href="http://forgottenrealms.wikia.com/wiki/Triobar">Triboar</a>').addTo(townsLarge);
	
	var townsSmall = new L.LayerGroup();	

		L.marker([28.26568, -45.23071],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Ashabenford">Ashabenford</a>').addTo(townsSmall),
	    L.marker([31.0318, -60.8697],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Daggerford">Daggerford</a><br>A small town on the north bank of River Delimbiyran. It it is the largest stop on the Trade Way between Waterdeep and Baldurs Gate.').addTo(townsSmall), 
	    L.marker([25.89876, -49.58405],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Dhedluk">Dhedluk</a>').addTo(townsSmall), 
	    L.marker([26.01606, -50.1004],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Espar">Espar</a>').addTo(townsSmall), 
	    L.marker([26.29095, -49.56482],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Eveningstar">Eveningstar</a>').addTo(townsSmall), 	    
	    L.marker([32.42402, -61.41769],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Goldenfields">Goldenfields</a>').addTo(townsSmall), 	    
	    L.marker([27.02243, -54.73526],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Hardbuckler">Hardbuckler</a>').addTo(townsSmall), 	    
	    L.marker([37.66643, -65.9317],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Hundelstone">Hundelstone</a>').addTo(townsSmall), 	    
	    L.marker([33.91259, -63.57239],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Leilon">Leilon</a>').addTo(townsSmall), 	    
	    L.marker([36.30295, -60.18448],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Nesm%C3%A9">Nesm%C3%A9</a>').addTo(townsSmall), 	    
	    L.marker([23.64956, -51.45721],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Priapurl">Priapurl</a>').addTo(townsSmall), 	    
	    L.marker([36.85545, -57.98721],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Quaervarr">Quaervarr</a>').addTo(townsSmall),
	    L.marker([31.69896, -59.12292],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Secomber">Secomber</a>').addTo(townsSmall),
	    L.marker([35.36106, -63.55453],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Thundertree">Thundertree</a>').addTo(townsSmall),
	    L.marker([26.3045, -50.18967],{icon: townSmallIcon}).bindPopup('<a class="townsSmallLink" href="http://forgottenrealms.wikia.com/wiki/Tyrluk">Tyrluk</a>').addTo(townsSmall);

	var villages = new L.LayerGroup();
	  
	    L.marker([33.85901, -63.11096],{icon: villageIcon}).bindPopup('<a class="villagesLink" href="http://forgottenrealms.wikia.com/wiki/Ieirithymbul">Ieirithymbul</a> - Nestled in a high, narrow valley between three of the westernmost peaks of the Sword Mountains, not far from the High Road southeast of Leilon, is Ieirithymbul, a little-known village of gnomes.').addTo(villages),
	    L.marker([32.62665, -61.75278],{icon: villageIcon}).bindPopup('<a class="villagesLink" href="http://forgottenrealms.wikia.com/wiki/Amphail_(village)">Amphail</a>').addTo(villages),
	    L.marker([33.71749, -60.68024],{icon: villageIcon}).bindPopup('<a class="villagesLink" href="http://forgottenrealms.wikia.com/wiki/Beliard">Beliard</a>').addTo(villages),
	    L.marker([35.13676, -62.29111],{icon: villageIcon}).bindPopup('<a class="villagesLink" href="http://forgottenrealms.wikia.com/wiki/Conyberry">Conyberry</a>').addTo(villages),
	    L.marker([31.98129, -58.19321],{icon: villageIcon}).bindPopup('<a class="villagesLink" href="http://forgottenrealms.wikia.com/wiki/Zelbross">Zelbross</a>').addTo(villages);
