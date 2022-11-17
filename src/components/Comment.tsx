import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

interface IComentProps {
  content: string;
  onDeleteComment: (coment: string) => void;
  //aqui estou colocando uma função dentro do interface, coloquei que ela recebe algo e tipei esse algo((coment: string))
  //e coloquei como void pois como podemos ver no arquivo post.tsx ela não retorna nada!
}

export function Comment({ content, onDeleteComment }: IComentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDelteComment() {
    onDeleteComment(content);
    // chamei a função onDeleteComment passando uma informação sobre o comentario, e no caso dessa aplicaçã,
    // a unica informação existente no comentario é o content, mas por exemplo se tivesse o id, seria a melhor opção
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Erick10Kito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDelteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
