// ContentEditor.jsx

import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function ContentEditor({ initialContent, onContentChange }) {
  const [content, setContent] = useState(initialContent || "");

  useEffect(() => {
    onContentChange(content);
  }, [content, onContentChange]);

  const handleChange = (value) => {
    // Set a maximum word count for the content
    const maxWords = 500;

    // Remove extra spaces and split the content into words
    const words = value.trim().split(/\s+/);

    // Check if the word count exceeds the limit
    if (words.length <= maxWords) {
      // Update the content if within the limit
      setContent(value);
    }
  };
  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
      modules={{
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          ["clean"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "code-block",
        "list",
        "bullet",
        "script",
        "color",
        "background",
      ]}
      placeholder="Write your content here..."
    />
  );
}

export default ContentEditor;
