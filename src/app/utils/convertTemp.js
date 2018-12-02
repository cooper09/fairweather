
export {convertTemp};
    
function convertTemp(ktemp) {
    console.log("convertTemp: ", ktemp );
    ktemp = parseFloat(ktemp);
    let val =  ((ktemp - 273.15) * 1.8) + 32 
    val = Math.round(val );
    return val;
}//end convertTemp
