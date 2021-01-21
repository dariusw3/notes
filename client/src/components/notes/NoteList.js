import React from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions";

class NoteList extends React.Component {
  componentDidMount() {
    console.log(this.props.currentUserId);
    this.props.fetchNotes(this.props.currentUserId);
  }

  shouldComponentUpdate() {
    // return false;
  }

  renderAdmin(note) {
    return (
      <div className="right floated content">
        <button className="ui button primary">Edit</button>
        <button className="ui button negative">Delete</button>
      </div>
    );
  }

  renderList() {
    return this.props.notes.map((note) => {
      return (
        <div className="item" key={note.id}>
          {this.renderAdmin(note)}
          <i className="large middle aligned icon sticky note" />
          <div className="content">
            {note.title}
            <div className="description">{note.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Notes</h2>
        <div className="ui celled list">{this.renderList()}</div>
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
