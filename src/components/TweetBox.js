import React, { useState } from "react";
import { Avatar, Button, Input } from "@material-ui/core";
import "./TweetBox.css";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  async function db__setPost(text) {
    const docRef = await addDoc(collection(db, "posts"), {
      avatar: "https://picsum.photos/seed/picsum/500/350",
      displayName: "Errká",
      image: "",
      text: text,
      username: "rayhanksl",
      verified: true,
    });
  }

  const sendTweet = (e) => {
    e.preventDefault();

    db__setPost(tweetMessage);

    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
          {/* <input placeholder="Enter image URL" /> */}
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
