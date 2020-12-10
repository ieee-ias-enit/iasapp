import React,{useState}from 'react';
import "./home.css";
import ClearIcon from '@material-ui/icons/Clear';


const About = () => {
  
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

 
  function closeModal(){
    setIsOpen(false);
  }

  return (
  <React.Fragment>
        <div style={{
          textAlign:"center",
        }}>
          <a href="#" className="btn-about"onClick={openModal} >Who is IEEE IAS </a> 
        </div>
        
      <div style={modalIsOpen ? {display:"block"}:{display:"none"}}>
        <div className="Modal">
          <div className="smallHead">
            <h2>KNOW US</h2>
            <ClearIcon onClick={closeModal}/>
          </div>
          <img src="./iaswhte.png" alt="IEEE IAS ENIT SBC"/>

          <p>IEEE IAS ENIT Student Chapter was formed in 2017.
            Since the founding of the student chapter, Its main goal was to provide
            knowledge and build linkage between students and the evolving 
            tech industry through organizing various events and training sessions.
          </p>
        </div>
      </div>
        
       
  </React.Fragment>)
};

export default About;
