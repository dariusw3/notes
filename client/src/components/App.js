import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NotesHome from "./notes/NotesHome";

import NoteCreate from "./notes/NoteCreate";
import NoteDelete from "./notes/NoteDelete";
import NoteEdit from "./notes/NoteEdit";
import NoteList from "./notes/NoteList";
import NoteShow from "./notes/NoteShow";

const App = () => {
  return (
    <div>
      <NotesHome />
      <BrowserRouter>
        <div>
          {/* <Route path="/" exact component={NotesHome} /> */}
          <Route path="/notes/list" exact component={NoteList} />
          <Route path="/notes/new" exact component={NoteCreate} />
          <Route path="/notes/edit" exact component={NoteEdit} />
          <Route path="/notes/delete" exact component={NoteDelete} />
          <Route path="/notes/show" exact component={NoteShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
