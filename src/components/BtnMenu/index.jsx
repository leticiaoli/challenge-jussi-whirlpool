import React, { useContext } from "react";
import { MenuContext } from "../../providers/menuProvider";

import "./BtnMenu.scss";

const BtnMenu = () => {
  const { setIsOpen } = useContext(MenuContext)

  return (
    <img src="/menu-bar.png" alt="Ícone do menu" className="btn__menuIcon" onClick={() => setIsOpen(true)} />
  )
};

export default BtnMenu;