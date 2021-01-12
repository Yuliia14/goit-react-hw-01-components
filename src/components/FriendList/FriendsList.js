import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

import FriendListtem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(item => (
        <FriendListtem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
