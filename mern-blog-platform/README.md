
# MERN Blog Platform
Project Overview
This project contains a simple blog platform that allows users to read, update , create and delete blog posts.
The project contains the backend and frontend folders that has an intermediary,cors which allows communication between them.
The project also uses the CI/CD pipeline and contains the github workflow.



To install and deploy the application:
After completing the project,push the backend folder and frontend folder in different repositories.
To deploy the backend, create a new web service and import the backend github repository.Ensure that the variables from the .env file are well copied then deploy.
After a successful deployment, copy the link and view.
To deploy frontend, create a new project and import the fontend repository to the project.Deploy the project in vercel.
Copy the link and view .
## Deployment
- Backend: https://blog-backend-xe8l.onrender.com
- Frontend: https://vercel.com/julies-projects-8179a2e9/blog-frontend/4QYjTj93sNjL2P3X1Ft2CCJUF9PF

To setup the CI/CD:
Create a .github folder.
In the folder, create a workflow file  and ad the ci.yml file that ensures code quality. 
This shows a streamlined software delivery process.

## How to Run Locally
```bash
git clone  https://github.com/muthonijulie/week-7-deployment-and-devops-essentials-muthonijulie.git
cd backend && npm install
cd frontend && npm install
npm start
