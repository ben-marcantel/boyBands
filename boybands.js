var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];





function looper(b, v){
  
  for (i=0; i<b.length; i++) {
    currentBands = bands[i];
    currentVegetable = vegetables[i];
    document.getElementById("boy-bands").innerHTML += currentBands + " ";
    document.getElementById("vegetables").innerHTML += currentVegetable + " ";
     };
}

looper (bands , vegetables);














/*
var loopCount = bands.length;
var currentBand = bands[loopCount];
var currentVeggie = vegetables[loopCount];

var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");



// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  currentBand = document.write(bandElement);

  
  // Add the veggie names into the correct <div>
  currentVeggie = document.write(veggieElement);

}
*/
