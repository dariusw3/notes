import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./notes/Header";

import NoteCreate from "./notes/NoteCreate";
import NoteDelete from "./notes/NoteDelete";
import NoteEdit from "./notes/NoteEdit";
import NoteList from "./notes/NoteList";
import NoteShow from "./notes/NoteShow";
import Landing from "./notes/Landing";

import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Header />
          </Switch>
          <Switch>
            <Route path="/notes/list" exact component={NoteList} />
            <Route path="/notes/new" exact component={NoteCreate} />
            <Route path="/notes/edit/:id" exact component={NoteEdit} />
            <Route path="/notes/delete/:id" exact component={NoteDelete} />
            <Route path="/notes/:id" exact component={NoteShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
