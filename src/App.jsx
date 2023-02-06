import React from "react";
import "./App.scss";
import Result from "./components/Result/Result";
import EditorPanel from "./components/Editor/EditorPanel";

const App = () => {
    return (
        <div>
            <EditorPanel />
            <Result />
        </div>
    );
};

export default App;
