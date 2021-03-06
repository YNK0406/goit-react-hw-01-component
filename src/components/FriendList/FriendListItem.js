import React from "react";
import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

const FriendListItem = ({name, avatar, isOnline})=>{
      let color;
      if (isOnline) {
          color = '#008000';
      } else {
          color = '#ff0000';
      }
      return (
      <li className={s.Item}>
         <span className={s.Status} style={{ backgroundColor: `${color}`}}></span>
         <img className={s.Avatar} src={avatar} alt="User avatar" width="48" />
         <p className={s.Name}>{name}</p>
      </li>
   )
};

FriendListItem.propTypes = {
   isOnline: PropTypes.bool.isRequired,
   name: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,

};
export default FriendListItem;