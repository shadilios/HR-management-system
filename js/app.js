//#region task 07 part


//array that holds all my employee
allEmployees = [];



//elements for render
let form = document.getElementById("dataForm");
let empDiv = document.getElementById("container");



function Employee(id, name, department, level, image){

  this.employeeID = id;
  this.employeeName = name;
  this.employeeDepartment = department;
  this.employeeLevel = level;
  this.employeeImage = image;
  this.employeeSalary;
  
  allEmployees.push(this);
}


//My prototype to generate salary data
Employee.prototype.employeeSalary = function(){

  if (this.employeeLevel == "Junior") {

    this.employeeSalary = getRandomNumberBetween(500,1000);
    return (this.employeeSalary - 0.075 * this.employeeSalary);
    //return getRandomNumberBetween(500,1000);
  }
  if (this.employeeLevel == "Mid-Senior") {
    this.employeeSalary = getRandomNumberBetween(1000,1500);
    return (this.employeeSalary - 0.075 * this.employeeSalary);
    //return getRandomNumberBetween(1000,1500);    
  }
  if (this.employeeLevel == "Senior") {
    this.employeeSalary = getRandomNumberBetween(1500,2000);
    return (this.employeeSalary - 0.075 * this.employeeSalary);
    //return getRandomNumberBetween(1500,2000);    
  }

}




Employee.prototype.render = function () {

  var newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "#219F94";
  newDiv.style.width = "250px";
  newDiv.style.padding = "10px";
  newDiv.style.margin = "10px";
  newDiv.style.fontSize = "22px";
  newDiv.style.color = "white";
  newDiv.style.height = "200px";
  newDiv.style.borderTopLeftRadius = "5px";

  var img = document.createElement("img");
  img.setAttribute("src",this.employeeImage);
  img.style.width = "200px";
  img.style.height = "auto";
  img.style.marginBottom = "5px";
  img.style.borderTopLeftRadius = "10px";
  newDiv.appendChild(img);

  let info1 = document.createElement('p');
  let info2 = document.createElement('p');
  let info3 = document.createElement('p');
  info1.textContent =`Name: ${this.employeeName} - ID: ${this.employeeID}`;   
  info2.textContent =`Department: ${this.employeeDepartment}`;
  info3.textContent =`Level: ${this.employeeLevel} - Salary: ${this.employeeSalary}$`;

  newDiv.appendChild(info1);
  newDiv.appendChild(info2);
  newDiv.appendChild(info3);
  empDiv.appendChild(newDiv);
}




/*
//loop to give salaries to all employees
for (let i = 0; i < allEmployees.length; i++) {
  allEmployees[i].employeeSalary();
}


/*
//prototype function to render employee
Employee.prototype.renderEmployee = function(){

  let renderEmployeeOutput = ("<b><u>Name:</u></b> " + this.employeeName + ". " + "&nbsp;&nbsp;" + " <b><u>Salary:</u></b> " + this.employeeSalary()  + "." + "<br><br>" )

  document.write(renderEmployeeOutput);

}
*/

//function to return a random number
function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

//Creating my employees from table data
let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");

/*
//loop to render all employees
for (let i = 0; i < allEmployees.length; i++) {
  allEmployees[i].renderEmployee();
}
*/


//task 8 part!

//function to generate random ID
function generateId() {
  let randomId = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  return randomId;
}


//handle submit
function handleSubmit(event){

  let empName = event.target.fullName.value;
  let empDep = event.target.department.value;
  let empLevel = event.target.level.value;
  let empImg = event.target.image.value;

  getData();

  createEmp(empName, empDep, empLevel, empImg);


  renderAll();

  saveData();

}

//function to create a new employee
function createEmp(fullName, department, level, imgURL){
    
  let newEmp = new Employee(fullName, department, level, imgURL);
  newEmp.salary = employeeSalary(newEmp);
  newEmp.empId = generateId();  
}

//function to save data
function saveData(){
  let formatedData = JSON.stringify(allEmployees);
  localStorage.setItem("employees", formatedData);
}

//function to get data
function getData(){
  let employees = localStorage.getItem("employees");
  let parseEmployees = JSON.parse(employees);
  if(parseEmployees != null){
      allEmployees = [];

      for(let i = 0; i < parseEmployees.length; i++){  
          createEmp(parseEmployees[i].fullName, parseEmployees[i].department, parseEmployees[i].level, parseEmployees[i].imgURL);
      };
  }
  renderAll();
}


function renderAll(){
  document.getElementById("container").innerHTML="";
  allEmployees.forEach(emp => {
      emp.render();
  }); 
}









//keep those at the end

renderAll();
getData();
saveData();