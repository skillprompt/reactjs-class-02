import { useRef, useState } from "react";

// export function getSumCalculator(n1: number) {
//   //
//   const number = n1;
//   const num2 = 6

//   // functions are treated as first class citizen
//   return () => {
//     return number + 6;
//   }
// }

export function PostForm(props: {
  handlePostCreateMethodTwo: ({
    title,
    body,
    setTitle,
    setBody,
  }: {
    title: string;
    body: string;
    setTitle: (arg: string) => void;
    setBody: (arg: string) => void;
  }) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div
      style={{
        margin: "20px auto",
        width: "200px",
      }}
    >
      <form ref={formRef}>
        <div style={{ margin: "10px" }}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            value={title}
            onChange={(event) => {
              const value = event.currentTarget.value;
              // console.log("value", value);
              setTitle(value);
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            value={body}
            id="body"
            onChange={(event) => {
              const value = event.currentTarget.value;
              setBody(value);
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <button
            type="button"
            onClick={() =>
              props.handlePostCreateMethodTwo({
                title,
                body,
                setTitle,
                setBody,
              })
            }
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
