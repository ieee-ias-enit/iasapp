import React from "react";
import "./StyleCompanies.css";
import LaunchIcon from "@material-ui/icons/Launch";

const CompanyCard = ({ Company }) => {
  return (
    <div className="card">
      <div className="additional">
        <div className="Company-card">
          <div className="company-title center">{Company.Name}</div>
          <img
            src={Company.LogoUrl || "https://099.tel/Qatar/icons/companies.png"}
            alt="company"
            width="150"
            className="center"
          />
        </div>

        <div className="more-info">
          <h1>{Company.Name}</h1>
          <div className="coords">
            <span>
              <b>Contacts :</b>
            </span>
            <br />
            <span>{Company.Phone}</span>
            <br />
          </div>
          <div className="coords">
            <span>
              <b>Location :</b>
            </span>
            <br />
            <span>
              {Company.City}, {Company.Governerate}
            </span>
            <br />
            <span>{Company.Adress}</span>
            <br />
          </div>
          <div className="coords">
            <span>
              <b>Mail :</b>
            </span>
            <br />
            <span>{Company.Mail}</span>
            <br />
          </div>

          <div className="coords">
            <span>
              <b>website : </b>
            </span>
            <span>
              <a
                className="link"
                href={Company.Website}
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon />
              </a>
            </span>
            <br />
          </div>
          <div className="coords">
            <span>
              <b>Fields of Activity</b>
            </span>
            <br />
            <span>{Company.Field}</span>
            <br />
          </div>
        </div>
      </div>

      <div className="general">
        <h1>{Company.Name}</h1>
        <p>{Company.Description}</p>
        <span className="more">Mouse over the card for more info</span>
      </div>
    </div>
  );
};

export default CompanyCard;
