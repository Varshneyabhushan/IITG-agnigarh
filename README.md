# IITG-agnigarh
login to the agnigarh portal from the terminal. This is only for the people who are inside the iitg network. It does not make much difference,
but this is for those people who are looking for a different way of authentication.
## Installation
1. Clone this repository
2. Go into the folder and set your username, password, timeout value in .env file
```
USERNAME=varshneyabhushan
PASSWORD=********
TIMEOUT=200
```
Note : timeout should be specified in seconds. Refreshing is done after the specified timeout.

3. Run the following commands
```
npm install
npm start
```
## Getting more out of it
You can start and push the process to the background so that, it runs even when the terminal is closed.
