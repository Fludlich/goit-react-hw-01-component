import { Description } from './Description/Description';
import { Stats } from './stats/Stats';
import user from '../../user.json';
import { Box } from './UserSocNet.styled';

export const stats = user.stats;

export const ProfileBox = () => {
  return (
    <Box>
      <Description
        img={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
      />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </Box>
  );
};


