import { combineReducers } from 'redux'
import global from './global.reducer'
import postDetail from './post-detail.reducer'
import Authenticate from './authenticate.reducer'
import Follow from './follow.reducer'
import Subscribe from './subscribe.reducer'
import Clap from './clap.reducer'
import Like from './like.reducer'
import Bookmark from './bookmark.reducer'
import Comment from './comment.reducer'
import Media from './media.reducer'

const reducers = combineReducers({
  global,
  postDetail,
  Authenticate,
  Follow,
  Subscribe,
  Clap,
  Like,
  Bookmark,
  Comment,
  Media,
})

export default reducers
