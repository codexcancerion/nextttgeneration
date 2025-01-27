### **Next.js Basics and Project Setup**  
**Time**: 45 Minutes (9:45 - 10:30 AM)  

---

### **Lesson Outline**  

#### **1. Full Stack Intro (9:45 - 9:50 AM)**  
- **Frontend**: The visible part of an application that users interact with (e.g., buttons, forms).  
  - Built using HTML, CSS, JavaScript, and frameworks like React or Next.js.  

- **Backend**: The server-side logic and database handling, managing data storage and processing.  
  - Can be built using Node.js, Python, or other languages.  

- **API**: Acts as the bridge connecting the frontend and backend, enabling communication.  
  - Example: A frontend requests user data from an API, and the backend sends it as a response.  

---

#### **2. Next.js App and First Page (9:50 - 10:00 AM)**  

**a. Create a New Next.js App**:  
1. Run the following command:  
   ```bash
   npx create-next-app@latest
   ```  
   (Assume Tailwind CSS is already pre-installed during the setup.)

2. Open the app in a code editor and start the development server.  

**b. Create the First Page**:  
1. Open `pages/index.tsx` and replace the default content:  
   ```typescript
   export default function Home() {
     return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <h1 className="text-4xl font-bold text-blue-600">Hello, Next.js!</h1>
         <p className="mt-2 text-gray-700">
           Welcome to your first page built with Next.js.
         </p>
       </div>
     );
   }
   ```  
2. Save the file and view it in the browser.  

---

#### **3. Discuss Tailwind**  
- Modify and customize the page looks.

---

#### **4. Discuss Components (10:00 - 10:05 AM)**  
- **What are Components?**  
  - Reusable, independent pieces of a user interface.  
  - Encapsulate UI logic and styles.  

- **Example of a Simple Component**:  
  Create a new file `components/Greeting.tsx`:  
  ```typescript
  export default function Greeting({ name }: { name: string }) {
    return <p className="text-lg text-gray-600">Hello, {name}! Welcome to Next.js.</p>;
  }
  ```  

- Use the Component in `pages/index.tsx`:  
  ```typescript
  import Greeting from "../components/Greeting";

  export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Next.js!</h1>
        <Greeting name="Participant" />
      </div>
    );
  }
  ```

---

#### **5. State Management with `useState` and `useEffect` (10:05 - 10:15 AM)**  

**a. Introduce `useState`**  
- Manages local state in a functional component.  
- Example: Add a counter to the homepage.  

**b. Implement `useState` in `pages/index.tsx`:**  
  ```typescript
  import { useState } from "react";

  export default function Home() {
    const [count, setCount] = useState(0);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Next.js!</h1>
        <p className="text-lg mt-4">Current Count: {count}</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    );
  }
  ```

**c. Introduce `useEffect`**  
- Handles side effects like fetching data or logging events.  
- Example: Log to the console whenever the count changes.  
  ```typescript
  import { useState, useEffect } from "react";

  export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`Count changed to: ${count}`);
    }, [count]);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Next.js!</h1>
        <p className="text-lg mt-4">Current Count: {count}</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    );
  }
  ```

---

#### **6. Discuss CSR and SSR Concepts (10:15 - 10:20 AM)**  
- **CSR (Client-Side Rendering)**:  
  - Rendering happens in the browser using JavaScript.  
  - Suitable for interactive UIs but less SEO-friendly.  

- **SSR (Server-Side Rendering)**:  
  - Rendering happens on the server, and the client receives a fully rendered page.  
  - Better for SEO and initial load performance.  

**Example of SSR**:  
```typescript
export async function getServerSideProps() {
  return { props: { message: "This page is SSR rendered!" } };
}

export default function SSRExample({ message }: { message: string }) {
  return <p>{message}</p>;
}
```

---

#### **6. Hands-On Task: Internalizing Concepts (10:20 - 10:30 AM)**  

**Task**:  
1. Create a new component called `TaskList` that displays a list of tasks.  
   ```typescript
   export default function TaskList({ tasks }: { tasks: string[] }) {
     return (
       <ul className="list-disc list-inside">
         {tasks.map((task, index) => (
           <li key={index}>{task}</li>
         ))}
       </ul>
     );
   }
   ```  

2. Use `TaskList` in `pages/index.tsx` with `useState` to manage tasks.  
   ```typescript
   import { useState } from "react";
   import TaskList from "../components/TaskList";

   export default function Home() {
     const [tasks, setTasks] = useState<string[]>([]);
     const [newTask, setNewTask] = useState("");

     const addTask = () => {
       setTasks([...tasks, newTask]);
       setNewTask("");
     };

     return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <h1 className="text-4xl font-bold text-blue-600">Task Manager</h1>
         <input
           type="text"
           className="mt-4 border p-2 rounded"
           value={newTask}
           onChange={(e) => setNewTask(e.target.value)}
           placeholder="Enter a task"
         />
         <button
           className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
           onClick={addTask}
         >
           Add Task
         </button>
         <TaskList tasks={tasks} />
       </div>
     );
   }
   ```  

This task reinforces components, state management, and Tailwind CSS usage.
