var heptValue = "";
var heptValue1 ="";
var heptValue2 ="";
var operat ='';
var result = "";

function getData(data){
    if(heptValue1 !== ""){
        heptValue2 = heptValue2 + data;
        console.log(" zapisanie hept2:  " + heptValue2 );
        document.getElementById("current-inputData").value = heptValue2.toString(17).toUpperCase();
    }else{
        heptValue = heptValue + data;
        console.log(" zapisanie hept:  " + heptValue);
       document.getElementById("current-inputData").value = heptValue.toString(17).toUpperCase();
    }
}
function choseOperation(operations){
    console.log(" operations :" + operations );
    if (operations === '='){
        document.getElementById("current-inputData").value = (result).toString(17).toUpperCase(); 
        console.log(" zapisany operat:  " + operat);
       switch(operat){
       case'/':
        if (heptValue2 === '0'){
            console.log("wartość hept2:  " + heptValue2 );
            document.getElementById("current-inputData").value = "Can't divide by '0'";
            clearVar();
        }else{
            result =parseInt(heptValue1,17) / parseInt(heptValue2,17); 
            console.log("result =" + result);
            document.getElementById("previous-inputData").value = (heptValue2).toString(17).toUpperCase();
            document.getElementById("current-inputData").value = (result).toString(17).toUpperCase(); 
            clearVar();
        }
        break;
        case'+':
        
            result = parseInt(heptValue1,17) + parseInt(heptValue2,17);
            console.log("result =" + result);
            document.getElementById("previous-inputData").value = (heptValue2).toString(17).toUpperCase();
            document.getElementById("current-inputData").value = (result).toString(17).toUpperCase(); 
            clearVar();
        break;
        case'-':
            result = parseInt(heptValue1,17) - parseInt(heptValue2,17);
            console.log("result =" + result);
            document.getElementById("previous-inputData").value = (heptValue2).toString(17).toUpperCase();
            document.getElementById("current-inputData").value = (result).toString(17).toUpperCase(); 
            clearVar();
        break;
        case'*':
            result = parseInt(heptValue1,17) * parseInt(heptValue2,17);
            console.log("result =" + result);
            document.getElementById("previous-inputData").value = (heptValue2).toString(17).toUpperCase();
            document.getElementById("current-inputData").value = (result).toString(17).toUpperCase(); 
            clearVar();   
        break;
    }  

    }else{
        document.getElementById("current-inputData").value ="";
        heptValue1 = heptValue;
        document.getElementById("previous-inputData").value = (heptValue1).toString(17).toUpperCase();
        console.log("zapisanie hept1 : " + heptValue1 );
        operat = operations;
        console.log(" zapisanie operat:  " + operat);
    } 
}



function clearVar(){
    heptValue = "";
    heptValue1 = "";
    heptValue2 = "";
    operat ='';
}

function clearAll(){ 
    document.getElementById("previous-inputData").value = "";
    document.getElementById("current-inputData").value = "";
    clearVar();
}


