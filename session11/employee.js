function praseQuery (){
    let queryObject = {}
    let query = location.search;
    query = query.replace('?', '');
    query.split('&').forEach(couple => {
        let parseCouple = couple.split('=');
        queryObject[parseCouple[0]] = parseCouple[1];
    });
    return queryObject;
}
let queryObject = praseQuery();
fetch (`http://dummy.restapiexample.com/api/v1/employee/${queryObject.id}`)
.then(res => {
    return res.json();
  })
  .then(data => {
    console.log (data);
    return data;
  })
.then(insertInfor);

function insertInfor(data){
    let tableBody = document.getElementById('table-body-employee');
    let body = '';
    let id = data.id;
    let name = data.employee_name;
    let salary = data.employee_salary;
    let age = data.employee_age;
    let image = data.profile_image;
    body += `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${salary}</td>
        <td>${age}</td>
        <td>${image}</td>
        </tr>`;
    tableBody.innerHTML = body;
}