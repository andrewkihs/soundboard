import * as APIUtil from "../util/like_api_util";
import { receiveSong } from "./song_actions";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "RECEIVE_LIKE";

export const createLike = (likerId, songId) => (dispatch) =>
  APIUtil.createLike(likerId, songId).then((song) =>
    dispatch(receiveSong(song))
  );

export const deleteLike = (likeId, song) => (dispatch) =>
  APIUtil.deleteLike(likeId, song.id).then(() => dispatch(receiveSong(song)));
