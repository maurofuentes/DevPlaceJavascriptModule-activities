
function multiplyTables(){
    
    const from = document.querySelector('#fromValue').value;
    const to = document.querySelector('#toValue').value;
    
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.getElementById('boardsContainer').appendChild(table);

    for(let i = 1; i <= 10; i++){

        var row = document.createElement("tr");

       

        for(let j = from; j <= to; j++){

            
            let result = i*j;
            
            console.log(i + " x " + j + " = " + result);
            
            var cell = document.createElement("td");
            var cellText = document.createTextNode(`${j} x ${i} = ${result}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tbody.appendChild(row);

    }

}