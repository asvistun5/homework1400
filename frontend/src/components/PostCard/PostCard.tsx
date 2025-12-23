import { PostCardProps } from "../../shared/types/forum";
import styles from './post-card.module.css';


export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="post-card">
      <img className="post-card__image" src={post.image} alt={post.title} />

      <div className="post-card__content">
        <h3 className="post-card__title">{post.title}</h3>
        <p className="post-card__description">{post.shortDescription}</p>

        <div className="post-card__actions">
          <div className="post-card__icons">
            <span>♡</span>
            <span>💬</span>
          </div>

          <button className="post-card__edit">Редагувати ✎</button>
        </div>
      </div>
    </article>
    )
}