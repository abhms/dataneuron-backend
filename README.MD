
# Data Neuron Task Backend

This project is build using Node.js ,I am using Mognodb database and Delopyed the APIs on Render.

## Local Setup
```bash
Clone : git clone https://github.com/abhms/dataneuron-backend.git
Install dependencies : npm install
Run : npm start
```
## Environment  Setup

Create a .env file and write API url like mentioned in `.env.example` ,create Mognodb data and use URL for connecting with that database 
```bash
PORT=
MONGODB_URI=
```
## API Explanation

```bash
Getting all Data from Database
For getting all data : /allData , Method GET

Adding Data in components

For adding data in component1 : /component1 ,Method POST
For adding data in component2 : /component2 ,Method POST
For adding data in component3 : /component3 ,Method POST

Updating Data of components

For updating data in component1 : /updateComp1 ,Method POST
For updating data in component2 : /updateComp2 ,Method POST
For updating data in component3 : /updateComp3 ,Method POST

```
