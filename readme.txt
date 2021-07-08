npm init

para instalar apenas no projeto
npm i json-server

para instalar globalmente
npm install -g json server

deixe o pakcage.json assim 
{
    "name": "backend",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "json-server --watch db.json"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "json-server": "^0.16.3"
    }
}

json-server --watch db.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  comando para iniciar npm start