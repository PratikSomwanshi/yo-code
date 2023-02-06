import React from "react";
import "./Results.scss";
import { useSelector } from "react-redux";

const Result = () => {
    const srcDoc = useSelector((state) => state.innerDataReducer.srcDoc);

    return (
        <div className="result">
            <iframe
                className="result__frame"
                title="result"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
                srcDoc={srcDoc}></iframe>
        </div>
    );
};

export default Result;
