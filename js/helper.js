
var HTMLheaderName = '<h1 class="resume-name" id="name">%data%</h1>';
var HTMLheaderRole = '<span class="header-span">%data%</span><hr class="hr-style">';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github & slack</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<div class="row"><div class="col-xs-12"><img src="%data%" class="biopic"></div></div>';
var HTMLwelcomeMsg = '<div class="row"><div class="col-xs-12"><div class="welcome-message">%data%</div></div></div>';

// var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
// var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#" target="_blank">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="project-img">';

var HTMLschoolStart = '<div class="education-entry"></div><span>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h4><i class="fa fa-headphones" aria-hidden="true"></i>Online Classes</h4>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#" target="_blank">%data%</a>';

// var internationalizeButton = '<button>Internationalize</button>';
// var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
// $(document).ready(function() {
//   $('button').click(function() {
//     var $name = $('#name');
//     var iName = inName($name.text()) || function(){};
//     $name.html(iName);
//   });
// });

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
// var clickLocations = [];

// function logClicks(x,y) {
//   clickLocations.push(
//     {
//       x: x,
//       y: y
//     }
//   );
//   console.log('x location: ' + x + '; y location: ' + y);
// }

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;

//   logClicks(x,y);

// });



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
// var map;    // declares a global map variable


// /*
// Start here! initializeMap() is called when page is loaded.
// */
// function initializeMap() {

//   var locations;

//   var mapOptions = {
//     disableDefaultUI: true,
//     zoom: 12,
//     styles: [
//     {
//         "featureType": "all",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "visibility": "off"
//             },
//             {
//                 "color": "#f49f53"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "weight": "0.01"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#000000"
//             },
//             {
//                 "weight": "0.01"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             },
//             {
//                 "weight": "0.01"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.country",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "color": "#701a1a"
//             },
//             {
//                 "weight": "0.01"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.province",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "weight": "0.01"
//             },
//             {
//                 "color": "#000000"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.locality",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "weight": "0.01"
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.neighborhood",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#ffffff"
//             },
//             {
//                 "weight": "0.01"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.land_parcel",
//         "elementType": "labels.text",
//         "stylers": [
//             {
//                 "color": "#414040"
//             },
//             {
//                 "weight": "0.01"
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#f9ddc5"
//             },
//             {
//                 "lightness": -7
//             }
//         ]
//     },
//     {
//         "featureType": "poi.business",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#645c20"
//             },
//             {
//                 "lightness": 38
//             }
//         ]
//     },
//     {
//         "featureType": "poi.government",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#9e5916"
//             },
//             {
//                 "lightness": 46
//             }
//         ]
//     },
//     {
//         "featureType": "poi.medical",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#813033"
//             },
//             {
//                 "lightness": 38
//             },
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.park",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#645c20"
//             },
//             {
//                 "lightness": 39
//             }
//         ]
//     },
//     {
//         "featureType": "poi.school",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#a95521"
//             },
//             {
//                 "lightness": 35
//             }
//         ]
//     },
//     {
//         "featureType": "poi.sports_complex",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#9e5916"
//             },
//             {
//                 "lightness": 32
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#813033"
//             },
//             {
//                 "lightness": 43
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#f19f53"
//             },
//             {
//                 "weight": 1.3
//             },
//             {
//                 "visibility": "on"
//             },
//             {
//                 "lightness": 16
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#f19f53"
//             },
//             {
//                 "lightness": -10
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "lightness": 38
//             }
//         ]
//     },
//     {
//         "featureType": "transit.line",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#813033"
//             },
//             {
//                 "lightness": 22
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "all",
//         "stylers": [
//             {
//                 "color": "#1994bf"
//             },
//             {
//                 "saturation": -69
//             },
//             {
//                 "gamma": 0.99
//             },
//             {
//                 "lightness": 43
//             }
//         ]
//     }
// ]
//   };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
//   map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
//   function locationFinder() {

//     // initializes an empty array
//     var locations = [];

//     // adds the single location property from bio to the locations array
//     locations.push(bio.contacts.location);

//     // iterates through school locations and appends each location to
//     // the locations array. Note that forEach is used for array iteration
//     // as described in the Udacity FEND Style Guide:
//     // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
//     education.schools.forEach(function(school){
//       locations.push(school.location);
//     });

//     // iterates through work locations and appends each location to
//     // the locations array. Note that forEach is used for array iteration
//     // as described in the Udacity FEND Style Guide:
//     // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
//     work.jobs.forEach(function(job){
//       locations.push(job.location);
//     });

//     return locations;
//   }

//   /*
//   createMapMarker(placeData) reads Google Places search results to create map pins.
//   placeData is the object returned from search results containing information
//   about a single location.
//   */
//   function createMapMarker(placeData) {

//     // The next lines save location data from the search result object to local variables
//     var lat = placeData.geometry.location.lat();  // latitude from the place service
//     var lon = placeData.geometry.location.lng();  // longitude from the place service
//     var name = placeData.formatted_address;   // name of the place from the place service
//     var bounds = window.mapBounds;            // current boundaries of the map window

//     // marker is an object with additional data about the pin for a single location
//     var marker = new google.maps.Marker({
//       map: map,
//       position: placeData.geometry.location,
//       title: name
//     });

//     // infoWindows are the little helper windows that open when you click
//     // or hover over a pin on a map. They usually contain more information
//     // about a location.
//     var infoWindow = new google.maps.InfoWindow({
//       content: name
//     });

//     // hmmmm, I wonder what this is about...
//     google.maps.event.addListener(marker, 'click', function() {
//       //  infowindow.open(map, marker);
//     });

//     // this is where the pin actually gets added to the map.
//     // bounds.extend() takes in a map location object
//     bounds.extend(new google.maps.LatLng(lat, lon));
//     // fit the map to the new marker
//     map.fitBounds(bounds);
//     // center the map
//     map.setCenter(bounds.getCenter());
//   }

//   /*
//   callback(results, status) makes sure the search returned results for a location.
//   If so, it creates a new map marker for that location.
//   */
//   function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       createMapMarker(results[0]);
//     }
//   }

//   /*
//   pinPoster(locations) takes in the array of locations created by locationFinder()
//   and fires off Google place searches for each location
//   */
//   function pinPoster(locations) {

//     // creates a Google place search service object. PlacesService does the work of
//     // actually searching for location data.
//     var service = new google.maps.places.PlacesService(map);

//     // Iterates through the array of locations, creates a search object for each location
//       locations.forEach(function(place){
//       // the search request object
//       var request = {
//         query: place
//       };

//       // Actually searches the Google Maps API for location data and runs the callback
//       // function with the search results after each search.
//       service.textSearch(request, callback);
//     });
//   }

//   // Sets the boundaries of the map based on pin locations
//   window.mapBounds = new google.maps.LatLngBounds();

//   // locations is an array of location strings returned from locationFinder()
//   locations = locationFinder();

//   // pinPoster(locations) creates pins on the map for each location in
//   // the locations array
//   pinPoster(locations);

// }

// /*
// Uncomment the code below when you're ready to implement a Google Map!
// */

// // Calls the initializeMap() function when the page loads
// window.addEventListener('load', initializeMap);

// // Vanilla JS way to listen for resizing of the window
// // and adjust map bounds
// window.addEventListener('resize', function(e) {
//   // Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
// });

//  Skills call
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1500);
	});
});