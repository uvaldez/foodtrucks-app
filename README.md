# foodtrucks-app

## Getting Started

Let's discover **Food Trucks San Francisco APP**.

## Demo

To run the app on the cloud you just visit the following url: [foodtrucks-app](https://foodtrucks-app.onrender.com)

## Running the APP local

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

**Start with the API**

Clone [API repo](https://github.com/uvaldez/foodtrucks-api) from github, use the following command:

```bash
git clone https://github.com/uvaldez/foodtrucks-api.git foodtrucks-api
```

Move to `foodtrucks-api` directory
```bash
cd foodtrucks-api
```

Install dependencies
```bash
npm install
```

Run project
```bash
node app.js
```
API should be running on http://localhost:8080/

**Clone frontend APP**

Clone frontend [app repo](https://github.com/uvaldez/foodtrucks-app) from github, use the following command:

```bash
git clone https://github.com/uvaldez/foodtrucks-app.git foodtrucks-app
```

Move to `foodtrucks-app` directory
```bash
cd foodtrucks-app
```

Install dependencies
```bash
npm install
```

*Important:* By default the app will be making requests to the [cloud endpoint](https://foodtrucks-api-04qa.onrender.com) to change the base url navigate to `src/constants.js` file and replace `FOOD_TRUCKS_BASE_URL` with local API url http://localhost:8080/

Run project
```bash
npm start
```

APP should be running on http://localhost:3000/
