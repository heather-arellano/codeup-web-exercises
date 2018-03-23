var i = 2;

while (i<=65536) {
    console.log(i);
    i *= 2;
}





var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var Sold= Math.floor(Math.random() * 5) + 1;

    if(Sold <= allCones) {
        console.log(Sold + ' cones sold ');
        allCones -= Sold;
    }else {
        console.log('Cannot sell you ' + Sold + ' cones I only have' + allCones + '...')
    }

} while ( allCones > 0);
console.log('Yay! I sold them all!');

