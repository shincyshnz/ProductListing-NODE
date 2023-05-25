# Product Listing App

A product listing app built with React and NodeJs.

## Installation Guide

### Client side

```
npm create vite@latest Client
cd Client
npm install
npm install axios
npm run dev
```

### Server side

```
npm init
npm install nodemon -D
npm install express
npm install cors
```

- Install NodeJs
- Install npm: `npm init`
- Install Nodemon:`npm install nodemon -D`
- Install Express:`npm install express`
- Install Cors:`npm install cors`
- Go to `package.json` and rewrite the scripts as

  ```
  "scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
  }`

  ```

- Start the server: `npm run dev`
