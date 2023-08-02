window.onload = function() {

    let setValue = (newValue) => document.querySelector('#result').innerHTML = newValue;
    let valueCounter = Number(document.querySelector('#result').innerHTML);  
    
    document.querySelector('#btnIncrement').addEventListener("click", () => {
        
        if(valueCounter !== 10){
            setValue(++valueCounter);
        }

    });
    
    document.querySelector('#btnDecrement').addEventListener("click", () => {

        if(valueCounter !== 0){
            setValue(--valueCounter);
        }

    });
    
    document.querySelector('#btnRestart').addEventListener("click", () => {

        if(valueCounter !== 0){
            valueCounter = 0;
            setValue(0);
        }

    });

}

