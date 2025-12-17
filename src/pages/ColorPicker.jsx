import { useState } from "react";
import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { useStateContext } from "../contexts/StateContext";

const ColorPicker = () => {
  const { currentColor } = useStateContext();
  const [color, setColor] = useState(currentColor);
  const change = (args) => {
    const newColor = args.currentValue.hex;
    document.getElementById("preview").style.backgroundColor = newColor;
    setColor(newColor);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-6 mb-10 pb-14 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="">
        <div className="flex justify-center">
          <span
            id="preview"
            style={{ backgroundColor: color }}
            className="mb-10"
          />
        </div>
        <p className="text-sm text-center font-semibold text-slate-500">
          {/* {color ? (
            <p>
              Copy the code: <b>{color}</b>
            </p>
          ) : (
            <p>Pick a Color</p>
          )} */}
          Copy the code: <b>{color}</b>
        </p>
      </div>
      <div className="flex justify-center items-center mt-8 gap-16 md:gap-20 flex-wrap">
        <div>
          <p className="text-2xl text-center dark:text-slate-200 font-semibold mb-4">
            Inline Palette
          </p>
          <ColorPickerComponent
            id="inline-pallete"
            mode="Palette"
            modeSwitcher={false}
            inline={true}
            showButtons={false}
            change={change}
          />
        </div>
        <div>
          <p className="text-2xl text-center dark:text-slate-200 font-semibold mb-4">
            Inline Picker
          </p>
          <ColorPickerComponent
            id="colorpicker"
            mode="Picker"
            modeSwitcher={false}
            inline={true}
            showButtons={false}
            change={change}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
