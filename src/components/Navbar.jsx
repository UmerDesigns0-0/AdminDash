import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile, DarkmodeToggle } from ".";

import { useStateContext } from "../contexts/StateContext";

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const profileRing = currentColor;

  const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
  return (
    <div>
      <div className="flex justify-between items-center p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((p) => !p)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />

        <div className="flex items-center gap-1">
          {/* <DarkmodeToggle /> */}
          <NavButton
            title="Cart"
            customFunc={() => handleClick("cart")}
            color={currentColor}
            icon={<FiShoppingCart />}
          />
          <NavButton
            title="Chat"
            dotColor={currentColor}
            customFunc={() => handleClick("chat")}
            color={currentColor}
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notifications"
            dotColor={currentColor}
            customFunc={() => handleClick("notification")}
            color={currentColor}
            icon={<RiNotification3Line />}
          />
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick("userProfile")}
            >
              <img
                className="rounded-full w-8 h-8 outline-none"
                style={{
                  border: isClicked.userProfile
                    ? `2px solid ${currentColor}`
                    : "none",
                }}
                src={avatar}
                alt="user-profile"
              />
              <p>
                <span className="text-slate-400 dark:text-slate-500">Hi, </span>
                <span className="text-slate-400 dark:text-slate-500 font-medium ml-1">
                  Michael
                </span>
              </p>
              <MdKeyboardArrowDown className="text-slate-400 dark:text-slate-500" />
            </div>
          </TooltipComponent>

          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
