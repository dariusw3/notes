import React, { useEffect } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { fetchNote, deleteNote } from "../../actions";

class NoteDelete extends React.Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  renderActions() {
    return (
      <div>
        <button
          onClick={() => this.props.deleteNote(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </div>
    );
  }

  renderContent() {
    if (!this.props.note) {
      return "Are you sure you want to delete the note?";
    } else {
      return `Are you sure you want to delete the note: ${this.props.note.title} `;
    }
  }

  render() {
    return (
      <Modal
        title="Delete Note"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchNote, deleteNote })(NoteDelete);
