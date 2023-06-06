import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter Text Here");

  const handelupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  declare var event: Event;

  const handeldownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const arr = text.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const str2 = arr.join(" ");
  // console.log(str2);

  const handelcapitalClick = () => {
    // let newText = text.charAt(0).toUpperCase() + text.slice(1);
    let newText = str2;
    setText(newText);
  };

  const copyToClipboard = () => {
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard !!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handelonChange = () => {
    setText(event.target.value);
  };

  const handelclearClick = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handelonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#393635" : "white",
              color: props.mode === "dark" ? "whitesmoke" : "black",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary my-1"
          onClick={handelupClick}
        >
          Uppercase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={handeldownClick}
        >
          Lowercase
        </button>

        <button
          type="submit"
          className="btn btn-primary my-1"
          onClick={handelcapitalClick}
        >
          Capitalize
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={copyToClipboard}
        >
          Copy Text
        </button>

        <button
          type="submit"
          className="btn btn-primary my-1"
          onClick={handleExtraSpace}
        >
          Remove Space
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={handelclearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="my-3 mx-1"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text Summery</h1>
        <p>
          Word Count:
          {/* {text.length > 0 ? text.split(" ").length - 1 : 0} &nbsp; &nbsp; */}
          {
            text.split(" ").filter((text) => {
              return text.length !== 0;
            }).length
          }
          &nbsp; &nbsp; Character Count:
          {text.length} &nbsp; &nbsp; Reading Time:{0.15 * text.length} sec
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something above to preview it here"}
        </p>
      </div>
    </>
  );
}
