import React from "react";
import PropTypes from 'prop-types';
import s from './FriendList.module.scss';
import FriendListItem
 from "./FriendListItem";
const FriendList = ({friends})=>{
   return (
      <ul className={s.FriendList}>
      {friends.map(friend => (
            <FriendListItem
               key={friend.id}
               avatar={friend.avatar}
               name={friend.name}
               isOnline={friend.isOnline}
            />))
      }
      </ul> 
   )
};

FriendList.propTypes = {
      friend: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.bool.isRequired,}),
   ).isRequired,
};   

export default FriendList;