import React from 'react';
import Card from './components/Card';
import data from './data';
import Navbar from './components/Navbar';

function App() {

  const cardData = data.map((item) => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className='main-container'>
        {cardData}
      </div>
    </div>
  )
}

export default App