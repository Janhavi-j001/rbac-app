## **Project Title:** Role-Based Access Control app  

This project is a React-based web application that implements **role-based access control (RBAC)** to manage user permissions dynamically. The system assigns users specific roles and displays pages based on their access level.

---

## **Features**
1. **Role-Specific Navigation**  
   - **Admin**: Access to *Dashboard*, *Permissions*, *Roles*, and *Logout*.
   - **Project Manager**: Access to *Dashboard*, *Permissions*, *Roles*, *Projects*, and *Logout*.
   - **Team Member**: Access to *Dashboard*, *Roles*, *Projects*, and *Logout*.

2. **Authentication**  
   - Login and Signup functionality with role selection during registration.
   - Authentication state stored locally for session management.

3. **Dynamic Sidebar & Navbar**  
   - Pages and links adapt based on the logged-in user's role.

4. **Protected Routes**  
   - Routes are secured to ensure only authenticated users can access certain pages.

5. **UI Enhancements**  
   - Clean and responsive design for better user experience.

---

## **Installation**

### **Prerequisites**
- [Node.js](https://nodejs.org/) installed on your system.
- A package manager like `npm` or `yarn`.

### **Steps to Set Up**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/role-based-access-project.git
   cd role-based-access-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Access the application at `http://localhost:3000`.

---

## **Folder Structure**
```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   ├── Dashboard/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   ├── ProtectedRoute.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Projects.jsx
│   ├── ActivityLogs.jsx
│   ├── Roles.jsx
│   ├── Permissions.jsx
│   ├── Logout.jsx
├── utils/
│   ├── auth.js
├── App.jsx
└── index.js
```

---

## **Usage**
### **Sign Up**
1. Register as a new user and choose a role: Admin, Project Manager, or Team Member.
2. Log in with your credentials.

### **Role-Based Access**
- Navigation and accessible pages are automatically adjusted based on the role selected during signup.

### **Logout**
- Clears the session and redirects to the login page.

---

## **Technologies Used**
- **Frontend**: React.js, React Router, redux
- **State Management**: React `useState`
- **Styling**: Custom CSS, Tailwind CSS
- **Local Storage**: To manage user data and roles

---

## **Contributing**
Feel free to fork the repository and make contributions. Open a pull request for review.

