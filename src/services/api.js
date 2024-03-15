import axios from "axios";
const backendOrigin = process.env.REACT_APP_BACKEND_ORIGIN;

const fetchPosts = async (page) => {
    console.log("fetching posts...")
  try {
    const apiUrl = `${backendOrigin}/api/v1/blog/?page=${page}`
    const response = await axios.get(apiUrl);
    return response.data.posts;
  } catch (error) {
    console.log(error + ": " + error.message);
    throw error;
  }
};


const uploadPost = async (postData) => {
  console.log("uploading post...")
  try {
    const response = await axios.post(`${backendOrigin}/api/v1/blog/`, postData);
    return response.data;
  } catch (error) {
    console.log(error + ": " + error.message);
    throw error;
  }
}

export { fetchPosts, uploadPost };
