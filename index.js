const display=document.getElementById("display");

function appendToDisplay(input)
{
  display.value+=input;
}

function Calculate(input)
{
     try{
        display.value=eval(display.value);
     }
     catch(error){
        display.value="ERROR";
     }
}

function ClearDisplay(input)
{
  display.value="";   
}