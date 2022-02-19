let tableInfo = {};




function getData(){
  let employees = localStorage.getItem("employees");
  let parseEmployees = JSON.parse(employees);
  return parseEmployees;
}

let empData = getData();



//#region starting values
tableInfo.administrationCounter = 0;
tableInfo.financeCounter = 0;
tableInfo.marketingCounter = 0;
tableInfo.developmentCounter = 0;

tableInfo.administrationSalary = 0;
tableInfo.financeSalary = 0;
tableInfo.marketingSalary = 0;
tableInfo.developmentSalary = 0;

//#endregion



for (const i of empData) {
  if(i.department == "Administration"){
      tableInfo.administrationCounter += 1;
      tableInfo.administrationSalary += i.salary;
  }
  else if(i.department == "Finance"){
      tableInfo.financeCounter += 1;
      tableInfo.financeSalary += i.salary;
  }
  else if(i.department == "Marketing"){
      tableInfo.marketingCounter += 1;
      tableInfo.marketingSalary += i.salary;
  }
  else{
      tableInfo.developmentCounter +=1;
      tableInfo.developmentSalary += i.salary;
  }
}


//#region values from table

let employeesInAdmin = document.getElementById("employeesInAdmin");
let avgSalaryInAdmin = document.getElementById("avgSalaryInAdmin");
let allSalariesInAdmin = document.getElementById("allSalariesInAdmin");

let employeesInDev = document.getElementById("employeesInDev");
let avgSalaryInDev = document.getElementById("avgSalaryInDev");
let allSalariesInDev = document.getElementById("allSalariesInDev");

let employeesInFinance = document.getElementById("employeesInFinance");
let avgSalaryInFinance = document.getElementById("avgSalaryInFinance");
let allSalariesInFinance = document.getElementById("allSalariesInFinance");

let employessInMarket = document.getElementById("employessInMarket");
let avgSalaryInMarket = document.getElementById("avgSalaryInMarket");
let allSalariesInMarket = document.getElementById("allSalariesInMarket");

//#endregion

//change table content into numbers!

employeesInAdmin.textContent = administrationCounter;
avgSalaryInAdmin.textContent = administrationSalary;
allSalariesInAdmin.textContent = (administrationSalary * administrationCounter) / (administrationCounter);

employeesInDev.textContent = developmentCounter;
avgSalaryInDev.textContent = developmentCounter;
allSalariesInDev.textContent = (developmentCounter * developmentSalary)/ developmentCounter;

employeesInFinance.textContent = financeCounter;
avgSalaryInFinance.textContent = financeSalary;
allSalariesInFinance.textContent = (financeCounter * financeSalary)/financeCounter;

employessInMarket.textContent = marketingCounter;
avgSalaryInMarket.textContent = marketingSalary;
allSalariesInMarket.textContent = (marketingCounter * marketingSalary)/ (marketingCounter);