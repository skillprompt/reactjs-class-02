// BASE_URL: https://jsonplaceholder.typicode.com
// posts has following type:

import { useEffect, useState } from "react";

/*
  id: number, 
  title: string, 
  body: string,
  userId: number
*/
type TPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

// TODO: 2. Write a function to make `GET` request to `/posts/:id` to fetch post by id.
async function getPostById(postId) {}

// TODO: 3. Write a function to make `POST` request to `/posts` to create a post.
async function createPost({ title, body, userId }) {}

// TODO: 4. Write a function to make `PUT` request to `/posts/:id` to update a post.
async function updatePost(postId) {}

// TODO: 5. Write a function to make `PATCH` request to `/posts/:id` to patch a post.
async function patchPost(postId) {}

// TODO: 6. Write a function to make `DELETE` request to `/posts/:id` to delete a post.
async function deletePost(postId) {}

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

  return (
    <div>
      <h1>Integration with backend</h1>

      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <p>Title: {post.title}</p>
              <p>AuthorId: {post.userId}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
