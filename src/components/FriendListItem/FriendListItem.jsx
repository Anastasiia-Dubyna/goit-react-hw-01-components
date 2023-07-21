export const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <li className="item">
      <span
        style={{
          display: 'block',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: isOnline ? 'green' : 'red',
        }}
        className="status"
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
