// BASE_URL: https://jsonplaceholder.typicode.com
// posts has following type:

import { useEffect, useState } from "react";
import { PostItem } from "./PostItem";

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

const BASE_URL = "https://jsonplaceholder.typicode.com";

// TODO: 2. Write a function to make `GET` request to `/posts/:id` to fetch post by id.
// async function getPostById(postId) {}

// TODO: 3. Write a function to make `POST` request to `/posts` to create a post.
// async function createPost({ title, body, userId }) {}

// TODO: 4. Write a function to make `PUT` request to `/posts/:id` to update a post.
// async function updatePost(postId) {}

// TODO: 5. Write a function to make `PATCH` request to `/posts/:id` to patch a post.
// async function patchPost(postId) {}

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

  return (
    <div>
      <h1>Integration with backend</h1>

      <ul
        style={{
          listStyle: "none",
        }}
      >
        {posts.map((post) => {
          return (
            <PostItem
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
