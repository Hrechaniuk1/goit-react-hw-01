export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className="card-wrapper">
  <div className="img-wrapper"> 
    <img
      className="main-img"
      src={image}
      alt={name}
    />
    <p className="prof-name">{name}</p>
    <p className="prof-text">@{tag}</p>
    <p className="prof-text">{location}</p>
  </div>
  <ul className="prof-list">
    <li className="stats-info">
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className="stats-info">
      <span>Views</span>
    <span>{stats.views}</span>
    </li>
    <li className="stats-info">
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}