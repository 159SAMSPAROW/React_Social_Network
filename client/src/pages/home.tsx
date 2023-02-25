import React, { useState } from 'react'
import fs from 'fs';
import fixture from '../fixtures/posts.json'
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [post, setPost] = useState('')

  useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const posts = await fetch('../fixtures/posts.json')
      console.log(posts, await posts.json());
      return posts;
    },
  })

  console.log(
    //fixture.posts[0],
  ) /* [0] pour accéder au premier élément du tableau posts */
  return (
    <div>
      <h1>Home</h1>
      <ul>
      {fixture.posts.map((post) => {
       return <li key={post.postId}>
              <h2> {post.author}</h2>
              <p> {post.content} </p>
              <time> {post.createdAt}</time>
              </li>
      })}
      </ul>
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          console.log(post)
        }}
      >
        <label>Créer un post
          <input
          value={post}/* important de récuper la valeur pour l' afficher*/ // React donne la valeur à l'input 
          type='text'
          placeholder='Entrer votre message'
          required
          onChange={(e) => setPost(e.target.value)} // L'input dit à React sa valeur
          />
        </label>
        <button>Poster</button>
      </form>
    </div>
  )
}

export default Home;


const a = () => {
  return 5;
}

const b = () => (5);
