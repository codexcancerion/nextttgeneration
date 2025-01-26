### **Full-Stack Concepts and API Integration**  
**Time**: 1 Hour 15 Minutes (10:45 AM - 12:00 PM)  

---

### **Lesson Outline**  

#### **1. Theory: Full-Stack Concepts and APIs (10:45 - 11:00 AM)**  

**a. Frontend and Backend Communication** (5 minutes)  
- **Frontend**:  
  - Handles user interaction and displays data.  
  - Example: Forms, dashboards, and interactive elements.  
- **Backend**:  
  - Manages logic, database interactions, and data processing.  
  - Responds to frontend requests via APIs.  
- **API as the Middleman**:  
  - APIs (Application Programming Interfaces) allow the frontend to communicate with the backend.  
  - Example: A frontend requests a list of items from the backend via an API endpoint.  

**b. Introduction to APIs** (5 minutes)  
- **What is an API?**  
  - A set of rules and endpoints for accessing or sending data.  
  - Example: `/api/tasks`.  
- **HTTP Methods**:  
  - **GET**: Retrieve data.  
  - **POST**: Submit data.  
  - **DELETE**: Remove data.  
- **Data Formats**:  
  - APIs typically exchange data in JSON format.  

---

#### **2. Next.js Backend: Creating APIs with App Router (11:00 - 11:30 AM)**  

**a. App Router API Overview** (5 minutes)  
- **What’s New?**  
  - APIs are defined as `route.ts` files inside the `app/api` directory.  
  - Named exports (e.g., `export async function GET`) correspond to HTTP methods.  

**b. Hands-On: Creating an API** (25 minutes)  
1. **Set Up the Directory**:  
   - Inside the Next.js project, create:  
     ```
     app
     └── api
         └── tasks
             └── route.ts
     ```  

2. **Add Basic GET API**:  
   ```typescript
   import { NextResponse } from "next/server";

   const tasks = ["Learn Next.js", "Understand APIs", "Build amazing apps"];

   export async function GET() {
     return NextResponse.json({ tasks });
   }
   ```  
   - Start the server with `npm run dev`.  
   - Open a browser and test at `http://localhost:3000/api/tasks`.  

3. **Add a POST API**:  
   - Extend `route.ts` to handle adding a new task:  
     ```typescript
     import {NextRequest, NextResponse} from "next"

     export async function POST(request: NextRequest) {
       const body = await request.json();
       const { task } = body;

       if (!task) {
         return NextResponse.json(
           { error: "Task field is required." },
           { status: 400 }
         );
       }

       tasks.push(task);
       return NextResponse.json({ message: "Task added successfully", tasks });
     }
     ```  
   - Test with Postman or ThunderClient by sending a `POST` request to `/api/tasks` with:  
     ```json
     {
       "task": "Practice API testing"
     }
     ```  

4. **Optional DELETE API**:  
   - Add the ability to remove a task:  
     ```typescript
     export async function DELETE(request: Request) {
       const body = await request.json();
       const { task } = body;

       const index = tasks.indexOf(task);
       if (index === -1) {
         return NextResponse.json(
           { error: "Task not found." },
           { status: 404 }
         );
       }

       tasks.splice(index, 1);
       return NextResponse.json({ message: "Task removed successfully", tasks });
     }
     ```  
   - Test by sending a `DELETE` request to `/api/tasks` with:  
     ```json
     {
       "task": "Practice API testing"
     }
     ```  

---

#### **3. Testing APIs with Postman or ThunderClient (11:30 - 11:45 AM)**

**a. Set Up the Tools**  
- Install Postman or ThunderClient for API testing.  

**b. Testing APIs**  
1. **Test GET API**:  
   - Use a `GET` request to `/api/tasks`.  
   - Confirm the list of tasks is returned as JSON.  

2. **Test POST API**:  
   - Send a `POST` request to `/api/tasks` with a new task in the JSON body.  
   - Confirm the task is added to the list.  

3. **Test DELETE API (if implemented)**:  
   - Send a `DELETE` request with a task to remove it from the list.  

---

### **Wrap-Up**  
- Recap the importance of frontend-backend communication and API development.  
- Encourage participants to explore more API features and middleware.  
- Address questions or challenges from the activity.  
