import { MarkupStatistics } from './Murkup/MurkupStatistics';
import data from '../../../src/data.json';
import { Statistics } from './Statistics.styled';

export const StatisticsSection = () => {
  return (
    <Statistics>
      <MarkupStatistics title="UPLOAD STATS" stats={data} />
    </Statistics>
  );
};
