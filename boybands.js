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













