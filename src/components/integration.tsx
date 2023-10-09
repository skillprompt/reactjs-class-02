// BASE_URL: https://jsonplaceholder.typicode.com
// posts has following type:

import { useEffect, useState } from "react";
import { PostItem } from "./PostItem";
import { PostForm } from "./PostForm";

// function mySumCalculator() {
//   const num =5;
//   const calculator = () => {
//     return 5 + 6;
//   };

//   calculator()
// }

/*
  id: number, 
  title: string, 
  body: string,
  userId: number
*/
export type TPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const BASE_URL = "https://jsonplaceholder.typicode.com";

// HOMEWORK: 2. Write a function to make `GET` request to `/posts/:id` to fetch post by id.
// async function getPostById(postId) {}
// Add `view all` button to show the description/body

// Write a function to make `POST` request to `/posts` to create a post.
async function createPost(data: {
  title: string;
  body: string;
  userId: number;
}): Promise<TPost> {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error.message));
  });
}

// HOMEWORK: Write a function to make `PUT` request to `/posts/:id` to update a post.
// async function updatePost(postId) {}

// Write a function to make `DELETE` request to `/posts/:id` to delete a post.
async function deletePostApi(postId: number) {
  fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "my-name": "react",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("post is deleted", data);
    });
}

export function IntegrationWithBackend() {
  const [posts, setPosts] = useState<TPost[]>([]);

  // Write a function to make `GET` request to `/posts` to fetch all posts.
  async function getAllPosts(): Promise<TPost[]> {
    let outerData: TPost[] = [];
    fetch(`${BASE_URL}/posts`)
      .then((response) => {
        console.log(`response`, response);
        return response.json();
      })
      .then((data) => {
        console.log(`Data of getAllPosts: `, data);
        // show in the ui
        setPosts(data);
        outerData = data;
      });

    /**
     * !HOMEWORK: BUG HERE
     */
    return outerData;
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  const deletePost = async (postId: number) => {
    // const nums = [2,5,4, 8, 7, 6, 4,3];
    // filter
    // const deleted8 = nums.filter(num => num !==8 ); // [2,3,4,7,6,4,3]

    /**
     * We need to call the api to delete the post.
     */
    await deletePostApi(postId);

    const postsWithDeleted = posts.filter((post) => {
      if (post.id === postId) return false;
      else {
        return true;
      }
    });
    setPosts(postsWithDeleted);
  };

  // method one: uncontrolled
  // const handlePostCreate = async () => {
  //   if (formRef.current) {
  //     const formData = new FormData(formRef.current);

  //     const title = (formData.get("title") as string) || "";
  //     const body = (formData.get("body") as string) || "";

  //     /**
  //      * Perform api call to create the post
  //      */
  //     const createdPostData = await createPost({
  //       title: title,
  //       body: body,
  //       userId: 1,
  //     });

  //     /**
  //      * We need to update the data on the ui.
  //      */
  //     // const a = [1,2,3,4]
  //     // const b = [5, ...a]
  //     setPosts((prevPosts) => {
  //       return [createdPostData, ...prevPosts];
  //     });
  //   }
  // };

  // method two: controlled
  const handlePostCreateMethodTwo = async ({
    title,
    body,
    setTitle,
    setBody,
  }: {
    title: string;
    body: string;
    setTitle: (arg: string) => void;
    setBody: (arg: string) => void;
  }) => {
    /**
     * Submit data to backend
     */
    const createdPostData = await createPost({
      title,
      body,
      userId: 1,
    });

    /**
     * clear the form
     */
    setTitle("");
    setBody("");

    /**
     * update the data on the ui
     */
    setPosts((prevPosts) => {
      return [createdPostData, ...prevPosts];
    });
  };

  return (
    <div>
      <h1>Integration with backend</h1>

      <PostForm handlePostCreateMethodTwo={handlePostCreateMethodTwo} />

      {/* HOMEWOR: Make component for ul */}
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {posts.map((post) => {
          return (
            <PostItem
              key={`${post.id}_${post.title}`}
              post={{
                id: post.id,
                body: post.body,
                title: post.title,
                userId: post.userId,
              }}
              deletePost={deletePost}
            />
          );
        })}
      </ul>
    </div>
  );
}
