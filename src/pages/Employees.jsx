import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";

const Employees = () => {
  return (
    <div className="mt-20 md:mt-10 px-6 md:px-12 pb-16">
      <Header category="Page" title="Employees" />
      <div className="mt-8">
        <GridComponent
          dataSource={employeesData}
          allowPaging
          allowSorting
          toolbar={["Search"]}
          width="auto"
        >
          <Inject services={[Page, Search, Toolbar]} />
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </GridComponent>
      </div>
    </div>
  );
};

export default Employees;
