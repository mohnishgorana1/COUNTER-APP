const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("displayvalue");

// for decrement button click

decrementBtn.addEventListener("click" , () => {
    const value = Number(displayValue.innerText);

    if( value > 0 ){
        displayValue.innerText = value - 1 ;
    }
    else{
        alert("Negative Values are not allowed");
    }
});

// for increment button

incrementBtn.addEventListener("click" ,() => {
    const value = Number(displayValue.innerText);
    if( value < 10 ){
        displayValue.innerText = value + 1;
    }
    else{
        alert("Values greater than 10 are not allowed")
    }

});

// For reset button

resetBtn.addEventListener("click" , () => {
    displayValue.innerText = 0; 
   

});