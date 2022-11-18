import { Description } from './Description/Description';
import { Stats } from './stats/Stats';

import { Box } from './UserSocNet.styled';

// export const stats = user.stats;

export const ProfileBox = ({user}) => {
  return (
    <Box>
      <Description
        img={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
      />
      <Stats
      
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </Box>
  );
};


