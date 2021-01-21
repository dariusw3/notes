import React from "react";
import GoogleAuth from "../GoogleAuth";

const NotesHome = () => {
  return (
    <div>
      <h1>Take Notes</h1>
      <p>sign in to start taking notes</p>
      <GoogleAuth />
    </div>
  );
};

export default NotesHome;
