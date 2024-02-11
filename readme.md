# <div style="text-align: center; color: #E3651D;" markdown="1">Episode wise React JS HandWritten / HandTyped Notes</div>

#### <div style="text-align: center; color: #008170;" markdown="1">⬇️(Scroll Down to reach your required episode)⬇️</div>

---

## Episode: 2 (Igniting Our App)

### Steps to create a react app from scratch:

1. Initialising npm using command : `npm init`
2. Installing a Web Application Bundler (ex. Parcel) : `npm install -D parcel`
3. Building our app using Parcel: `npx parcel index.html`
   _Here source file of our project is index.html_
4. Now we will install React as a package to our code base: `npm install react`
5. Similarly now we'll install react-dom as well: `npm install react-dom`
6. Import react and react-dom in the App.js file, also the add type="module" attribute to the script tag which is used to import App.js in the index.html file and finally bundle the project using the command : `npx parcel index.html`
7. Command to create Devlopment Build: `npx parcel index.html`
   _The development buil is get stored in the 'dist' directory._
8. Command to create Production Build: `npx parcel build index.html`
9. Configuring BrowsersList inside package.json file.
10. Finally, we have build our own React App from scratch.

### What is npm?

1. It does not stands for Node Package Manger, actually npm does not have any full form.
2. It BTS manages packages (i.e. node packages).
3. It's a standard repositary for all the packages.
4. When creae a react-app using command `npx create-react-app appName`, it already contains npm in it.
5. It's one of the biggest package manager.

### What is npx?

It's using to wrote commands that executes node packages

### What is package.json and how its different from the package-lock.json file:

1. It's a configuration file for npm.
2. It keeps track of versions of all the npm packages installed in our project, but in case some packages get updated, then those version changes can not reflected insdie package.json file. Thats why we have package-lock.json file which tracks and locks the extact package version, and it keeps on updating the version values as the package's get updated.
3. package.json only stores the information of packages that you have manually installed for your project.
4. package-lock.json stores the information of packages that you have manually installed for your project as well as the information of their transitive dependencies/packages.

### Why we don't push node_modules to the github or production react application?

It's because if we have package-lock.json and package.json file with us then we can recreate all the node_modules mentioned in inside those file using the command : `npm install`

### ~ v/s ^ versions:

Let's say if there any type of update comes to a installed package then:

1. `~` (Tilde) : installs latest major update version of that package.
2. `^` (Caret): installs latest minor update version of that package.

NOTE: It's always safer to use the ^ versions over ~ versions.

### What is a Bundler:

1. It's job is to `bundle/package/optimise` your react app so that it can be shift to production.
2. It's one of the most important package in our project.
3. Webpack, Parcel, Vite are examples of Bundlers.
4. When we do `create-react-app`, it basically uses webpack bundler BTS.
5. Code Bundling is done in the development phase not in the production phaees, that's why we will install 'parcel' as a dev dependencies using -D flag.
6. Command to install a Bundler: `npm install -D parcel`

### What does Parcel Bundler do to your React project:

1. It bundles the your react code base and creates a Dev-Build for you.
2. It creates a local server that keeps running at : http://localhost:1234/
3. It's using HMR(Hot Module Replacement) to continously refreshes the page
4. It uses a File Watching Algorithm to track the changes in the files and this algorithm is written in C++
5. It gives you faster builds because its Caching things up.
6. Parcel also does Image Optimisation of images in your project.
7. It also do Minification and Compression of your files.
8. It also does Content Hashing of every code update.
9. It does Code Splitting.
10. It does Differential Bundling - To make your web app supported by other and olders browsers.
11. It does Diagnostics of your app bts.
12. It does Error handling.
13. It allows us to test our project on both HTTP and HTTPs.
14. It does Tree Shaking : Removes unused/dead code.
15. It transpiles the code for us.
16. It has different Development and Production Builds or Bundles.

### Different types of Packages/Dependencies?

Types in which we can divide our installed dependencies are:

1. Dev Dependencies : They are generally required in the development phase.
2. Non-Dev or Normal Dependencies : These dependencies are used in production as well as development phase.

### What are Transitive Dependencies in npm?

Transitive dependency is one not imported directly into the project at hand, but instead imported by a direct dependency or another transitive dependeny.

### Why using React by import it via CDN is bad?

It's bad because:

1. Fetching from a CDN is a costly operation.
2. If you already have node_modules inside of our code base then it will way more easier to use React even without an internet connection.

### What is the use of BrowsersList?

1. Its a npm package.
2. Its used to make our app compatible to other/older browsers.
3. In order to tell BrowsersList to which browsers we want to make our project compatible with, we need to configure it.

```
"browserslist" : [
    "last 2 version",
    "cover 50% in US",
    "last 2 firefox version",
]
```

---

## Episode: 3 (Laying the Foundation)

### Steps to create a react app from scratch:

11. Configuring "script" inside the package.json file.

### Adding customised Script for different operations?

inside package.json, add this:

```
"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html",
"test": "jest"
},
```

Now your can run scripts like:
a. `npm run start` or `npm start`
b. `npm run build`

### What and why JSX (JavaScript XML)?

1. It's a syntax extension to JavaScript.
2. It's makes the traditional way of creating React Elements, way more easy and intuit.
3. React is different and JSX is different. We can write react applications without using JSX.
4. JSX is not HTML in JS, but its has HTML or XML like syntax to it.
5. If we have to give an Attribute to a tag, then we have to name them in Camel Case(like: className, tabIndex, etc.).
6. JSX can prevent Cross-Site Scripting(XSS) Attack.

### What is Babel? What does Babel do?

1. Babel is a JS compiler or transpiler.
2. It converts JSX into the react code that browser/JS enginer/react undersands.
3. It can convert ES6 JS to older version of JS so that older/other browsers can undersand.
4. It's another important package after Parcel in our react app.

### What are Components?

Components are independent and reusable bits of code.
React Functional Components are simple JS functions with 'PascalCase' naming convention that returns a JSX.

### Type of Components?

Components are of two types:

1. Class Based Components (OLD)
2. Functional Components (NEW)

### What are Functional Components?

1. React Functional Components are simple JS functions that returns a JSX.
2. Since JSX is a react element. Therefore, JS Functions that returns a react element is called a Functional Component.
3. Naming convention : PascalCase

### What is Component Compositions?

1. It's basically nesting of one component inside another component.
2. In JSX we can put:
   a. Component inside Component
   b. Component inside React Element
   c. React Element inside React Element
   d. React Element inside Component

### What does .render({}) do?

1. `.render({})` takes Object that can be a:
   a. 'React Element' as a 'Variable' or
   b. 'React Component' as a 'Tag'
2. It replaces the content inside the "root" element with the React Component which it takes as an argument.

---

## Episode: 4 (Talk is Cheap, Show me the Code)

### Planning of our React App.

Before we go into the code and building our app part, we need to do the planning of our app.

Planning Includes steps given below:

1. Design a wireframe/UI (go to: ./Episode/wireframe.png)
2. Low level planning, it includes:
   a. Think of components your app will going to have like:

```
  <Header/>
    -<Logo/>
    -<NavItems/>
  <Body/>
    -<Search/>
    -<RestaurantContainer/>
      --<RestaurantCard/>
  <Footer/>
    -<Copyright/>
    -<Links/>
    -<Address/>
    -<Contact/>
```

### What are Props?

1. These are the objects where the value of attributes of a tag is stored.
2. "props" stands for "Properties".
3. Passign "props" to a component, is similar to passing arguments to a function.
4. Whenever we have to pass in data to a particular component we pass it as a "prop"

### What is Config Driven UI?

Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components.

### What is Optional Chaining Operator(?.)?

Let's say we have an object person:

```
    const person = {
        firstName: "Bhupi",
        Age: 21,
        // vehicle: { // when this is 'present' v/s 'not present'
        //     car : "Lambo"
        // }
    }

// alternate of optional chaining (using ?:):
const vehicleCar1 = person.vehicle ? person.vehicle.car : undefined

// Optional chaining (using ?.):
const vehicleCar2 = person.vehicle?.car

/* Optional Chaining: It says if person.vehicle is present than return person.vehicle.car else it will return 'undefined' (which is default behaviour of JS) */

console.log(person.vehicleCar) // undefined
console.log(vehicleCar1)
console.log(vehicleCar2)
```

### Why should we use the "key" attribute everytime we use a loop to iterate over an iterator in ReactJS?

1. In ReactJS, when you're iterating over an array and rendering components based on its elements, it's important to include a "key" attribute for each rendered component.
2. The "key" attribute serves as a unique identifier for each component in the list. React uses this identifier to efficiently update the virtual DOM and determine which components need to be added, removed, or updated when the underlying data changes.
3. We generally give 'unique values or IDs' to the 'key attribute'.
4. When using `.map()`, `.filter()`, `.reduce()` or `.forEach()` we can use 'index' as a 'key'
5. Since using "key" attributes in big projects can led to inconsistency, thats why we got useId() hook in React.

###

---

## Episode: 5 (Let's get Hooked)

### Types of import/export?

1. Default Import/Export:
   a) Default Exporting:

   ```
     export default VarName;
   ```

   b) Default Importing:

   ```
     import VarName from "./path";
   ```

2. Named Import/Export:
   a) Named Exporting:
   ```
     export {VarName1, VarName2};
     // or
     export const VarName1={};
     export const VarName2={};
   ```
   b) Named Importing:
   ```
     import {VarName1, VarName2} from "./path";
   ```

NOTE: If we use Default and Named export at the same time in a file(i.e. fileA), then in the file where we are importing(i.e. fileB), we can do import either using 'Default or Named Import'.

## <div style="text-align: center; color: #E3651D; font-style: italic;" markdown="1">-: React Hooks :-</div>

### What are React Hooks?

1. BTS React Hooks are normal JavaScript Utility functions written by Facebook developer and it let you "hook into" React.
2. Two most used React Hooks are:
   a) UseState()
   b) UseEffect()

### props v/s state?

1. Props:
   a. Props is the piece of that data in the form of objects that we pass from parent to child component.
   b. We can't pass props from child to parent in React.

2. State:
   a. It's something(i.e. data) that changes with time, due to the user interaction with the app.
   b. When a there is a state change inside a component, the React rerenders that component with the updated state.
   c. Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!

### How useState() Hook works?

1. Local State Variable(Super Powerful Variable provide by ReactJS):
   a. It maintains the state of a component.
   b. Its scope is inside of the component inside which it is declared.
2. Whenever a state variable changes/updates, the React re-renders the component.
3. Syntax:

```
    const [state, setState] = useState('initialState');
    // Here useState() returns a regular Array.
```

4. Always call/create hooks inside the body of the component aka the function body, because its used for creating local state variables inside your functional component.

5. Try to call/create these hooks on the top, means it should be in the top of function body. Sot that we don't have a lot of inconsistancy in our code, because javascript is a synchronous single-threaded language due to this the code will run line by line.

6. Never create useState hooks inside if-else statements, loops, inner function of a function component.

7. Never update state variable directly just like a regular variable. Always use a `.setState("#")` method to update the state variable in a Functional Components or `this.setState({state: "#"})` in Class Components.

\***\*Learn all about implementation of state in React** 👉 [Click Here](https://react.dev/learn/thinking-in-react)

### How React uses Reconciliation Algorithm(aka Diffing Algorithm)?

1. The reconciliation algorithm, often referred to as the diffing algorithm, is responsible for comparing the previous virtual DOM with the new one and determining the most efficient way to update the actual DOM. React aims to make this process as optimized as possible to ensure that UI updates are fast and seamless.
2. Reconciliation is the process by which React determines what changes need to be made to the UI based on changes to the application state.
3. The Diff Algorithm find out the difference between updated v/s previous version of DOM.
4. Whenever a state variables updates, react triggers a reconciliation cycle(re-renders the conponents).

### What is Virtual DOM?

1. It's an representation of actual DOM.
2. At the end of the day its a JavaScript Object representation of actual DOM.
3. Whenever there is any change in the state variable, react will find out the difference between virtual DOM and then update DOM and re-render the component

### What is React-Fiber?

1. React 16 is the first version of React built on top of a new core architecture, codenamed “Fiber.”
2. React Fiber is a completely backward-compatible rewrite of the old reconciler. This new reconciliation algorithm from React is called Fiber Reconciler. The name comes from fiber, which it uses to represent the node of the DOM tree.
3. At a high level, the Fiber architecture is a new way of reconciling the virtual DOM in React.

### What is Single Responsibility Principle?

It says ,a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

It makes the codebase:

1. Reusable
2. Maintainable
3. Testable

### Approach to build a static React app?

1. Top-Down Approach:
   a. We start building the components from top of the hierarchy to the bottom of the tree.
   b. Generally used for small projects

2. Bottom-Up Approach:
   We start building the components from bottom of the hierarchy to up in the tree.
   b. Generally used for big projects.

### What is One-Way Data Flow?

It's when the data either flows down from the top-level component to the ones at the bottom of the tree or vice-versa.

---

## Episode: 6 (Exploring the world)

### Monolithic v/s Micro-Service Architecture?

### Separation of concerns ?

Seperation of concerns a principle used in programming to separate an application into units, with minimal overlapping between the functions of the individual units.

### Two ways to fetch data from an API ?

Way-1: Less used (Not so good UX)
[App loads] ---> [API Call(lets say it took 500ms to lead)] ---> [Render data on the UI]

Way-2: **Most used method in ReactJS (Better UX)**
[App loads] ---> [Render base UI Skeleton] ---> [API Call] --> [Render the data on the UI]

### How useEffect Hook work?

1. The useEffect statements runs by default after every render of the component.
2. The useEffect statements is executed whenever one of the state variables changes.
3. The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
4. If there is not dependency array, that means useEffect will be called on every component has rendered
5. Syntax With v/s without dependency array:
   a. Syntax without dependecy array:
   ```
     useEffect(()->{})
   ```
   b. Syntax with dependecy array:
   ```
     useEffect(()->{}, [])
   ```
6. The useEffect function runs after the component has rendered and every time one of the dependencies in the array has changed since the last render. It does not directly get called on every re-render of the component itself; rather, it responds to changes in the specified dependencies.
7. Hook can be to execute some code when particular props, states, DOM tree get updated or specific components is rerendered:

### What are CORS(Cross-Origin Resource sharing) policies? What happend when CORS are enabled?

1. CORS is an extension of the same-origin policy. You need it for authorized resource sharing with external third parties. For example, you need CORS when you want to pull data from external APIs that are public or authorized.
2. When we try to access an API which origin is Swiggy(eternal origin/source) from our Localhost origin and if CORS is disabled in the browser then we won't be able to access that API because in this case API can only be called from it original()

### What is an API?

1. API(Application Programming Interface) is a way for two or more 1) computer programs to communicate or share resources with each otehr with each other.

2. Endpoints: Endpoints are the locations of the resources.

3. API Endpoint : It's basically the URL to the resources

### Using async/await function to fetch data from the API?

```
const fetchData = async () => {
  const data = await fetch('APIEndpointURL'); // fetching data and returns a promise
  const dataJSON = await data.json(); // formating the promise into JSON
  console.log(dataJSON); // print the fetch data into the JSON format
}
```

### What is the concept of Shimmer UI and Conditional Rendering?

Shimmer UI:-
A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.

Conditional Rendering:-
Rendering based on certain condition.

---

## Episode: 7 (Finding the Path)

### What is React-Router-DOM?

1. It's a Javascript Library for React use to route, add path to different pages of React app.
2. It's mostly imported and used in the App.js file of a React App.

### useRouteError() Hook?

1. There can be many different reasons for which the requested page can not accessed. So in order to read that reason(message) and show users the specific detail to the user.
2. We get this useRouteError Hook with the React-Router-DOM Package.

### Two types of Routing in Web Apps?

1. Client Side Routing
2. Server Side Routing

### Two types of Rendering Techniques?

1. Client Side Rendering
2. Server Side Rendering

### What is Dynamic Routing?

Dynamic routing refers to the process of generating and navigating to different pages or views in a web application based on parameters or variables, often extracted from the URL, allowing for more flexible and personalized user experiences.

### What is the use of useParams() Hook?

The useParams hook in React is used to access and extract parameters from the URL in a route defined by React Router. It allows components to dynamically respond to changes in the URL parameters and retrieve values for further use within the component.

---

## Episode: 8 (Let's get Classy)

### Lifecycle phases of a Class-Based component?

Lifecycle phases of clas based componenets are:

1. **Mounting**:

   a. `constructor()`: Initializing state and binding methods.

   b. `static getDerivedStateFromProps()`: Rarely used, but it allows the component to update its state based on changes in props.

   c. `render()`: Determines the component's UI.

   d. `componentDidMount()`: Invoked after the component is inserted into the DOM. It's often used for tasks such as fetching data from an API. In functional component we achieve same effect using 'useEffect' Hook.

2. **Updating**:

   a. `static getDerivedStateFromProps()`: Similar to the mounting phase, used to update state based on changes in props.

   b. `shouldComponentUpdate()`: Decides whether the component should re-render or not. It's a performance optimization method.

   c. `render()`: Re-renders the component with updated state or props.

   d. `getSnapshotBeforeUpdate()`: Captures information from the DOM before it is potentially changed.

   e. `componentDidUpdate()`: Invoked after the component is updated in the DOM.

3. **Unmounting**:

   a. `componentWillUnmount()`: Invoked just before a component is unmounted and destroyed. It's used for cleanup tasks.

4. **Error Handling**:

   a. `static getDerivedStateFromError()`: Used to update state when an error occurs in a descendant component.

   b. `componentDidCatch()`: Invoked after an error has been thrown in a descendant component.

\***\*React Lifecycle method Diagram** 👉 [Click Here](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### When to use componentDidMount(){} lifecycle method?

1.  There are some things/process that we want to do inside a component after it has been fully mounted.
2.  This lifecycle method is called after a component has been rendered to the DOM for the first time.
3.  We use `componentDidMount()` to do API calls(Fetch Data).

### Mounting v/s Rendering?

1. The mounting process of a class componenet starts before its rendering proces get started.
2. The mounting process of a class componenet ends after its rendering process ends.
3. The mounting process of a child class componenet get completed after its rendering in the parent component get completed.

### How state variable are intialized and updated in a class component?

- Syntax to Initialize state variable in class component:

  1. State variable are declared inside the `constructor()` function of a class component:

  ```
  constructor(props){
    super(props)

    this.state = {
      stateVar: 'Initial Value'
    }
  }
  ```

- Syntax to update or set state variable in class component:

  1. State variable are declared inside the `constructor()` function of a class component:

  ```
    this.setState({
      stateVar: 'Updated_value'
    })
  ```

### How to make API calls inside componentDidMount?

A) Method - 1:

```
  componentDidMount() {
    fetchData();
  }

  const fetchData = async() => {
    const fetchDataAPI = await fetch('API_LINK');
    const fetchDataJSON = await fetchDataAPI.json();

    this.setState({})
  }
```

B) Method - 2:

```
  async componentDidMount() {
    const fetchDataAPI = await fetch('API_LINK');
    const fetchDataJSON = await fetchDataAPI.json();

    this.setState({})
  }
```

### How componentDidUpdate(){} lifecycle method works ?

1. This lifecycle method get executed when the component updates and rerenders.
2. This method is called both after the initial rendering and after subsequent updates caused by changes to either the component's state or props.
3. `componentDidUpdate()` lifecycle method is used to executed some code when particular props, states, DOM tree get updated or specific components is rerendered:

### How componentWillUnmount() lifecycle method works ?

The `componentWillUnmount()` lifecycle method is called just before a component is unmounted and removed from the DOM.

### Some Javascript important methods:

1. `setTimeout(func, delay, param1, param2...)`
2. `clearTimeout(timerId)`
3. `setInterval(func, delay, param1, param2...)`
4. `clearInterval(intervalId)`

---

## Episode: 9 (Optimising Our App)

### How 4 pillars Object Oriented Programming(OOP) principles are implemented/used in ReactJS?

The 4 pillars of OOPs are:

**1. Abstraction:**

1. Process of hiding complex implementation details and exposing only the essential features of an object or system, facilitating easier understanding and use.

2. Abstraction Implementation (React Hooks):
   React hooks, such as useState and useEffect, provide a level of abstraction that allows developers to encapsulate and manage stateful logic in functional components.
   So YES, React hooks can be a good example of implementing the Abstraction principle of Object-Oriented Programming (OOP).

**2. Encapsulation:**

1. Bundling data (attributes) and methods (functions) that operate on the data into a single unit (class) to restrict access and hide implementation details.

2. Encapsulation Implementation (React State Variables):
   By encapsulating component data and logic within the component itself, React state variables adhere to the Encapsulation principle of OOP.

**3. Inheritance:**

1. Mechanism where a class (subclass) can inherit properties and behaviors (methods) from another class (superclass), promoting code reuse and specialization.

2. Inheritance Implementation (React Class Components):
   In React, class components can leverage inheritance through the use of JavaScript's class-based inheritance model.

**4. Polymorphism:**

1. Ability of objects to take on multiple forms, allowing methods to behave differently based on the object's type or class hierarchy.

2. Polymorphism Implementation (Reusablity of React Components):

Polymorphism can be achieved using:

1. Method Overloading (aka Compile-time or Static Polymorphism):
2. Method Overriding (aka Run-time or Dynamic Polymorphism):

---

## Episode: 12 Lets Build our store?

### What is Redux?

1) Redux is an open-source Javascript library, which is used for state management in an a.

2) Redux stores the entire state of the application in a single immutable object called the "store" or "Redux-store" and state changes are managed through actions and reducers.

3) **Actions** describe what happened, and **reducers** specify how the state should change in response to those actions. This unidirectional flow of data makes it easier to understand and manage the application's state.

4) React (works on UI Layer), while
5) Redux (works on Data Layer)

### Redux Libraries and their usecase?

1. React-Redux:
   Bridges the gap between React and Redux, enabling seamless integration between the two.
   It allows React components to interact with the Redux store, subscribing to changes in the state and dispatching actions.

2. Redux-Toolkit:
   Redux Toolkit streamlines the process of working with Redux by reducing boilerplate code

### Redux Store?

1. It's a large object of all the state of our application. And It's kept in a centeral global centeral place
2. Any React component can directly access it.
3. When we store huge amount of data in redux-store, and it becomes clumsy then we have **slices** in our code.

### What is a slice?

1. **Slice/s** : Its a small portion of react-store.
2. We make different slices in a react-store for different type of data: like 'User profile Information' will have a 'User slice', 'cart information' will have a 'cart slice'.
3. We can't modify a slice directly.
   Lets say we want to create a **'Add to cart'** feature, and we want to update the items in the cart.

   The **WRITE** process:

   1. When you **click on the 'Add Button'**, it **'Dispatches'** an **'Action'**
   2. This **Action call a funtions** and **this function(aka Reducer) will actually modifies the cart slice**.

   The **READ** process:

   1. We use **Selector** to make the component subscribed to a slice in the store.
   2. When the data in the slice update, the respective component gets rerendered.
   3. **Selector** makes the **component in sync with the store**

### Steps to Build our Store?

1. Install React-Redux and Redux-Toolkit: `npm install @reduxjs/toolkit` && `npm install react-redux`
2. Build our own store.
3. **Bridging**: Connect our store to our app, using <Provider> wrapper from 'react-redux'.
4. Create a Slice(cartSlice)
5. Add Slice to the store
6. Dispatch(action)
7. Read the data using **Selector**

### What is a Reducer Function?
In Redux, a reducer is a named function responsible for specifying how the application's state changes in response to dispatched actions. The reducer function takes the current state and an action as arguments and returns the new state.