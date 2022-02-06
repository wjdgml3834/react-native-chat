import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import config from "../firebase.json";
// firebase.json 파일들에 있는 값들을 이용해 initializeApp 함수를 이용해 값을 호출해준다.

const app = initializeApp(config);

const auth = getAuth(app);

export const signin = async ({ email, password }) => {
  const { user } = signInWithEmailAndPassword(auth, email, password);

  return user;
};
