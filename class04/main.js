const personalData = [];

let dataAmount = 0;

let maxDataAmount = 10;



function saveData(){

    

    const names = document.querySelector('#namesValue').value;
    const lastnames = document.querySelector('#lastnamesValue').value;
    const telephone = document.querySelector('#telephoneValue').value;
    const year = document.querySelector('#yearValue').value;

    const personalDataDiv = document.querySelector('#personalDataContainer');
    const ulPersonalData = document.createElement('ul');

    const userPersonalData = {
        name : names,
        lastname : lastnames,
        tel : telephone,
        year : year
    }

    personalData.push(userPersonalData);

    console.log(personalData);

    dataAmount++;

    document.querySelector('#namesValue').value = '';
    document.querySelector('#lastnamesValue').value = '';
    document.querySelector('#telephoneValue').value = '';

    personalData.sort((a,b)=>b.year-a.year);

    if(dataAmount == maxDataAmount){

        document.querySelector('#saveBtn').setAttribute('disabled', 'disabled');

        for(let i = 0; i < personalData.length; i++){
            
            var row = document.createElement("li");

            row.textContent = `${personalData[i].name} ${personalData[i].lastname} ${personalData[i].tel} ${personalData[i].year}`;
            
            ulPersonalData.appendChild(row);

            personalDataContainer.appendChild(ulPersonalData);
        }
        
    }
    

}