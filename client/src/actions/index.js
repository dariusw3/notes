import notes from "../apis/notes";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createNote = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await notes.post("/notes", { ...formValues, userId });

  dispatch({ type: "CREATE_NOTE", payload: response.data });
};

export const fetchNotes = (userId) => async (dispatch) => {
  const response = await notes.get(`/notes?userId=${userId}`);

  dispatch({ type: "FETCH_NOTES", payload: response.data });
};

export const fetchNote = (id) => async (dispatch) => {
  const response = await notes.get(`/notes/${id}`);

  dispatch({ type: "FETCH_NOTE", payload: response.data });
};

export const editNote = (id, formValues) => async (dispatch) => {
  const response = await notes.put(`/notes/${id}`, formValues);

  dispatch({ type: "EDIT_NOTE", payload: response.data });
};

export const deleteNote = (id) => async (dispatch) => {
  await notes.delete(`/notes/${id}`);

  dispatch({ type: "DELETE_NOTE", payload: id });
};
