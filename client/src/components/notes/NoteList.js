import React from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions";
import { Link } from "react-router-dom";

import img2 from "../img/mana create.png";
import img1 from "../img/Saly-25.svg";

import renderHTML from "react-render-html";

class NoteList extends React.Component {
  componentDidMount() {
    this.props.fetchNotes(this.props.currentUserId);
  }

  renderList() {
    return this.props.notes.map((note) => {
      return (
        <div className="item" key={note.id}>
          <Link to={`/notes/edit/${note.id}`} className="card-header">
            <div className="content">
              <div className="header-wrap">{note.title}</div>
              <div className="card-description">
                {renderHTML(note.description)}
              </div>
            </div>
          </Link>
          <div className="btn-container">
            {/* <Link to={`/notes/edit/${note.id}`} className="card-icon-e">
              <i class="fas fa-pencil-alt"></i>
            </Link> */}
            <Link to={`/notes/delete/${note.id}`} className="card-icon">
              <i class="fas fa-trash"></i>
            </Link>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.currentUserId) {
      return (
        <div className="item-create">
          <Link to="/notes/new">
            <img
              className="create-note-img"
              src={img2}
              alt="this is an image of a hand"
            />
            <h3 className="create-note-title">Create a new Note</h3>
          </Link>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.currentUserId);
    return (
      <div>
        {/* <h1 className="notes-title">Notes</h1> */}

        <div className="list-container">
          {this.renderCreate()}
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: Object.values(state.notes),
    currentUserId: state.auth.userId,
    IsSignedIn: state.auth.IsSignedIn,
  };
};
export default connect(mapStateToProps, { fetchNotes })(NoteList);
