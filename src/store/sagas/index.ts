import { all } from 'redux-saga/effects'
import { AuthenticateWatcher } from './authenticate.saga'
import { FollowWatcher } from './follow.saga'
import { SubscribeWatcher } from './subscribe.saga'
import { ClapWatcher } from './clap.saga'
import { LikeWatcher } from './like.saga'
import { BookmarkWatcher } from './bookmark.saga'
import { CommentWatcher } from './comment.saga'
import { MediaWatcher } from './media.saga'

export default function* rootSaga() {
  yield all([AuthenticateWatcher(), FollowWatcher(), SubscribeWatcher(), ClapWatcher(), LikeWatcher(), BookmarkWatcher(), CommentWatcher(), MediaWatcher()])
}
