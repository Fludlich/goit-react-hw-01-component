import PropTypes from 'prop-types'
import {
  DescriptionBox,
  Avatar,
  Name,
  Tag,
  Location,
} from '../UserSocNet.styled';

export const Description = ({
  img = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  name = 'No Info',
  tag = 'No Info',
  location = 'No Info',
}) => {
  return (
    <DescriptionBox>
      <Avatar src={img} alt="User avatar" />
      <Name>{name}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionBox>
  );
};

Description.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
