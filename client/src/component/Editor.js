import React, { useRef, useEffect } from "react";
import EditorPage from './EditorPage'; // Adjust the path if needed

import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror";
import CodeMirror from "codemirror";

function Editor() {
  const editorRef = useRef(null); 

  useEffect(() => {
    const init = async () => {
      const editor = CodeMirror.fromTextArea(
        document.getElementById("realTimeEditor"),
        {
          mode: { name: "javascript", json: true },
          theme: "dracula",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );

      // Set the size of the editor
      editor.setSize(null, "100%");
    };

    init(); 
  }, []); 

  return (
    <div style={{ height: "600px" }}>
      {" "}
      {/* Correct height to 600px */}
      <textarea id="realTimeEditor" ref={editorRef}></textarea>
    </div>
  );
}

export default Editor;
