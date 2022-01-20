import * as firebase from "firebase";
import config from "../firebase.json";

const app = firebase.initializeApp(config);

// firebase.json 파일들에 있는 값들을 이용해 initializeApp 함수를 이용해 값을 호출해준다.
