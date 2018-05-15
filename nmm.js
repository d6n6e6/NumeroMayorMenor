function mayormenor(){
    var num1 = document.getElementById('caj1').value;
    var num2 = document.getElementById('caj2').value;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if(num1<num2){
    alert ("numero mayor es num2");
    }
       else{
        alert ("numero mayor es num1");
   
    }
     }