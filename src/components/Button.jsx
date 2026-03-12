"use client";

import { useState } from "react";
import Popup from "@/components/Popup";

const Button = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsPopupOpen(true)} 
        className="btn btn_ghost"
      >
        Бесплатная консультация
      </button>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default Button;