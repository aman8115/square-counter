
function square (){
   
    const number = document.getElementById("enteryournumber").value;
    if( number == 0 ){
      document.getElementById("result").innerText = " ENTER A NUMBER "
      
    }  else{
      let answer = number*number;
      document.getElementById("result").innerHTML = answer +" is square of "+ number
    
    }
    document.getElementById("enteryournumber").value = " "
    
 
    
   

}





