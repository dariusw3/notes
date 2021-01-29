import React from "react";
import { connect } from "react-redux";
import { editNote, fetchNote } from "../../actions";
import NoteForm from "./NoteForm";
import _ from "lodash";

class NoteEdit extends React.Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editNote(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    if (!this.props.note) {
      return <div>Loading..</div>;
    } else {
    }
    return (
      <div>
        <NoteForm
          initialValues={_.pick(this.props.note, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editNote, fetchNote })(NoteEdit);
