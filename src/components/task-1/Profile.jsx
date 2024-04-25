
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.cardWrapper}>
  <div className={css.imgWrapper}> 
    <img
      className={css.mainImg}
      src={image}
      alt={name}
    />
    <p className={css.profName}>{name}</p>
    <p className={css.profName}>@{tag}</p>
    <p className={css.profName}>{location}</p>
  </div>
  <ul className={css.profList}>
    <li className={css.statsInfo}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li> 
    <li className={css.statsInfo}>
      <span>Views</span>
    <span>{stats.views}</span>
    </li>
    <li className={css.statsInfo}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}