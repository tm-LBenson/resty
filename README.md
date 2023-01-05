<!-- @format -->

# Lab-29-d49

## Project: RESTy

## Problem Domain

Implement a reducer function and initial state to store and manage all application state, add the request and returned data to the history array in state after each API call, create a History component that displays the previous API calls, display the results in the Results component when a user clicks on a previous API call in the History component, use the React Testing Library framework to test the application, including mocking the API request with the msw package, and deploy the application to Netlify.

## Feature 4 Application Setup

- [ ] Refactor the state management in the App component to use the useReducer hook and replace any component state management with derived state from useReducer.
- [ ] Implement a reducer function and initial state to store and manage all application state.
- [ ] Add the request and returned data to the history array in state after each API call.
- [ ] Create a History component that iterates over the history array in state and displays the previous API calls.
- [ ] Display the results in the Results component when a user clicks on a previous API call in the History component.
- [ ] Use the React Testing Library framework to test the application, including mocking the API request with the msw package.
- [ ] Deploy the application to Netlify

## Deployed

[Link to Netlify](https://wondrous-brioche-c3fbac.netlify.app)

## Dataflow

![image](https://user-images.githubusercontent.com/105423307/210675199-3788d36c-fe53-4cdc-9f35-6f823fc50e6f.png)

---

## Lab-28-d49

## Project: RESTy

## Problem Domain

`<App />` has an effect hook that's looking for changes to the request variable in state, and in response, runs the API request with the new request options from state.

## Feature 3 Application Setup

- [x] Add useEffect to App
- [x] write tests for each component
- [x] Add new styling to application
- [x] Set up dynamic API call using fetch
- [x] Testing

## Deployed

[Link to Netlify](https://28resty-d49.netlify.app)

## Dataflow

![image](https://user-images.githubusercontent.com/105423307/210675199-3788d36c-fe53-4cdc-9f35-6f823fc50e6f.png)

---

## Lab-27-d49

## Project: RESTy

## Problem Domain

Creating an application to perform RESTful actions based on a users choice. The application will be build in TDD style, and use scss for styling.

## Feature 2 Application Setup

- [x] Turn App into class component
- [x] write tests for each component
- [x] Turn state into useState hook
- [x] Set up API call using fetch
- [x] Testing

## Deployed

[Link to Netlify](https://resty-d49.netlify.app/)

## Dataflow

![image](https://user-images.githubusercontent.com/105423307/210473276-5ee55ea7-d47a-4ab3-b1b8-478f4f2e57bf.png)

---

## Lab-26-d49

## Resty

## Deployed

[Link to Netlify](https://tiny-malabi-b65515.netlify.app)

## Dataflow

![dataflow UML](https://user-images.githubusercontent.com/105423307/210279444-4703151f-9add-4cf9-916e-79a2bcc1643d.png)

## Feature 1 Application Setup

- [x] Basic React Application
- [x] Scaffolding
- [x] Basic State
- [x] Rendering
- [x] Testing

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Requirements

To run the application locally:

1. clone down the repo

2. CD into the local RESTy folder thats created

3. `npm install`

4 `npm start`

### Application

To use the application, insert a URL into the form and press the `GO!` button to send an api reuqest

currently only get requests are supported

### Testing

`npm test`

Launches the test runner in the interactive watch mode.\
