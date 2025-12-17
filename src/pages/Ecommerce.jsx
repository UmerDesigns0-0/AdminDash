import { BsDot } from "react-icons/bs";

import { Stacked, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData } from "../data/dummy";
import { useStateContext } from "../contexts/StateContext";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-16 md:mt-8 px-4">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
        {/* MAIN CARD */}
        <div className="bg-white dark:bg-slate-600 p-8 rounded-xl shadow-lg w-full lg:w-[96%] flex flex-col gap-8">
          {/* Top Section */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-5">
            <div>
              <p className="font-bold text-slate-400 dark:text-slate-300">
                Earnings
              </p>
              <p className="text-2xl dark:text-white font-semibold">
                $63,448.78
              </p>
              <div className="mt-4">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download"
                  borderRadius="10px"
                />
              </div>
            </div>

            <img
              src="https://cdn.pixabay.com/photo/2025/06/21/17/46/chart-9672890_1280.png"
              alt="hero-bg"
              className="w-full lg:w-96 h-40 lg:h-60 rounded-xl object-cover select-none"
              draggable="false"
            />
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {earningData.map((data) => (
              <div
                key={data.title}
                className="flex flex-col items-center text-center p-4 bg-slate-200 dark:bg-slate-400 rounded-lg"
              >
                <button
                  type="button"
                  style={{
                    color: data.iconColor,
                    backgroundColor: data.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {data.icon}
                </button>
                <p className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-semibold dark:text-white">
                    {data.amount}
                  </span>
                  <span
                    className={`text-sm font-semibold text-${data.pcColor}`}
                  >
                    {data.percentage}
                  </span>
                </p>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-200 mt-1">
                  {data.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === 2 Columns Container === */}
      <div className="flex justify-between flex-col md:flex-row px-6 md:px-12 mt-8 mb-6 gap-10">
        {/* ─────── COLUMN 1: Revenue + Stacked ─────── */}
        <div>
          {/* Heading */}
          <p className="font-semibold text-xl mb-4">Revenue Updates</p>

          <div className="px-2">
            <div className="mb-4">
              <p className="flex items-center gap-2 text-slate-700">
                <span className="text-2xl font-semibold">78,875.98</span>
                <span className="p-1 rounded-full bg-green-400 text-white text-sm">
                  +23%
                </span>
              </p>
              <p className="text-slate-500 text-md">Budget</p>
            </div>
            <div className="mb-4">
              <p className="flex items-center gap-2 text-slate-700">
                <span className="text-2xl font-semibold">49,774.78</span>
              </p>
              <p className="text-slate-500 text-md">Expense</p>
            </div>

            <div className="my-4">
              <SparkLine
                id="line-sparkline"
                height="180px"
                width="300px"
                data={SparklineAreaData}
                color={currentColor}
                border={currentColor}
                type="Line"
                xName="x"
                yName="yval"
              />

              <div className="mt-4">
                <Button
                  text="Download Report"
                  color="white"
                  bgColor={currentColor}
                  borderRadius="10px"
                  size="md"
                  width="full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─────── COLUMN 2: Expense/Budget + Sparkline ─────── */}
        <div>
          {/* Legend */}
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1 text-slate-600">
              <BsDot className="text-4xl" />
              Expense
            </span>

            <span
              style={{ color: currentColor }}
              className="flex items-center gap-1"
            >
              <BsDot className="text-4xl" />
              Budget
            </span>
          </div>

          <div className="px-2 mt-6">
            <Stacked width="340px" height="360px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
