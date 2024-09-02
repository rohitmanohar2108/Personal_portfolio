import React from "react";


const CertificationBox = ({ logo, title, description, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative p-6 rounded-lg flex flex-col items-center text-center certification-box font-courier-prime group overflow-hidden bg-white bg-opacity-30"
    >
      <div className="relative w-full h-24 mb-4">
        <img
          src={logo}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col items-center opacity-100 transition-opacity duration-300">
        
        <h3 className="text-black text-xl mb-2 ">{title}</h3>
       
      </div>
    </a>
  );
};

export default CertificationBox;
