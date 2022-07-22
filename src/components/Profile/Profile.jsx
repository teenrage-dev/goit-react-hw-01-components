import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={avatar}
          className={css.avatar}
          width="128"
          height="128"
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>
            Followers <br />
          </span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>
            Views <br />
          </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>
            Likes <br />
          </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
