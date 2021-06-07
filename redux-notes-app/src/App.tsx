// import "./App.css";
// import React from "react";
// import { NewNoteInput } from "./NewNoteInput";
// import { useSelector, useDispatch } from "react-redux";
// import * as types from "./type";
// import * as actionTypes from "./store/actionTypes";
// import { disposeEmitNodes } from "typescript";

// function App() {
//   const notes = useSelector<types.ArticleState, types.ArticleState["articles"]>(
//     (state) => state.articles
//   );

//   const dispatch = useDispatch();

//   const addNote = (note: string) => {
//     dispatch({ type: "ADD_NOTE", payload: note });
//   };

//   return (
//     <>
//       <NewNoteInput addNote={addNote} />
//       <hr />
//       <ul>
//         {notes.map((note) => {
//           return <li key={note}>{note}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// export default App;

import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./styles.css";

import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import { addArticle, removeArticle } from "./store/actionCreators";
import { Dispatch } from "redux";
import * as types from "./type";
import * as actionTypes from "./store/actionTypes";

const App: React.FC = () => {
  const articles: readonly types.IArticle[] = useSelector(
    (state: types.ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: types.IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: types.IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default App;
