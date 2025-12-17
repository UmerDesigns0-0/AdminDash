import { useState, useContext, createContext, useEffect } from "react";

const StateContext = createContext();

const inistialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(inistialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState(
    () => localStorage.getItem("themeColor") || "#03C9D7"
  );
  const [themeSettings, setThemeSettings] = useState(false);

  const setTheme = (color) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...inistialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        themeSettings,
        setThemeSettings,
        setTheme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
