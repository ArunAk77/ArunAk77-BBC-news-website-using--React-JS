import React from 'react';
import ReactDOM from 'react-dom';
import NavScroll from './components/navbar';
import ImageCarousel from './components/ImageCarousel';
import ImageCards from './components/ImageCards';
import BasicExample from './components/Accordian';
import LoadingSpinner from './components/Spinner';
import Footer from './components/Footerbot';
import Marquee from './components/Marquee';
import AlignmentExample from './components/Nav'
import Data from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const App = () => (
  <div>
    <br></br>
    <div className="container">
      <div style={{textAlign:"center"}}>
      <h1> <span style={{backgroundColor:"black",color:"white",padding:"0px 10px",margin:"10px"}}>B</span>
      <span style={{backgroundColor:"black",color:"white",padding:"0px 10px",margin:"10px"}}>B</span>
      <span style={{backgroundColor:"black",color:"white",padding:"0px 10px",margin:"10px"}}>C</span></h1>
      <div class='container'>
      <img src="https://tpc.googlesyndication.com/simgad/3545410966543316602" alt="Header Image" aria-hidden="true" />
      </div>
      </div>
    </div>
    <hr></hr>
    <AlignmentExample/>
    <NavScroll/>
    <hr></hr>
    <LoadingSpinner/>
    <hr></hr>
    <ImageCarousel/>
    <hr></hr>
    <Marquee/>
    <hr></hr>
    <ImageCards/>
    <br></br>
    <hr></hr>
    <Data/>
    <hr></hr> 
    <BasicExample/>
    <hr></hr>
    <Footer/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
