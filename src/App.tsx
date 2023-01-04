import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts: PostProps[] = [
  {
    id: crypto.randomUUID(),
    author: {
      avatarUrl: "https://github.com/Joabesv.png",
      name: "Joabesv",
      role: "FullStack dev",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Need a job, share my linkedin if you can, would help a lot :)",
      },
      {
        type: "link",
        content:
          '👉 Joabe Silva',
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    author: {
      avatarUrl: "https://github.com/brMonteiro-G.png",
      name: "Gabriel Monteiro",
      role: "FullStack dev",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Need a job, share my linkedin if you can, would help a lot :)",
      },
      {
        type: "link",
        content:
          '👉 Joabe Silva',
      },
    ],
    publishedAt: new Date(),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* Aqui ficaram os posts do feed */}
          { posts.map(({ author, content, publishedAt,id }) => {
            return (
              <Post
                // key={id} 
                author={author}
                content={content}
                publishedAt={publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </>
  );
}

export default App;
