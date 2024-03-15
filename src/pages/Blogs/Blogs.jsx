import React, { useEffect, useState } from "react";
import styles from "./Blogs.module.css";
import BlogPost from "./BlogPost";
import { fetchPosts } from "../../services/api";
import { formatTimestamp } from "../../utils/formatTimestamp";
import InfiniteScroll from "react-infinite-scroll-component";

function Blogs() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMorePosts = async () => {
    try {
      const response = await fetchPosts(page);
      if (response && Array.isArray(response) && response.length > 0) {
        setItems((prevItems) => [...prevItems, ...response]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setHasMore(false)
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchMorePosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={
        // <h4 className="loading-message">Loading...</h4>
        <div className={styles.loader}></div>
      }
        endMessage={
          <p style={{ textAlign: "center", padding: "20px", color: "#555" }}>
            <strong>Yay! You have seen it all</strong>
          </p>
        }
      >
        <div className={styles.container}>
          {items.map((item, index) => (
            <BlogPost
              key={index}
              title={item?.title || "title for testing"}
              image={
                item?.image ||
                "http://res.cloudinary.com/dgydx2e8w/image/upload/v1708944894/vlatbnkuntppu33xyv0q.jpg"
              }
              description={item?.description || "description for testing"}
              date={formatTimestamp(item?.createdAt)}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Blogs;
