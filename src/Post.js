import React, { forwardRef } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdMoreVert } from "react-icons/md";
import { MdShare } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import "./Post.css";
import { AiFillLike } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <div className="post__headerLeft">
          <RxAvatar size="2rem" src={photoURL} />
          <div className="post_profile_details">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
        <MdMoreVert size="1.3rem" />
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__footer">
        <div className="post__footer__option">
          <AiFillLike />
          <span>Like</span>
        </div>
        <div className="post__footer__option">
          <BiMessageDetail />
          <span>Comment</span>
        </div>
        <div className="post__footer__option">
          <MdShare />
          <span>Share</span>
        </div>
        <div className="post__footer__option">
          <FiSend />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
});
export default Post;
