function segundo(){
    var x=prompt("Cuantos litros de limonada desea?");
    x=parseInt(x);
    var y=x*14;
    var z=x*370;
    var w=(y/9)*3.8226;
    z=(z/1000)*9.25;
    x*=12.70;
    var total=x+w+z;
    console.log("El total es "+total);
}


function trigesimaseptima(){
    var a=[];
    var y=0;
    for(i=0;i<10;i++){
        var x=prompt("Ingrese numero "+(i+1));
        if(x[0]=="-"){
            x=parseInt(x);
            y=x*(-1);
            console.log(x)
        }else{
            x=parseInt(x);
            
        }
        a.push(x);
    }//fin del for
    console.log(a);
    if((a[2]>127 && a[2]<234) && (a[3]>127 && a[3]<234) && (a[4]>127 && a[4]<234) && (a[5]>127 && a[5]<234) && (a[6]>127 && a[6]<234)){
        console.log("THIS IS SPARTA!!!!!");
    }
    if(a[7]<0 && a[8]<0 && a[9]<0){
        console.log(a[7]+" "+a[8]+ " "+ a[9]+" "+ "viendo el vaso medio vacio...")
    } 
}