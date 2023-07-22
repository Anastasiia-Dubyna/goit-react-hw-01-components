import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <li className={css.item}>
      <span
        style={{
          display: 'block',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: isOnline ? 'green' : 'red',
        }}
        className={css.status}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
