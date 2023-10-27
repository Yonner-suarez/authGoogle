import { useEffect } from "react";
import "./App.css";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

function App() {
  const clientId =
    "90839000581-8b5ojh67s8h88bqqmti46sv1j8cmf5rt.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const Failure = (response) => {
    console.log(response);
  };
  const Success = (response) => {
    console.log(response);
  };
  return (
    <>
      <GoogleLogin
        clientId={clientId}
        onSuccess={Success}
        onFailure={Failure}
        cookiePolicy={"single_host_policy"}
      />
    </>
  );
}

export default App;
