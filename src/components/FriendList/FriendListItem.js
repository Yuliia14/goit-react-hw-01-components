import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
          <li key={id} className={styles.item}>
            <span
              className={styles.status}
              style={
                isOnline
                  ? { backgroundColor: 'green' }
                  : { backgroundColor: 'red' }
              }
            />
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
    );
  };
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };

  export default FriendListItem;