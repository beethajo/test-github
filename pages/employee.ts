class Employee {
    // Properties
    name: string;
    role: string;
  
    // Constructor
    constructor(name: string, role: string) {
      this.name = name;
      this.role = role;
    }

  
    // Method
    displayInfo(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Role: ${this.role}`);
    }

    
  }
  
  // Creating objects
  const emp1 = new Employee("John", "Tester");
  const emp2 = new Employee("David", "Developer");
  
  // Calling methods
  emp1.displayInfo();
  emp2.displayInfo();