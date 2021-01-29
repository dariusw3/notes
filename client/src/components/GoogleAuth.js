import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, fetchNotes } from "../actions";
import history from "../history";

// ----- CSS

import "./Styles.css";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "455194019277-oobnh5uvjrr4dcao67n9hkoiktp05fsq.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .then(() => {
          if (document.location.href === "http://localhost:3000/notes/list") {
            this.props.fetchNotes(this.auth.currentUser.get().getId());
          } else {
            return;
          }
        });
    });

    console.log(document.location.href);
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn().then(() => {
      history.push("/notes/list");
    });
  };

  onSignOutClick = () => {
    this.auth.signOut().then(() => {
      history.push("/");
    });
  };

  renderAuthButton(props) {
    console.log(this.props.changeClass);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className={this.props.changeClass}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className={this.props.changeClass}>
          <i className="google icon" />
          Continue with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut, fetchNotes })(
  GoogleAuth
);
