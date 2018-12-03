import { combineReducers } from 'redux';

import search from './search';
import profile from './profile';
import repos from './repos';

export default combineReducers({
  search,
  profile,
  repos,
});
