import { useState } from "react";
import { BASE_URL, TPost } from "./integration";

// Write a function to make `PUT` request to `/posts/:id` to update a post.

// sample data
// id: 1,
// title: 'foo',
// body: 'bar',
// userId: 1,
async function updatePost(
  postId: number,
  data: {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
) {
  fetch(`${BASE_URL}/posts/${postId}`, {
    method: "PATCH",
    body: JSON.stringify(data), // string
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function PostItem(props: {
  post: TPost;
  deletePost: (postId: number) => void;
}) {
  const [showInput, setShowInput] = useState(false);
  const [postTitle, setPostTitle] = useState(props.post.title);

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
        <input
          name="title"
          value={postTitle}
          onChange={(event) => {
            // console.log("event", event);
            // console.log("event", event.currentTarget);
            // console.log("value", event.currentTarget.value);
            setPostTitle(event.currentTarget.value);
          }}
        />
      ) : (
        <p
          onClick={() => {
            setShowInput(true);
          }}
        >
          Title: {postTitle}
        </p>
      )}
      <button
        style={{
          background: "green",
          padding: "5px",
          color: "white",
        }}
        type="button"
        onClick={async () => {
          setShowInput(false);
          // We must call the api to update the post.
          await updatePost(props.post.id, {
            id: props.post.id,
            title: postTitle,
            userId: props.post.userId,
            body: props.post.body,
          });

          // We must show the updated data on the ui.
          // using the state
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
