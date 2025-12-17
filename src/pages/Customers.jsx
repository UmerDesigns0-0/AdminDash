import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Selection,
  Edit,
  Page,
  Inject,
  Toolbar,
  Sort,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  return (
    <div className="mt-20 md:mt-10 px-6 md:px-12 pb-16">
      <Header category="Page" title="Customers" />
      <div className="mt-8">
        <GridComponent
          dataSource={customersData}
          allowPaging
          allowSorting
          toolbar={["Delete"]}
          editSettings={{
            allowDeleting: true,
            allowEditing: true,
          }}
        >
          <Inject services={[Page, Selection, Edit, Sort, Toolbar]} />
          <ColumnsDirective>
            {customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </GridComponent>
      </div>
    </div>
  );
};

export default Customers;
