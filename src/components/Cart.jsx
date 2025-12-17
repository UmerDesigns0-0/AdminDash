import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/StateContext";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div className="bg-slate-700/40 w-screen fixed top-0 right-0 z-100">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-slate-200 transition-all dark:bg-[#484B52] bg-white md:w-100 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => {
              handleClick({ cart: false });
            }}
            title="Close Cart"
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:bg-light-slate cursor-pointer hover:scale-105 ease-in-out duration-300"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-8 gap-5 border-b border-slate-200 dark:border-slate-600 p-4">
                <img className="rounded-lg h-24 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold text-sm mb-1">{item.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-sm">{item.price}</p>
                    <div className="flex items-center border rounded">
                      <p className="p-1.5 border-r dark:border-slate-600 text-red-600 ">
                        <AiOutlineMinus className="text-xs" />
                      </p>
                      <p className="px-4 py-0.5 border-r text-sm dark:border-slate-600 text-green-600">
                        0
                      </p>
                      <p className="p-1.5 text-green-600">
                        <AiOutlinePlus className="text-xs" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-slate-500 text-sm dark:text-slate-200">Sub Total</p>
            <p className="font-semibold text-sm">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-slate-500 text-sm dark:text-slate-200">Total</p>
            <p className="font-semibold text-sm">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
            size={"sm"}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
