//#region task 07 part


//array that holds all my employee
allEmployees = [];

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

//function to return a random number
function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

//Creating my employees from table data
let emp01 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "randomURL");
let emp02 = new Employee(1001, "Lana Ali", "Finance", "Senior", "randomURL");
let emp03 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "randomURL");
let emp04 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "randomURL");
let emp05 = new Employee(1004, "Omar Zaid", "Development", "Senior", "randomURL");
let emp06 = new Employee(1005, "Rana Saleh", "Development", "Junior", "randomURL");
let emp07 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "randomURL");



//loop to give salaries to all employees
for (let i = 0; i < allEmployees.length; i++) {
  allEmployees[i].employeeSalary();
}


//RENDER
//Loop to print all employees
function renderAllEmployees(){

  for (let i = 0; i < allEmployees.length; i++) {
    //&nbsp; this is a single non breaking space in document.write
    //&nbsp;&nbsp; this is how you chain it, make sure it's in " "


    let output = ("<b><u>Name:</u></b> " + allEmployees[i].employeeName + ". "+ "&nbsp;&nbsp;" + " <b><u>Salary:</u></b> " + allEmployees[i].employeeSalary + "." + "<br><br>");

    document.write(output);
    
  }
}

renderAllEmployees();

//#endregion



//#region Task 09 setup


function saveData(){

  //first we turn our objects into string form!
  let formattedData = JSON.stringify(allEmployees);

  //we set keyword employees to formattedData
  localStorage.setItem("employees", formattedData);


}


function getData(){

  //"employees" here is the key to get back the stringified data
  let returnedData = localStorage.getItem("employees")

  //now we convert back from string to object form

  let parsedData = JSON.parse(returnedData);

}









//#endregion


