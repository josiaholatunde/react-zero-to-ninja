# react-zero-to-ninja

 A higher-order component is a react component( a function component that returns a class) that takes a component alongside data as arguments and returns a modified component.  The higher order component modifies the passed component by accepting the passed component, in this case the Todo component as an argument. I
 It helps for reusing a component logic and also state/props manipulation. The render method of the higher order component returns the component while passing the HOC state as props to wherever the component is been used.


 
 In this project for example in which we are adding and displaying a list of Todos. If for example, we decide to extend the features of the app to display a list of users, or goods/stock subsequently the higher order component helps us to achieve this by passing the user component or Todo component as an argument to the higher order component. This is done in the App.js file This helps us to further extend the functionality of the component. A modified component is then returned which is then rendered in our App component.


