import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-6 items-center shadow-md">
      <h1 className="font-bold">Where in the world?</h1>

      <div className="cursor-pointer">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
