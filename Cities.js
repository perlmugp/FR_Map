	  var cityIcon = L.icon({
    iconUrl: './images/city.png',

    iconSize:     [35, 35], // size of the icon
    iconAnchor:   [17, 17], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var citySmallIcon = L.icon({
    iconUrl: './images/citySmall.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var keepIcon = L.icon({
    iconUrl: './images/Keep.png',
    shadowUrl: './images/KeepShadow.png',

    iconSize:     [25, 26], // size of the icon
    shadowSize:   [35, 26], // size of the shadow
    iconAnchor:   [12, 13], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 13],  // the same for the shadow
    popupAnchor:  [0, -12] // point from which the popup should open relative to the iconAnchor
});
var keepMedIcon = L.icon({
    iconUrl: './images/Keep.png',
    shadowUrl: './images/KeepShadow.png',

    iconSize:     [19, 20], // size of the icon
    shadowSize:   [26, 20], // size of the shadow
    iconAnchor:   [9, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [9, 10],  // the same for the shadow
    popupAnchor:  [0, -9] // point from which the popup should open relative to the iconAnchor
});
	  
	  var cities = new L.LayerGroup();
	  
	    L.marker([26.26386, -48.91937],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Arabel">Arabel</a>').addTo(cities),
	    L.marker([21.57572, -58.98285],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Athkatla">Athkatla</a>').addTo(cities),
	    L.marker([25.7009, -59.2603],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Baldur&#39;s_Gate">Baldur&#39;s Gate</a>').addTo(cities),
	    L.marker([24.61206, -54.8053],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Berdusk">Berdusk</a>').addTo(cities), 
	    L.marker([37.4705, -54.65149],{icon: keepIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Citadel_Adbar">Citadel Adbar</a>').addTo(cities), 
	    L.marker([26.06665, -56.40381],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Elturel">Elturel</a>').addTo(cities), 
	    L.marker([21.43006, -53.59818],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Eshpurta">Eshpurta</a> - The Shield City of Amn.').addTo(cities), 	    	    
	    L.marker([36.06242, -57.81006],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Everlund">Everlund</a>').addTo(cities), 
	    L.marker([37.25219, -66.15417],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Fireshear">Fireshear</a>').addTo(cities),
	    L.marker([24.00884, -53.19855],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Iriaebor">Iriaebor</a>').addTo(cities),
	    L.marker([36.76749, -64.57489],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Luskan">Luskan</a>').addTo(cities), 
	    L.marker([24.86401, -49.1748],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Marsember">Marsember</a> - City of Spices').addTo(cities), 
	    L.marker([37.32867, -62.80334],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Mirabar">Mirabar</a>').addTo(cities), 
		L.marker([35.3084, -64.03931],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Neverwinter">Neverwinter</a>').addTo(cities),
		L.marker([24.43215, -51.36795],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Proskur">Proskur</a>').addTo(cities),
		L.marker([25.52261, -41.51733],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Procampur">Procampur</a>').addTo(cities), 
		L.marker([25.85922, -55.00305],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Scornubel">Scornubel</a>').addTo(cities), 		
		L.marker([31.69546, -59.12292],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Secomber">Secomber</a>').addTo(cities),  
		L.marker([36.59568, -57.79083],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Silverymoon">Silverymoon</a>').addTo(cities), 
		L.marker([36.52729, -55.89569],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Sundabar">Sundabar</a>').addTo(cities),  
		L.marker([24.95369, -49.76532],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Suzail">Suzail</a>').addTo(cities),  
		L.marker([31.80289, -62.01233],{icon: cityIcon}).bindPopup('<a class="cityLink" href="https://raw.githubusercontent.com/perlmugp/FR_Map/master/FRNotes_new.html#Waterdeep">Waterdeep</a>').addTo(cities),
		L.marker([23.9461, -47.0874],{icon: cityIcon}).bindPopup('<a class="cityLink" href="http://forgottenrealms.wikia.com/wiki/Westgate">Westgate</a>').addTo(cities);
		
	var citiesSmall = new L.LayerGroup();
	
		L.marker([37.01352, -56.30219],{icon: keepMedIcon}).bindPopup('<a class="smallcityLink" href="http://forgottenrealms.wikia.com/wiki/Citadel_Felbarr">Citadel Felbarr</a>').addTo(citiesSmall),
		L.marker([23.80294, -50.22675],{icon: citySmallIcon}).bindPopup('<a class="smallcityLink" href="http://forgottenrealms.wikia.com/wiki/Elversult">Elversult</a>').addTo(citiesSmall),
		L.marker([26.89513, -53.83026],{icon: citySmallIcon}).bindPopup('<a class="smallcityLink" href="http://forgottenrealms.wikia.com/wiki/Hill%27s_Edge">Hill&#39;s Edge</a>').addTo(citiesSmall),
		L.marker([25.83203, -53.42926],{icon: citySmallIcon}).bindPopup('<a class="smallcityLink" href="http://forgottenrealms.wikia.com/wiki/Hluthvar">Hluthvar</a>').addTo(citiesSmall),
		L.marker([37.97668, -66.22009],{icon: citySmallIcon}).bindPopup('<a class="smallcityLink" href="http://forgottenrealms.wikia.com/wiki/Ironmaster">Ironmaster</a>').addTo(citiesSmall),
		L.marker([32.373, -57.24426],{icon: citySmallIcon}).bindPopup('<a class="smallcityLink" href="http://forgottenrealms.wikia.com/wiki/Loudwater">Loudwater</a>').addTo(citiesSmall),
		L.marker([25.11793, -48.56781],{icon: citySmallIcon}).bindPopup('<a class="smallcityLink" href="http://forgottenrealms.wikia.com/wiki/Wheloon">Wheloon</a>').addTo(citiesSmall),
		L.marker([34.97038, -60.58548],{icon: citySmallIcon}).bindPopup('<a class="smallcityLink" href="http://forgottenrealms.wikia.com/wiki/Yartar">Yartar</a>').addTo(citiesSmall);
	
	
