import React from 'react';
import Header from './Components/Header';
import DynamicBackground from './Components/DynamicBackground';
import PlaceholderTabs from './Components/PlaceholderTabs';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <DynamicBackground />
      <PlaceholderTabs />
      <Footer />
    </div>
  );
}

export default App;
