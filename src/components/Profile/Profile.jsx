
import { List, Item, Label, Quantity, Box, DescriptionBox,
  Avatar,
  Name,
  Tag,
  Location, } from './Profile.styled';
  import PropTypes from 'prop-types'

export const Profile = ({ username, tag, location, avatar, stats }) => {

  return (
    <Box>
      
        <DescriptionBox>
          <Avatar src={avatar} alt={username} />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </DescriptionBox>

        <List>
          <Item>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </Item>
          <Item>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </Item>
          <Item>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </Item>
        </List>
     
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
