# Contacts Frontend (AngularJS)
a sample AngularJS frontend app for contact management, uses
the contacts-api (https://github.com/mrscholty/contacts-api) as backend 

## live demo
http://lab.mrscholty.com/contacts-frontend-angularjs

## prerequisites
* **bower** is required for installing the frontend dependencies `npm install -g bower`
* **gulp** is required for the build process `npm install -g gulp` 
* **live-server** is required to start the app `npm install -g live-server` 
* the app assumes the contacts-api to be running at `http://localhost:3000`

## running the application
- switch to angularjs-starter directory `cd contacts-frontend-angularjs`
- install the frontend dependencies `bower install`
- install the dev dependencies `npm install` 
- launch the app `npm start` (will open http://localhost:8080 in browser)
- build the app (for production) `npm run build`
