import * as actionTypes from "./actionTypes";
import * as types from "../type";

// export interface NoteState {
//   notes: string[];
// }

// const initialState = {
//   notes: [],
// };

const initialState: types.ArticleState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body: "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
};

// type Action = { type: "ADD_NOTE"; payload: string };

// export const notesReducer = (
//   state: NoteState = initialState,
//   action: Action
// ) => {
//   switch (action.type) {
//     case "ADD_NOTE": {
//       return { ...state, notes: [...state.notes, action.payload] };
//     }
//     default:
//       return state;
//   }
// };

export const reducer = (
  state: types.ArticleState = initialState,
  action: types.ArticleAction
): types.ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: types.IArticle = {
        id: Math.random(), // not really unique
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: types.IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default reducer;
