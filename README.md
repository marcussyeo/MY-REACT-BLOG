# My React Blog

This is a README file for a React blog project. It contains information about installation, running the project locally, setting up a temporary JSON server for data storage, notes on specific React Router changes, and skills utilized in the project.

## Installation

To install and set up the project, follow these steps:

1. Ensure you have Node.js and npm installed on your system.
2. Uninstall any previous global installations of `create-react-app` to ensure you have the latest version:

   ```
   npm uninstall -g create-react-app
   ```

3. Install the latest version of `create-react-app` and create a new React project named `React_js`:

   ```
   npm install create-react-app && create-react-app React_js
   ```

4. Navigate into the project directory:

   ```
   cd React_js
   ```

5. Install project dependencies:

   ```bash
   npm install
   ```

   When developers commit their code onto github, sometimes they leave out the node_modules package due to it's large package size. To reinstall the node_modules again, you can run the code above.

## Running Locally

To run the application locally, execute the following command in the project directory:

```
npm run start
```

## Setting Up Temporary JSON Server

1. Make sure you have json-server installed globally. If not, you can install it using npm:

```
npm install -g json-server
```

2. Start the JSON server by running the following command in the terminal:

```
npx json-server --watch data/db.json --port 8000
```

This will start a JSON server using the db.json file located in the data directory and running on port 8000 by default.

## Notes

Here are some important notes regarding specific aspects of the project:

- In react-router-dom v6, "Switch" is replaced by routes "Routes"
- In react-router-dom v6 "useHistory()" is replaced by "useNavigate"()

## Skills Utilized In This Project

The following skills were utilized in this project:

- Components and Props
- Dynamic Values
- Styling Components
- State Management (useState & useEffect hooks)
- JSON Server
- Data Fetching
- React Router
- Custom Hooks
- Working with API Endpoints (POST, GET, DELETE)
