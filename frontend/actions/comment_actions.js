import * as APIUtil from "../util/comment_api_util";

import { receiveSong } from "./song_actions";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const createComment = (comment, songId) => (dispatch) =>
  APIUtil.createComment(comment, songId).then((song) =>
    dispatch(receiveSong(song))
  );

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};
