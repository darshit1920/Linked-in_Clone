import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "./features/userSlice";
import { auth } from "./Firebase";
import "./Login.css";

export default function Login() {
  const [signup, setSignUp] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Name is Required");
    }
    if (!name) {
      return alert("Name is Required");
    }
    if (!photoURL) {
      return alert("PhotoURL is Required");
    }
    if (!email) {
      return alert("Email is Required");
    }
    if (!password) {
      return alert("Password is Required");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              loginuser({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: photoURL,
                displayName: name,
              })
            );
          });
      })
      .catch((error) => alert(error));
    setName("");
    setPhotoURL("");
    setEmail("");
    setPassword("");
  };
  const signIn = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Email is Required");
    }
    if (!password) {
      return alert("Password is Required");
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          loginuser({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className="loginScreen">
        <img
          src="https://th.bing.com/th/id/OIP.aEsEgSvefAqikKuFjr5p7wHaFj?pid=ImgDet&rs=1"
          alt=""
        />
        {signup === true ? (
          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Profile Picture URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="SignUp" />
            <h4>
              Already a member{" "}
              <span onClick={(e) => setSignUp(false)}>Login Here</span>
            </h4>
          </form>
        ) : (
          <form onSubmit={signIn}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="SignIn" />
            <h4>
              Not a member{" "}
              <span onClick={(e) => setSignUp(true)}>Register Here</span>
            </h4>
          </form>
        )}
      </div>
    </>
  );
}
