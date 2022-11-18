import { MarkupStatistics } from './Murkup/MurkupStatistics';
import data from '../../../src/data.json';
import { Statistics } from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatisticsSection = () => {
  return (
    <Statistics>
      <MarkupStatistics title="UPLOAD STATS" stats={data} />
    </Statistics>
  );
};



// MarkupStatistics.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({}))
// };