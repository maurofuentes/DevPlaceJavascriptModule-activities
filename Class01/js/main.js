let start = parseInt(prompt("Ingrese el numero del valor inicial"));

let end = parseInt(prompt("Ingrese el numero del valor final"));



function multiplyTables(start, end){

    for(let i = start; i <= end; i++){

        console.log("=====================");
        console.log("Tabla del " + i + "\n");
        console.log("=====================");

        for(let y = 1; y <= 10; y++){
            
            let result = i*y;

            console.log(i + " x " + y + " = " + result);

        }


    }

  
}

multiplyTables(start, end);