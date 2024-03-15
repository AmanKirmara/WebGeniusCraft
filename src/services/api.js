import axios from "axios";
// const apiUrl = process.env.REACT_APP_API_URL;

const fetchPosts = async (page) => {
    console.log("fetching posts...")
  try {
    const response = await axios.get(`/api/v1/blog/?page=${page}`);
    return response.data.posts;
  } catch (error) {
    console.log(error + ": " + error.message);
    throw error;
  }
};


const uploadPost = async (postData) => {
  console.log("uploading post...")
  try {
    const response = await axios.post("/api/v1/blog/", postData);
    return response.data;
  } catch (error) {
    console.log(error + ": " + error.message);
    throw error;
  }
}

export { fetchPosts, uploadPost };
