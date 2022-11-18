import PropTypes from 'prop-types';
import {
  Box,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from '../Statistics.styled';

export const MarkupStatistics = ({ title, stats }) => {
  return (
    <Box>
      {' '}
      <Title>{title}</Title>
      <List>
        {stats.map(({ label, percentage, id }) => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <Item key={id} style={{ backgroundColor: `#${randomColor}` }}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};

MarkupStatistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})),
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
};
