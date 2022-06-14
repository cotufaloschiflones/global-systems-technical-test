# global-systems

## Considerations
I recommend you in order to execute the code challenge to use NVM, and in this specific case, you should use **node 16.0.0** (which is I've used). Is important to update your node version before to proceed with the installation step.

I've coded a very self explained code and I didn't use comments, that is because I believe that good and simple code no have needs to comments. I used to write comments only for TODOs or REFACTOR.

I've used babel to allow me enable features like optional chaining, very handy and producing really clean code.

I've used **Vuetify** as bootstrapping library for a matter of time, I'm pretty busy this days and to show as well how I work with a reliable bootstraping open source system. I made for example (besides a common use of v-application, v-main and base vuetify content components) a component based on vuetify, AppCheckbox, to use it as an input checkbox for the whole app.

I keep almost all the code base from .css file that I received. Some of the code wasn't necessary after all. 

Also, let me say that I have made changes on the UI but I will explain my arguments.

Another important thing to keep in mind is that I have used a very personal configuration of **eslint**, you can check it in the file **.eslintrc.js**.


### Functional requirements
##### 1.1. Empty todos. 
I have changed the UI to always show the footer because I beleive that the navigation (all, active and completed) must be always present, for example, if you have only completed todos and you navigates to /completed if you clear all the completed tasks, you will loose the footer and you will not be able to navigate from completed to all todos again, and honestly I like more this solution than make a redirection for instance.

##### 1.2. New todo
As required in the chalenge

##### 1.3 Mark all as completed
I dind't understand the behaviour under the "Mark all as completed" with the explanation/screenshots provided in the code challenge, so I turned into a checkbox with 3 possible states (true, false, indeterminate) allowing you to change between states in a clear way. I relocate this feature too, between the footer and the todo list, because of the previous change as well, you can try and check if is cleaner like this for you. This allow me also to use this feature from any view without any weird experience.

##### 1.4 Todo Item
As required in the chalenge, I only made some adjustments on paddings and this kind of stuff.

##### 1.5 Editing todo item
As required in the challenge.

##### 1.6 Counter todos left
As required in the challenge.

##### 1.7 Clear completed button
As required in the challenge

##### 1.8 State management
As required in the challenge, I have used **Vuex**.

##### 1.9 Routing
As required in the challenge. I have used **vue-router**.

##### 1.10 API Rest Services (Optional)
As required in the challenge. I have used **json-server** and **axios**, you will find a folder called services, there you will see a very handy Service class with the basic CRUD structure to create new services without code duplication and the todoService where you can check how easy you can extend  that class and create new methods also if necessary.

## Project setup
```
npm install
```

## Serving the project
As we are using a mock server the first thing you should run is:
```
npm run api
```

This command serves a mocked api in localhost:3000, then you should run:
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
