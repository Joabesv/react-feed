import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";

export interface PostProps {
  id: string;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: Array<{
    type: (string & "paragraph") | "link";
    content: string;
  }>;
}

export function Post({ author, content, id, publishedAt }: PostProps) {
  const publishedDate = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={publishedDate} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p>
                  <a href="https://www.linkedin.com/in/Joabesv">
                    {line.content}
                  </a>
                </p>
              );
            }
          })}
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
            <Avatar src="https://github.com/Joabesv.png" />
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
