import React from 'react';
import ReactDOM from 'react-dom';
const Dog = (props) => {
  return React.createElement("div", {}, [
      React.createElement('h3', {}, props.name),
      React.createElement('h3', {}, props.weight),
      React.createElement('h3', {}, props.height),

  ])
}

const App = () => {
  var arr = [1, 2, 3, 4];
  return React.createElement(
      "div",  
      {id:'website-title'},   
      [
          React.createElement(
              "h3",
              {},
              "Dog Website"
          ),
          ...[arr].map(item => React.createElement("h1", {}, item)),
          React.createElement(Dog, {
              name: "Bull Terrier",
              weight: "50.70 Kg",
              breed: "Terrier"
          },),
          React.createElement(Dog, {
              name: "PitBull",
              weight: "50.70 Kg",
              breed: "Bull"
          },),
          React.createElement(Dog, {
              name: "Puppy",
              weight: "5.70 Kg",
              breed: "husky"
          },)

      ], 
  );
};

ReactDOM.render(
  React.createElement(  
      App
      ),
  document.getElementById('root') 
  );
