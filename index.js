function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t)
}

function showDate() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m //+ ':' + s
    document.getElementById('horloge').innerHTML = time;
    refresh();
 }

 function Quitter() {
     window.close()
 }
 function Netflix() {
     window.open('https://www.netflix.com/')
 }
 function Spotify() {
     window.open('https://www.spotify.com/')
 }
 function ADN() {
     window.open('https://animedigitalnetwork.fr/')
 }
 function AppleTV() {
     window.open('https://tv.apple.com/')
 }
 

 function favoris1() {
     window.open()
 }
 function favoris2() {
    window.open()
}
function favoris3() {
    window.open()
}