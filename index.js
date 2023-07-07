// Your code here
function createEmployeeRecord(data) {
    return {
      firstName: data[0],
      familyName: data[1],
      title: data[2],
      payPerHour: data[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");
  
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }
  
  function createTimeOutEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }
  
  // Example usage:
  
  const employeeData = ["John", "Doe", "Manager", 20];
  const employeeRecord = createEmployeeRecord(employeeData);
  
  console.log(employeeRecord);
  
  const employeesData = [
    ["John", "Doe", "Manager", 20],
    ["Jane", "Smith", "Assistant", 15]
  ];
  const employeeRecords = createEmployeeRecords(employeesData);
  
  console.log(employeeRecords);
  
  const employee = employeeRecords[0];
  createTimeInEvent(employee, "2023-07-07 09:00");
  createTimeOutEvent(employee, "2023-07-07 17:00");
  
  console.log(employee);
  