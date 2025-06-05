import React, { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dados = await resposta.json();
        setPosts(dados);
      } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong><br />
              {post.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
