var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 2
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//$.ajax('https://raw.githubusercontent.com/joyceyuqiliu/MUSA611-CPLN692-week4/master/data/phillySchools.csv').done(console.log)
//$.ajax('https://raw.githubusercontent.com/joyceyuqiliu/MUSA611-CPLN692-week4/master/data/phillySchools.csv').done(console.log(CSSUnparsedValue)
