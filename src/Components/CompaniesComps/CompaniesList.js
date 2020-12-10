import React from "react";
import CompanyCard from "./CompanyCard";
import "./StyleCompanies.css";

export default function CompanyList({ companyNamekey, Fieldkey, Locationkey , data }) {
  if(Locationkey !=="")
    data=data.filter(el=>el.Governerate.toLowerCase().trim()===Locationkey.toLowerCase().trim())
  if(Fieldkey !=="")
    data=data.filter(el=>el.Field.trim().toLowerCase().split(",").includes(Fieldkey.toLowerCase().trim()))
  return (
    <div className="CardsWrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginBottom:"20%"
        }}
      >
        {data
          .filter((el) =>
            el.Name.toLowerCase().includes(companyNamekey.toLowerCase().trim())
          )
          .map((el, i) => (
            <CompanyCard key={i} Company={el} />
          ))}
      </div>
    </div>
  );
}
