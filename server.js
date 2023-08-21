const inquirer = require('inquirer');
const Department = require('./lib/department');
const Employee = require('./lib/employee');
const Role = require('./lib/role');

console.clear();

console.log("\n**************************************************\n\nWELCOME TO EMPLOYEE TRACKER\n\n**************************************************\n\n");

async function mainMenu() {
  try {
    const res = await inquirer.prompt([
      {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add/Update Employee', 'View All Roles', 'Add/Update Role', 'View All Departments', 'Add/Update Department', 'Additional Reports', 'Exit']
      }
    ]);

    switch (res.mainMenu) {
      case 'View All Employees':
        console.log('\n');
        await viewEmployees();
        break;

      case 'Add/Update Employee':
        console.log('\n');
        await modifyEmployees();
        break;

      case 'View All Roles':
        console.log('\n');
        await viewRoles();
        break;

      case 'Add/Update Role':
        console.log('\n');
        await modifyRoles();
        break;

      case 'View All Departments':
        console.log('\n');
        await viewDepartments();
        break;

      case 'Add/Update Department':
        console.log('\n');
        await modifyDepartments();
        break;

      case 'Additional Reports':
        console.log('\n');
        await additionalReports();
        break;

      default:
        console.log('\nGoodbye!\n\n');
        process.exit();
        break;
    }
  } catch (err) {
    console.error(err);
  }
}

async function modifyDepartments() {
  try {
    const res = await inquirer.prompt([
      {
        type: 'list',
        name: 'modifyDepartments',
        message: 'What would you like to do?',
        choices: ['Add Department', 'Edit Department', 'Delete Department', 'Go Back']
      }
    ]);

    switch (res.modifyDepartments) {
      case 'Add Department':
        console.log('\n');
        await addDepartment();
        break;

      case 'Edit Department':
        console.log('\n');
        await editDepartment();
        break;

      case 'Delete Department':
        console.log('\n');
        await deleteDepartment();
        break;

      default:
        console.log('\n');
        await mainMenu();
    }
  } catch (err) {
    console.error(err);
  }
}

async function viewDepartments() {
  const department = new Department();
  const viewDepartments = await department.viewAll();
  await mainMenu();
}

async function addDepartment() {
  const department = new Department();
  const newDepartment = await department.insertNew();
  console.log(`\nSuccessfully added ${newDepartment.name} department!\n`);
  await modifyDepartments();
}


async function additionalReports() {
  try {
    const res = await inquirer.prompt([
      {
        type: 'list',
        name: 'report',
        message: 'What report would you like to see?',
        choices: ['Employees by Manager', 'Employees by Department', 'Budget by Department', 'Go Back']
      }
    ]);

    switch (res.report) {
      case 'Employees by Manager':
        console.log('\n');
        await viewEmployeeByMgr();
        break;

      case 'Employees by Department':
        console.log('\n');
        await viewEmployeebyDept();
        break;

      case 'Budget by Department':
        console.log('\n');
        await viewBudgetByDept();
        break;

      default:
        console.log('\n');
        await mainMenu();
    }
  } catch (err) {
    console.error(err);
  }
}

mainMenu();





