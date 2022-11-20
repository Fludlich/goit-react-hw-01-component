// import { MarkupStatistics } from './Murkup/MurkupStatistics';

// import { Statistics } from './Statistics.styled';
import PropTypes from 'prop-types';

import {
  Box,
  Statistics,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';


export const Statistic = ({ stats, title }) => {
  return (
    <Statistics>
      <Title>{title}</Title>

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}` }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Statistics>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};