import { Header } from "../../components";
import { Stacked as StackedChart } from "../../components";

const Stacked = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-6 md:p-10 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Stacked" />
       <StackedChart />
    </div>
  );
};

export default Stacked;
