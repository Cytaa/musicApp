# What do you need to run it?

- install npm(bundled with node.js https://nodejs.org/en/)
- install yarn via npm : `npm install --global yarn `

# How u can run it?

- clone it into your desired destination `git clone https://github.com/Cytaa/musicApp.git`
- navigate to musicApp/src/api folder
  - create secret.json file
  - insert `{"key":"yourUltraSecretKey"} ` into that file and save
  - create free account on https://rapidapi.com/ and generete your api key
  - replace `yourUltraSecretKey` with your unique key
- open powershell/bash
- run following commend `yarn` it will download all necessery dependencies
- run `yarn start` to run application, app will start on http://localhost:3000/
