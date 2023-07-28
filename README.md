# Hobin Rood

A stock trading app similar to Robin Hood. This project was requested by Bay Valley Tech through Stanislaus County Workforce Development (SCWD).

* **HOSTED LINK TO PROJECT:** 

## Tech Stack 🚀 
* **Front End:** HTML, JavaScript, React, Sass, Redux-Toolkit, RTK-Query

* **Back End:** Node.JS, Express, MySQL

* **Hosting:** Vercel (Front End + Back End), PlanetScale (MySQL Database)

## APIs
* **Finnhub** - Stock Data and Stock History (Limit: 30 API calls/ second)
* **AlphaVantage** - Stock Ticker and Company Search (5 API requests per minute, 500 API requests per day)



## Design
&nbsp;&nbsp;&nbsp; [Figma Wireframe](https://www.figma.com/file/sGAk3EHSSUAvS31PYW7mnZ/HobinRood-(Copy)?type=design&node-id=0-1&mode=design&t=b2oKGhRaSUvREjs3-0)


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Run Locally

**Clone the project**

```bash
  git clone https://github.com/d-bergstrom/Not-Robin-Hood.git
```

**Back End Server**

```bash
  cd Not-Robin-Hood/server/
  npm install
  npm run dev
```

**Front End Client**

```bash
  cd Not-Robin-Hood/client/
  npm install
  npm run start
```

.ENV files will need to be filled in for server and client files
```bash
#API KEYS
REACT_APP_FINNHUB_API_KEY
REACT_APP_ALPHAVANTAGE_API_KEY
REACT_APP_USERS_BASE_URL

# SERVER PORT
PORT = "7700"

# Planet Scale MySQL Database API KEY
DATABASE_URL

# JWT ACCESS TOKEN
ACCESS_TOKEN_SECRET

# JWT TOKEN EXPIRES
TOKEN_EXPIRY='30s'

# REFRESH TOKEN
REFRESH_TOKEN_SECRET

# JWT REFRESH TOKEN EXPIRES
REFRESH_TOKEN_EXPIRY='1w'

# COOKIE EXPIRES
COOKIE_EXPIRY='1w'
```
