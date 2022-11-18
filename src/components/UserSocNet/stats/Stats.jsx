import { List, Item, Label, Quantity } from '../UserSocNet.styled';
import PropTypes from 'prop-types';

export const Stats = ({ followers = '0', views = '0', likes = '0' }) => {
  return (
    <List>
      <Item>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </List>
  );
};

Stats.propTypes = {
  followers: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
};
