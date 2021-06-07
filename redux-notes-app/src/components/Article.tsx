import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import * as types from "../type";
import * as actionTypes from "../store/actionTypes";

type Props = {
  article: types.IArticle;
  removeArticle: (article: types.IArticle) => void;
};

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (article: types.IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};
