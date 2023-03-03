/**useState permet de déclarer des variables d'état pour un composant,
 * tandis que FormEvent est un type de données qui décrit l'événement de formulaire soumis ( type script). */
import { useState, FormEvent } from 'react'
import fixture from '../fixtures/posts.json'

const Home = () => {
  const [newPostContent, setNewPostContent] = useState('')//newPostContent stocke le contenu du nouveau post en cours d'écriture
  const [posts, setPosts] = useState(fixture.posts)//posts stocke la liste de tous les posts provenant du tableau posts de l' objet fixture
  /**setNewPostContent et setPosts sont des fonctions qui mettent à jour les valeurs de newPostContent et posts, respectivement. */


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //console.log(newPostContent)
    setPosts((posts) => [...posts,// permet de créer un nouvel array, qui est une copie de l'array posts. 
      { // on ajoute un nouvel objet littéral représentant le nouveau post à ajouter 
        postId: '123', 
        author: 'sami demir', 
        content: newPostContent, 
        createdAt: new Date().toISOString() 
      }
    ]);
  }


  return (
    <div>
      <h1>Home</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.postId}>
              <h2> {post.author}</h2>
              <p> {post.content} </p>
              <time> {post.createdAt}</time>
            </li>
          )
        })}
      </ul>
      <form
        onSubmit={handleSubmit}
      >
        <label>
          Créer un post
          <input
            value={newPostContent} // React donne la valeur à l'input
            type="text"
            placeholder="Entrer votre message"
            required
            onChange={(e) => setNewPostContent(e.target.value)} // L'input dit à React sa valeur
          />
        </label>
        <button type="submit">Poster</button>
        
      </form>
    </div>
  )
}

export default Home

/*const a = () => {
  return 5
}

const b = () => 5*/
