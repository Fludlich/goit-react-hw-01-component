import PropTypes from 'prop-types';

import { List, Item, Status, Avatar, Name } from './FriendList.styled';


export const FriendList = ({friends}) => {
  return (
    <List>
      {friends.map(({ name, avatar, id, isOnline }) => {
        return (
          <Item key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})),
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
}
