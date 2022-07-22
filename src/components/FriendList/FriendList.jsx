import css from "./FriendList.module.css";
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={css.item} key={id}>
            <span
              className={css.status}
              style={{ backgroundColor: isOnline ? "#00ff62" : "#ff0000" }}
            ></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
