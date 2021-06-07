import * as types from "../type";
import * as actionTypes from "./actionTypes";

export function addArticle(article: types.IArticle) {
  const action: types.ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: types.IArticle) {
  const action: types.ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: types.ArticleAction) {
  return (dispatch: types.DispatchType) => {
    // setTimeout(() => {
    dispatch(action);
    // }, 500)
  };
}
