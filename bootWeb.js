
let id =0;
let myformbutton = document.getElementById('my-form-button')
console.log(myformbutton)
myformbutton.addEventListener('click', () => {
    console.log('this is inside my eventlistener')
//essentials to be input here by user
    let essentials = document.getElementById('essentials').value;
    console.log(essentials , 'essentials here');
//date to be input by user
    let createdDate = new Date();
    let date =`${createdDate.getFullYear()}- ${createdDate.getMonth()+1}-${ createdDate.getDate()}`;
    console.log(date)
//resources to be input by user
let resources = document.getElementById('resources').value;
console.log(resources, 'resources here');
//level of importance to be put here by user
let importance = document.getElementById('importance').value;
console.log(importance, 'very');
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id',`item-${id}`);
    row.insertCell(0).innerHTML = essentials;
    row.insertCell(1).innerHTML = resources;
    row.insertCell(2).innerHTML = importance;
    row.insertCell(3).innerHTML = date; 
});
