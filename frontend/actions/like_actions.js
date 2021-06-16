import * as APIUtil from "../util/like_api_util";
import { receiveSong } from "./song_actions";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "REMOVE_LIKE";

export const receiveLike = (song) => ({ type: RECEIVE_LIKE, song });
export const removeLike = (song) => ({ type: DELETE_LIKE, song });

export const createLike = (likerId, songId) => (dispatch) =>
  APIUtil.createLike(likerId, songId).then((song) =>
    dispatch(receiveLike(song))
  );

export const deleteLike = (likeId, song) => (dispatch) =>
  APIUtil.deleteLike(likeId, song).then((song) => dispatch(removeLike(song)));
