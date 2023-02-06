import React, { useState } from "react";
import "./HtmlCssJs.scss";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled } from "react-codemirror2";
import { RiEyeCloseLine } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";

const HtmlCssJs = (props) => {
    const [open, setOpen] = useState(true);

    function handleOnChange(editor, data, value) {
        props.onChange(value);
    }

    function handleOnClick() {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    return (
        <div className={open ? "HtmlCssJs" : "HtmlCssJs close"}>
            <div className="HtmlCssJs__heading">
                <div>{props.name}</div>
                <button onClick={handleOnClick}>
                    {open ? (
                        <RiEyeCloseLine size={15} />
                    ) : (
                        <AiFillEye size={15} />
                    )}
                </button>
            </div>
            <Controlled
                onBeforeChange={handleOnChange}
                value={props.value}
                className="HtmlCssJs__wrapper"
                options={{
                    lint: true,
                    lineWrapping: true,
                    lineNumbers: true,
                    mode: props.language,
                    theme: "material",
                    cursorHeight: 1,
                }}
            />
        </div>
    );
};

export default HtmlCssJs;
