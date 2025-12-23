import { PostCardProps } from "../../shared/types/forum";
import like from '../../assets/icons/like.svg';
import comm from '../../assets/icons/comment.svg';
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
            <span><img src={like}/></span>
            <span><img src={comm}/></span>
          </div>

          <button className="post-card__edit">Редагувати 
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 30.0375C2.175 30.0375 1.46875 29.7438 0.88125 29.1563C0.29375 28.5688 0 27.8625 0 27.0375V6.0375C0 5.2125 0.29375 4.50625 0.88125 3.91875C1.46875 3.33125 2.175 3.0375 3 3.0375H16.3875L13.3875 6.0375H3V27.0375H24V16.6125L27 13.6125V27.0375C27 27.8625 26.7063 28.5688 26.1188 29.1563C25.5313 29.7438 24.825 30.0375 24 30.0375H3ZM9 21.0375V14.6625L22.7625 0.9C23.0625 0.6 23.4 0.375 23.775 0.225C24.15 0.075 24.525 0 24.9 0C25.3 0 25.6813 0.075 26.0438 0.225C26.4063 0.375 26.7375 0.6 27.0375 0.9L29.1375 3.0375C29.4125 3.3375 29.625 3.66875 29.775 4.03125C29.925 4.39375 30 4.7625 30 5.1375C30 5.5125 29.9313 5.88125 29.7938 6.24375C29.6563 6.60625 29.4375 6.9375 29.1375 7.2375L15.375 21.0375H9ZM12 18.0375H14.1L22.8 9.3375L21.75 8.2875L20.6625 7.2375L12 15.9V18.0375Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
    )
}