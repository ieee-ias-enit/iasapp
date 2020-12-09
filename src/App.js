import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CompanyList from "./Components/CompaniesComps/CompaniesList";
import CompanyData from "./Components/CompaniesComps/CompaniesData";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";
import ParticlesBg from "particles-bg";
import SearchBox from "./Components/Utils/SearchBox";

function App() {
  const [companyName, setCompanyName] = useState("");
  const [Companies, setCompanies] = useState(CompanyData);
  const [field, setField] = React.useState("");
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/iasapp/TNCompanies">
            <Header backButton="/iasapp/Home" />
            <SearchBox setCompanyName={setCompanyName} />
            <CompanyList companyNamekey={companyName} data={Companies} />
            <Footer />
          </Route>

          <Route path="/iasapp/Home">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route path="/iasapp/About">
            <Header backButton="/iasapp/Home" />
            <Home />
            <Footer />
          </Route>

          <Route path="/iasapp/Error">
            <Header backButton="/iasapp/Home" />
            <Error />
            <Footer />
          </Route>

          <Redirect to="/iasapp/Error" />
        </Switch>
      </Router>
      <ParticlesBg color="#259e57" num={200} type="cobweb" bg={true} />
    </React.Fragment>
  );
}

export default App;
