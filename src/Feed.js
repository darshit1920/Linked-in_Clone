import React, { useEffect, useState } from "react";
import "./Feed.css";
import { RxAvatar } from "react-icons/rx";
import { MdPhoto } from "react-icons/md";
import { MdToday } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import Post from "./Post";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
export default function Feed() {
  const user = useSelector(selectUser);

  const [posts, setPost] = useState([]);
  const [input, setInput] = useState();

  const submitPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: "This is new",
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <RxAvatar src={user.photoURL} size="2rem" />
          <form onSubmit={submitPost}>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>
        <div className="feed__options">
          <div className="option">
            <MdPhoto size="1.2rem" color="#70b5f9" />
            <span>Photo</span>
          </div>
          <div className="option">
            <BsYoutube size="1.2rem" color="#7fc15e" />
            <span>Video</span>
          </div>
          <div className="option">
            <MdToday size="1.2rem" color="orange" />
            <span>Event</span>
          </div>
          <div className="option">
            <MdAssignment size="1.2rem" color="maroon" />
            <span>Write Article</span>
          </div>
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}
