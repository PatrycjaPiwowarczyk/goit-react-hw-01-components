import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <section className={css.profile}>
      <div className={css.profile__box}>
        <img className={css.profile__img} src={avatar} alt="User avatar" />
        <p className={css.profile__name}>{username}</p>
        <p className={css.profile__tag}>{tag}</p>
        <p className={css.profile__location}>{location}</p>
      </div>
      <ul className={css.profile__stats}>
        <li>
          <span className={css.profile__statsLabel}>Followers</span>
          <span className={css.profile__statsQuantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.profile__statsLabel}>Views</span>
          <span className={css.profile__statsQuantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.profile__statsLabel}>Likes</span>
          <span className={css.profile__statsQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
