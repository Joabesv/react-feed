import { Comment } from "./Comment";
import { Avatar } from './Avatar'

import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar
              src="https://github.com/Joabesv.png"
            />
            <div className={styles.authorInfo}>
              <strong>Joabe Silva</strong>
              <span>Dev</span>
            </div>
          </div>

          <time title="Publicado faz cota" dateTime="2022-05-13">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Need a job, share my linkedin if you can, would help a lot :)</p>
          <p>
            👉 <a href="https://www.linkedin.com/in/Joabesv">Joabe Silva</a>
          </p>
          <p>
            <a href="">#jobs #javascript #dev</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback!</strong>

          <textarea placeholder="Deixe seu comentário" />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
      </article>

      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar
              src="https://github.com/Joabesv.png"
            />
            <div className={styles.authorInfo}>
              <strong>Joabe Silva</strong>
              <span>Dev</span>
            </div>
          </div>

          <time title="Publicado faz cota" dateTime="2022-05-13">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Need a job, share my linkedin if you can, would help a lot :)</p>
          <p>
            👉 <a href="https://www.linkedin.com/in/Joabesv">Joabe Silva</a>
          </p>
          <p>
            <a href="">#jobs</a> <a href="">#javascript</a> <a href="">#dev</a>{" "}
          </p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback!</strong>

          <textarea placeholder="Deixe seu comentário" />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
