import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headerfive";
import Content from "../sections/login/Content";


const Login = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Login</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Content />
    </Fragment>
  );
};
export default Login;
