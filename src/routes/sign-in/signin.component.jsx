import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up/signup.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with google popups</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
