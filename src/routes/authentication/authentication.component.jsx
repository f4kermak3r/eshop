import SignUp from "../../components/sign-up/signup.component";
import SignIn from "../../components/sign-in/signin.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
