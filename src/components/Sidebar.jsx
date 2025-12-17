import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
// import { useStateContext } from '../contexts/ContextProvider'

import { useStateContext } from "../contexts/StateContext";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const ActiveLink = `w-60 flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-sm text-white m-2`;
  const NormalLink =
    "w-60 flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-200 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-400 m-2";

  return (
    <div className="sidebar pl-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-y-auto pb-10">
      {activeMenu && (
        <div className="w-72 dark:bg-secondary-dark-bg">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware className="text-black dark:text-white" />{" "}
              <span className="text-black dark:text-white">
                Admin
                <span style={{ color: currentColor }}>Dash</span>
              </span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu((p) => !p);
                }}
                className="text-xl rounded-full p-3 mr-4 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel className="text-black dark:text-white" />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-slate-500 dark:text-slate-300 text-[15px] m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? ActiveLink : NormalLink
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
