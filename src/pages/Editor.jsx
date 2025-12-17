import {
  HtmlEditor,
  RichTextEditorComponent as RichTextEditor,
  Toolbar,
  Link,
  Image,
  QuickToolbar,
  Inject,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Editor" />
      <div className="mt-10">
        <RichTextEditor>
          <EditorData />
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditor>
      </div>
    </div>
  );
};

export default Editor;
