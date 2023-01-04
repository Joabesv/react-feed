import { FormEvent, useState } from "react";
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
    type: string & "paragraph" | "link";
    content: string;
  }>;
}

export function Post({ author, content, id, publishedAt }: PostProps) {
  const [comments, setComments]= useState(['bom post']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDate = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  function handleNewCommentChange(event: FormEvent) {
    const commentValue = event.target as HTMLTextAreaElement;
    setNewCommentText(commentValue.value)
  }

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

        <form className={styles.commentForm} onSubmit={(event) => handleCreateNewComment(event)}>
          <strong>Deixe seu feedback!</strong>

          
          <textarea name="comment" placeholder="Deixe seu comentário" value={newCommentText} onChange={handleNewCommentChange} />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          { comments.map(comment => {
            return <Comment content={comment} />
          }) }
        </div>
      </article>
    </>
  );
}
