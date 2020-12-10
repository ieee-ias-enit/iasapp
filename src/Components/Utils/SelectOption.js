import React from 'react';
import "./SelectBox.css";
import { BiMap } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
export default function SelectOption({setField,setLocation}) {
      const handleChangeField = (event) => {
        setField(event.target.value);
      };
      const handleChangeLocation = (event) => {
        setLocation(event.target.value);
      };
    return (
        
            <div className="selection">
            <div>
                <h3>Select location <BiMap /></h3>
                <select  className="select-css" onChange={handleChangeLocation}>
                    <option value="">All</option>
                    <option value="Ariana">Ariana</option>
                    <option value="Beja">Beja</option>
                    <option value="Ben Arous">Ben Arous</option>
                    <option value="Bizerte">Bizerte</option>
                    <option value="Gabes">Gabes</option>
                    <option value="Gafsa">Gafsa</option>
                    <option value="Jendouba">Jendouba</option>
                    <option value="Kairouan">Kairouan</option>
                    <option value="Kasserine">Kasserine</option>
                    <option value="Kebili">Kebili</option>
                    <option value="Kef">Kef</option>
                    <option value="Mahdia">Mahdia</option>
                    <option value="Manouba">Manouba</option>
                    <option value="Medenine">Medenine</option>
                    <option value="Monastir">Monastir</option>
                    <option value="Nabeul">Nabeul</option>
                    <option value="Sfax">Sfax</option>
                    <option value="Sidi Bouzid">Sidi Bouzid</option>
                    <option value="Siliana">Siliana</option>
                    <option value="Tataouine">Tataouine</option>
                    <option value="Tozeur">Tozeur</option>
                    <option value="Tunis">Tunis</option>
                    <option value="Zaghouan">Zaghouan</option>
                </select>
            </div>
            <div>
                <h3>Select Field of study <FaBriefcase /></h3>
                <select  className="select-css" onChange={handleChangeField}>
                    <option value="">All</option>
                    <option value="IT">IT</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Telecommunication">Telecommunication</option>
                    <option value="Civil">Civil</option>
                    <option value="Hydraulic">Hydraulic</option>
                    <option value="Chemical">Chemical</option>
                    <option value="Biology">Biology</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Finance">Finance</option>
                    <option value="Biomedical">Biomedical</option>
                    <option value="Petroleum">Petroleum</option>
                    <option value="Energy">Energy</option>
                    <option value="Materials">Materials</option>
                    <option value="Architectural">Architectural</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Agricultural">Agricultural</option>
                    <option value="Nuclear">Nuclear</option>
                    <option value="Aeronautical">Aeronautical</option>
                    <option value="Engineering consulting">Engineering consulting</option>
                    <option value="Agribuisiness">Agribuisiness</option>     
                    <option value="Environmental">Environmental</option>             
                </select>
            </div>
            
        </div>
        )       
}
