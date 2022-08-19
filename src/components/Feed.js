import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  function db__getPosts() {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      const tempPosts = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        tempPosts.push(doc.data());
        setPosts(tempPosts);
      });
    });
  }

  useEffect(() => {
    db__getPosts();
  }, []);

  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {posts[0] &&
        posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
    </div>
  );
}

export default Feed;
