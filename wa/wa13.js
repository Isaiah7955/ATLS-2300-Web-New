// Problem 1
const employees = [
    {
        name: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        name: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        name: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];

console.log("The employees are: ", employees);

// Problem 2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("The company is: ", company);

// Problem 3
const newEmployeeAdd = {
    name: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};

company.employees.push(newEmployeeAdd);

console.log("New company list with all employees included", company);

// Problem 4 
function sumEmployeeSalary(company) {
    let salaryTotal = 0;
    for (const employee of company.employees) {
        salaryTotal += employee.salary;
    }
    return salaryTotal;
}

console.log("Company total salary is: ", sumEmployeeSalary(company));

// Problem 5
function raiseTime(company) {
    for(const employee of company.employees) {
        if(employee.raiseEligible == true) {
            employee.salary = (employee.salary*1.1);
            employee.raiseEligible = false;
        }
        else {
            continue;
        }
    }
    return company;
}

console.log("Updated company salaries: ", raiseTime(company));

// Problem 6
const workFromHome = ['Anna', 'Sam'];

function updateWorkFromHome(company) {
    for(const employee of company.employees) {
        if(employee.name == workFromHome[0] || employee.name == workFromHome[1]) {
            employee['wfh'] = true;
        }
        else {
            employee['wfh'] = false;
        }
    }
    return company;
}

console.log("Updated company log with wfh: ", updateWorkFromHome(company));