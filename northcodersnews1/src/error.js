import React from "react";

const ErrorHandler = props => {
  return <p>{props.location.state.msg}</p>;
};
export default ErrorHandler;

// .catch(error => {
//     this.props.navigate("/error", {
//       replace: true,
//       state: {
//         status: 404,
//         from: "/articles",
//         msg: "page not found"
//       }
//     });
//   });
