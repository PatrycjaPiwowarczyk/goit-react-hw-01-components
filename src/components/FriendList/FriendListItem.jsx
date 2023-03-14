import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.friendList__item}>
      <span
        className={css['friendList__isOnline-' + friend.isOnline.toString()]}
      ></span>
      <img
        className={css.friendList__img}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendList__name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
