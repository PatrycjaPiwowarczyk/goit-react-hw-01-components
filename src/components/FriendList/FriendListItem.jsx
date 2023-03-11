import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
  return (
    <li>
      <span>{friend.isOnline}</span>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
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
