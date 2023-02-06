import React, { useEffect, useState } from "react";
import HtmlCssJs from "./HtmlCssJsEditor/HtmlCssJs";
import "./Editor.scss";
import { useDispatch } from "react-redux";
import { addSourceData } from "../../store/slices";

const EditorPanel = () => {
    const dispatch = useDispatch();
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [javascript, setJavascript] = useState("");

    const srcDoc = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
    </html>
    `;

    useEffect(() => {
        const afterSomeTimeExecute = setTimeout(() => {
            dispatch(addSourceData(srcDoc));
        }, 500);

        return () => clearInterval(afterSomeTimeExecute);
    }, [html, css, javascript]);

    return (
        <div className="editor-panel">
            <HtmlCssJs
                className="editor-panel__html"
                name="HTML"
                language="xml"
                value={html}
                onChange={setHtml}
            />
            <HtmlCssJs
                className="editor-panel__html"
                name="CSS"
                language="css"
                value={css}
                onChange={setCss}
            />
            <HtmlCssJs
                className="editor-panel__html"
                name="JavaScript"
                language="javascript"
                value={javascript}
                onChange={setJavascript}
            />
        </div>
    );
};

export default EditorPanel;
