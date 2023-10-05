import { useState } from "react";
import { TPost } from "./integration";

export function PostItem(props: {
  post: TPost;
  deletePost: (postId: number) => void;
}) {
  const [showInput, setShowInput] = useState(false);

  return (
    <li
      key={props.post.id}
      style={{
        border: "2px solid #eee",
        margin: "10px",
        padding: "5px",
      }}
    >
      <p>PostId: {props.post.id}</p>
      <p>AuthorId: {props.post.userId}</p>

      {showInput ? (
        <input name="title" value={props.post.title} />
      ) : (
        <p
          onClick={() => {
            setShowInput(true);
          }}
        >
          Title: {props.post.title}
        </p>
      )}
      <button
        style={{
          background: "green",
          padding: "5px",
          color: "white",
        }}
        type="button"
        onClick={() => {
          setShowInput(false);
        }}
      >
        Update
      </button>
      <button
        type="button"
        style={{
          background: "red",
          padding: "5px",
          color: "white",
        }}
        onClick={() => props.deletePost(props.post.id)}
      >
        Delete Post
      </button>
    </li>
  );
}
