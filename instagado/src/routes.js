import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from './pages/Feed';

const Routes = createAppContainer(
    createStackNavigator({
        Feed,
    },{
        initialRouteName: 'Feed',
      })
);

export default Routes;