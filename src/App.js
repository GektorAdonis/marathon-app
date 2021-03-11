import React from 'react'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import backImg1 from './img/bg1.jpg'
import backImg2 from './img/bg2.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
      title="This is title"
      descr="This is Description!" 
      />
      <Layout
        title="This is title"
        descr="This is Description!" 
        urlBg={backImg1}
      />
      <Layout 
        title="This is title"
        descr="This is Description!"
        colorBg="red" />
      <Layout 
        title="This is title"
        descr="This is Description!" 
        urlBg={backImg2}/>
      <Footer />
    </div>
  );
}

export default App;
