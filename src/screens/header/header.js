import React from "react";
import { withRouter } from "react-router-dom";
import GuestNav from './guestNav';
export default withRouter(function Header({ location, history }) {
    return (
        <GuestNav  />

    );
});