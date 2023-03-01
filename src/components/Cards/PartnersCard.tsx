import React from "react";

interface PartnersCardProps {
  img: string;
}

const PartnersCard: React.FC<PartnersCardProps> = ({ img }) => {
  return (
    <div style={{width:"200px",height:"100px"}} className="partners-card d-flex justify-content-center align-items-center">
      <img style={{width:"200px",height:"100px"}} src={img} alt="error" />
    </div>
  );
};

export default PartnersCard;
