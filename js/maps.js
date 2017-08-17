



window.onload = function () {

var styles = [{"featureType":"water","elementType":"geometry","stylers":
[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

var pos =  {lat: 40.443586, lng: -79.941950};

var options = {

	mapTypeControlOptions: {
	mapTypeIds: ['Styled']
	},
	center: new google.maps.LatLng(40.443586, -79.941950),
	zoom: 16,
	disableDefaultUI: true,	
	scrollwheel: false,
	mapTypeId: 'Styled'
};

var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: '5032 Forbes Ave, SMC 2886'
        });


var div = document.getElementById('surabaya');

var map = new google.maps.Map(div, options);
marker.setMap(map);


var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });

map.mapTypes.set('Styled', styledMapType);


}

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCW2JRHKOz2pd417ub6CgqB62ktpRI5lZo&callback=initMap"
        type="text/javascript"></script>



