import { useState } from "react";
import { BiBulb } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";

const DarkmodeToggle = () => {
  const [menu, setMenu] = useState(false);
  const [buttonText, setButtonText] = useState("Select Mode");

  const Buttons = [
    { icon: <BiMoon />, text: "Dark Mode", mode: "dark" },
    { icon: <BiBulb />, text: "Light Mode", mode: "light" },
    { icon: <FiMonitor />, text: "System Default", mode: "system" },
  ];

  const handleModeSelect = (btn) => {
    setButtonText(btn.text);
    setMenu(false);

    if (btn.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (btn.mode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // system default
      document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setMenu((p) => !p)}
        className="p-1 md:py-2 md:px-3 text-sm cursor-pointer rounded-md border text-slate-700 dark:text-slate-600 border-slate-500"
      >
        {buttonText}
      </button>

      {menu && (
        <div className="absolute top-12 text-sm left-0 bg-white dark:bg-slate-400 shadow-lg rounded-md p-2 w-40 z-10">
          {Buttons.map((btn) => (
            <button
              key={btn.text}
              onClick={() => handleModeSelect(btn)}
              className="block w-full p-2 text-left text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-500 rounded-md"
            >
              <span className="flex items-center gap-2">
                <p>{btn.icon}</p>
                <p>{btn.text}</p>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DarkmodeToggle;
