import React, {useContext} from 'react';
import {LightDarkContext, LightDarkContextProvider} from './components/LightDarkContext/LightDarkContext.js';
import './App.css';
import {ContentPage} from './components/ContentPage/ContentPage.js';

const sampleObjects = [
  {
    title: "Sample Page",
    image: "http://www.freeportct.com/wp-content/uploads/2019/02/Computer.jpeg",
    altText: "Computer Image",
    content: "This is a test content block."
  }, 
  {
    title: "Sample Page",
    image: "http://www.freeportct.com/wp-content/uploads/2019/02/Computer.jpeg",
    altText: "Computer Image",
    content: "This is a test content block."
  }
];

function App() {

  return (
    <LightDarkContextProvider className="App" mode="light">
      <div className="App">
        <h1>Hello World!</h1>
        {
          sampleObjects.map(function(sampleObject) {
            return (
              <ContentPage 
                title={sampleObject.title}
                image={sampleObject.image}
                content={sampleObject.content}
              />
            );
          })
        }
      </div>
      
    </LightDarkContextProvider> 
  );
}

export default App;
