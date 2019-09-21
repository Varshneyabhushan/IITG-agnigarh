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
Start and push the process to the background so that, it runs even when the terminal is closed.
```
npm run bg
```
And then, if we want to see the number of times it reconnected or to see the process id in case of killing it, run the following command to check the logs
```
tail -f output.log
```
