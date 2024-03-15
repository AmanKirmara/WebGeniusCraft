// PostForm.jsx

import React, { useState } from "react";
import ContentEditor from "./ContentEditor";
import styles from "./PostForm.module.css";
import { uploadPost } from "../../services/api";
import { FaCircleNotch, FaImages } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const [adminKey, setAdminKey] = useState("");
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploadPromise, setUploadPromise] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("")

  const navigator = useNavigate()
  
  const handleContentChange = (content) => {
    setEditorContent(content);
  }

  

  const handleUpload = async () => {
    try {
      // Check if required fields are not empty
      if (!adminKey || !title || !editorContent) {
        console.error("Please fill in all required fields");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", editorContent);
      formData.append("adminKey", adminKey);
      if (imageFile) {
        formData.append("imageFile", imageFile);
      }

      setUploadPromise(true);
      setErrorMessage("please wait...");
      console.log("Uploading content:", formData);
      const response = await uploadPost(formData);
      console.log("Content uploaded successfully:", response);
      setErrorMessage("uploaded successfully on server ! :) ");
      setAdminKey("");
      setTitle("");
      setEditorContent(""); // Clear editor content
      setImageFile(null);
      setSelectedImage(null);
      setTimeout(() => {
        navigator('/')
      }, 1500);
    } catch (error) {
      console.error("Error uploading content:", error);
      setUploadPromise(false);
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message === "Please provide correct password"
      ) {
        setErrorMessage("Incorrect protect key. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    } finally {
      setUploadPromise(false); 
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    } else {
      setSelectedImage(null);
      setImageFile(null);
    }
  };

  
  return (
    <div className={styles.container}>
      <h2>Create a New Post</h2>
      <div className={`${styles.inputWrap} ${styles.adminKey}`}>
        <label htmlFor="adminKey">Admin Secure Key:</label>
        <input
          type="text"
          id="adminKey"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputWrap}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={70}
          required
        />
      </div>

      <div className={styles.inputWrap}>
        <label>Description:</label>
        <ContentEditor content={editorContent} onContentChange={handleContentChange} />
      </div>

      <div className={styles.inputWrap}>
      <label htmlFor="imageInput" className={styles.imageInput} >
            {selectedImage !== null ? (
              <img
                src={selectedImage}
                loading="lazy"
                alt=""
              />
            ) : (
              <FaImages  className={styles.icon} />
            )}
          </label>
          <span className={styles.errorMessage}>{errorMessage}</span>

        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          id="imageInput"
          onChange={handleFileChange}
          required
        />
      </div>

    

      <button type="submit" onClick={handleUpload}>
        {uploadPromise ? <FaCircleNotch className={styles.circle} /> : "Save"}
      </button>
    </div>
  );
}

export default PostForm;
