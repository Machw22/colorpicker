//mreams1 colorpicker logic

function EnterColor() {
    
    var red = 0.0;
    var green = 0.0;
    var blue = 0.0;

    var cTotal = 0.0;
    
   var lum = Math.max(red, green, blue);



    var rgbValue = "";
   
    
red = Number(prompt("Please enter the R value between 0.0 and 1.0"))
green = Number(prompt("Please enter the G value between 0.0 and 1.0."))
blue = Number(prompt("Please enter the B value between 0.0 and 1.0."))
  //  rgbValue = alert("Please enter each value proper RGB value." + convertValue);

  var rgbR = (red * 255)
  var rgbG = (green * 255)
  var rgbB = (blue * 255)

   /* while (rgbValue ===  "") {
        prompt("Reminder, please enter a proper RGB value.")
    }
*/
 cTotal = (Number(red) + Number(green) + Number(blue))

  var cRTotal = (1/ cTotal * red)
    
  var cGTotal = (1/ cTotal * green)
    
  var cBTotal = (1/ cTotal * blue)
    

 var convertValue = ("The converted value (in barycentric maxwell) is (" + cRTotal.toFixed(2) + ", " + cGTotal.toFixed(2) + ", " + cBTotal.toFixed(2) + " , " + lum + "). ");

document.write(convertValue);
//document.getElementById("vBoxColor").innerHTML = convertValue;

/* console.log(rgbR)
 console.log(red)
 console.log(cRTotal)
 console.log(convertValue)
*/



 //Popup for conversion value to display

 //Display actual color
 console.log(cTotal)
 var vBoxColor= "rgb(" + rgbR + "," + rgbG + "," + rgbB + ")";

 var convertValue = ("The converted value (in barycentric maxwell) is (" + cRTotal.toFixed(2) + ", " + cGTotal.toFixed(2) + ", " + cBTotal.toFixed(2) + " , " + lum + "). ");
 document.getElementById("vBoxColor").style.background = vBoxColor 


 console.log(lum);
} 




EnterColor();