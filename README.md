# Cypress Playground

This is a sample project I'm putting together that allows for teaching a Cypress course.

The basic setup steps would be the following, once you have a local copy of the repository:

```
npm install
```

If creating your own project, you would do the following:

```
npm init

npm install --save-dev cypress

npx cypress open
```

The above commands are effectively how this project was created.

To open the Cypress tool itself, you can do this:

```
npm run cy:open
```

To run tests that are stored in the Cypress repository, you can do this:

```
npm run cy:run
```

I am using a directory called `e2e` for all example tests so that I can set them apart from the standard ones that Cypress provides as examples.

If you want to run the tests for the `simple_json` area, you can do the following command:

```
npm run simple:json
```
