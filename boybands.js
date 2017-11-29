var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var selected = /**create array of bands and vegetables? to cycle send to loop count*/


// The number of loops to perform (what if the array changes?)
var loopCount = selected.length;


// Keep track of which band we're on in the loop
var currentBand = bands [];

// Keep track of which veggie we're on in the loop
var currentVeggie = vegetables[];

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  currentBand = document.write(bandElement);

  
  // Add the veggie names into the correct <div>
  currentVeggie = document.write(veggieElement);

}