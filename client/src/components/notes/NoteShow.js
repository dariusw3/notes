import React from "react";
import { connect } from "react-redux";
import { fetchNote } from "../../actions";

class NoteShow extends React.Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  render() {
    if (!this.props.note) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>{this.props.note.title}</h1>
          <h3>{this.props.note.description}</h3>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchNote })(NoteShow);
