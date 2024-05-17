
Using React components inside a meteor package in a meteor 3 project will result in a React warning about multiple instances of React in the same app. It's a regression since it works fine with meteor 2.

# How to reproduce

* clone this repo

# Test with meteor 2 (working as expected)

* open a terminal and run the following commands:

```bash
./bin/run2
```

* open a browser and go to `http://localhost:3000/`

* you should see a grey line where you can click and enter some text

* open the developer console and you should see nothing

# Test with meteor 3 (not working)

* open a terminal and run the following commands:

```bash
./bin/run3
```

* open a browser and go to `http://localhost:3000/`

* you should not see the grey line

* open the developer console and you should see the following output:

```
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```

You'll see that there's 2 instances of `react-dom` in the projet if you run the following command:

```bash
❯ find . -name react-dom
./.meteor/local/isopacks/sakod_core/npm/node_modules/react-dom
./.meteor/local/build/programs/server/npm/node_modules/meteor/sakod_core/node_modules/react-dom
./.meteor/local/build/programs/server/npm/node_modules/react-dom

--> ./node_modules/react-dom
--> ./packages/sakod-core/.npm/package/node_modules/react-dom
````

One in the `node_modules` and one in the meteor package and it explains the React warning (You might have more than one copy of React in the same app).

Doing the same test with meteor 2 will work as expected and `find . -name react-dom` will only return the `node_modules` instance.

I really have no idea why this is happening, is it a changes in the meteor building system or in npm?
