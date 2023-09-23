"use client";
import CardProps from "./interfaces/card.interfaces";

const Card: React.FC<CardProps> = ({ title, description, icon, url,bg_image }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
   
    
    <div
      className="
        h-48
        w-48
        ml-20
        mt-20
        rounded-[30px]
        shadow-lg shadow-cyan-500/60
        border-2
        cursor-pointer
        transform
        transition duration-500 hover:scale-125
        bg-cover 
        bg-no-repeat

        "
        style={ { backgroundImage: `url('${bg_image}')`  }}   
        onClick={handleClick}
    >
      <div
        className="
            text-center
            text-xl
            text-teal-50
            pt-6
            "
            
      >
        <p> {title}</p>
      </div>
      <div className="text-center mt-4 text-sm mb-4...">
        <span> {description}</span>
      </div>
      <div className="text-center text-blue-300 	">
        <span className="material-symbols-outlined text-6xl ">{icon}</span>
      </div>
    </div>
    
  );
};

export default Card;
