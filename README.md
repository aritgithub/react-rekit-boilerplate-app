:globe_with_meridians: This is a Rekit (2.3.3) boilerplate application project with a correct configuration of the Redux-Saga middleware and other improvements.

Rekit is a toolkit for building scalable web applications with React, Redux and React-Router; it's an all-in-one solution for creating modern React apps.

Install dependencies:
```
npm install
# or
yarn install
```

Start application:
```
npm start
# or
yarn start
```

It then starts two express servers by default:

 1. Webpack Dev Server: [http://localhost:6075](http://localhost:6075); just what create-react-app starts.
 2. Rekit Studio: [http://localhost:6076](http://localhost:6076); the IDE for Rekit projects.

To change the ports dev-servers running on, edit the `rekit` section in `package.json`:
```
{
  ...
  "rekit": {
    "devPort": 6075,
    "studioPort": 6076,
    ...
  }
  ...
}
```

More details on [Rekit official page](https://rekit.js.org).
