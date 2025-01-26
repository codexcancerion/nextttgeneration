### **JavaScript to TypeScript Basics**  
**Time**: 30 Minutes (9:15 - 9:45 AM)  

---

### **Lesson Outline**

#### **1. Quick Recap of JavaScript Essentials (9:15 - 9:25 AM)**  

**a. Variables** (2 minutes):  
- Explain `var`, `let`, and `const` usage:  
  - `var`: Function-scoped, avoid using.  
  - `let`: Block-scoped, mutable.  
  - `const`: Block-scoped, immutable.  
- Example:  
  ```javascript
  let mutableValue = 10;
  const immutableValue = 20;
  ```

**b. Functions** (3 minutes):  
- Types of functions:  
  - Function declarations:  
    ```javascript
    function greet(name) {
      return `Hello, ${name}!`;
    }
    ```
  - Arrow functions:  
    ```javascript
    const greet = (name) => `Hello, ${name}!`;
    ```

**c. Async/Await** (5 minutes):  
- Concept: Simplifies asynchronous code using promises.  
- Example:  
  ```javascript
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  ```

---

#### **2. Transition to TypeScript Basics (9:25 - 9:35 AM)**  

**a. What is TypeScript? (2 minutes)**  
- Superset of JavaScript that adds **static typing** and **developer-friendly features**.  
- Benefits:  
  - Catch errors at compile-time instead of runtime.  
  - Enhanced IDE support with autocomplete and type checking.  
  - Better maintainability for larger projects.  

**b. Adding Types (3 minutes)**  
- Variable types:  
  ```typescript
  let age: number = 25; // Number
  let name: string = "Alice"; // String
  let isStudent: boolean = true; // Boolean
  ```
- Function parameter and return types:  
  ```typescript
  const greet = (name: string): string => {
    return `Hello, ${name}!`;
  };
  ```

**c. Interfaces (3 minutes)**  
- Used to define the shape of an object.  
  ```typescript
  interface User {
    id: number;
    name: string;
    isActive: boolean;
  }

  const user: User = {
    id: 1,
    name: "John Doe",
    isActive: true,
  };
  ```

**d. Optional and Default Parameters (2 minutes)**  
- Optional parameters:  
  ```typescript
  const greet = (name: string, age?: number): string => {
    return age ? `${name} is ${age} years old.` : `${name} is ageless.`;
  };
  ```
- Default parameters:  
  ```typescript
  const greet = (name: string = "Guest"): string => {
    return `Hello, ${name}!`;
  };
  ```

---

#### **3. Activity: Refactor a Simple JavaScript Function to TypeScript (9:35 - 9:45 AM)**  

**a. JavaScript Code**  
Participants are provided the following code:  
```javascript
function calculateTotal(price, quantity) {
  return price * quantity;
}

const order = {
  item: "Notebook",
  price: 50,
  quantity: 3,
};

console.log(`Total: $${calculateTotal(order.price, order.quantity)}`);
```

**b. Refactor to TypeScript**  
Step-by-step guidance:  
1. **Add types for parameters and return value**:  
   ```typescript
   function calculateTotal(price: number, quantity: number): number {
     return price * quantity;
   }
   ```

2. **Define an interface for the object**:  
   ```typescript
   interface Order {
     item: string;
     price: number;
     quantity: number;
   }
   ```

3. **Use the interface to type the object**:  
   ```typescript
   const order: Order = {
     item: "Notebook",
     price: 50,
     quantity: 3,
   };
   ```

4. **Final Refactored Code**:  
   ```typescript
   interface Order {
     item: string;
     price: number;
     quantity: number;
   }

   function calculateTotal(price: number, quantity: number): number {
     return price * quantity;
   }

   const order: Order = {
     item: "Notebook",
     price: 50,
     quantity: 3,
   };

   console.log(`Total: $${calculateTotal(order.price, order.quantity)}`);
   ```
---

### **Additional**  
- Convert the functions to arrow functions 

---

### **Assessment and Feedback**  
- Check participants' understanding with quick verbal questions:  
  - "What’s the difference between `let` and `const`?"  
  - "Why use TypeScript over JavaScript?"  
- Review their refactored code to ensure they understand type annotations and interfaces.  

