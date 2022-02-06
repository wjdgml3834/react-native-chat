import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Button, ErrorMessage, Image, Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signup } from "../firebase";
import { Alert } from "react-native";
import { validateEmail, removeWhitespace } from "../utils";

const DEFAULT_PHOTO =
  "https://firebasestorage.googleapis.com/v0/b/rn-chat-e7ab8.appspot.com/o/character.jpeg?alt=media";

const Signup = ({ navigation }) => {
  const [photo, setPhoto] = useState(DEFAULT_PHOTO);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const refPasswordConfirm = useRef(null);
  const refDidMount = useRef(null);

  useEffect(() => {
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage)
    );
  }, [email, name, password, passwordConfirm, errorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let error = "";
      if (!name) error = "please enter your name";
      else if (!email) {
        error = "please enter your email";
      } else if (!validateEmail(email)) {
        error = "please verify your email";
      } else if (password.length < 6) {
        error = "The password must contain 6 characters at least";
      } else if (password !== passwordConfirm) {
        error = "Password need to match";
      } else {
        error = "";
      }
      setErrorMessage(error);
    } else {
      refDidMount.current = true;
    }
  }, [email, name, password, passwordConfirm]);

  const _handleSignupBtnPress = async () => {
    try {
      const user = await signup({ name, email, password, photo });
      navigation.navigate("Profile", { user });
    } catch (e) {
      Alert.alert("Signup Erorr", e.message);
    }
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Image showButton={true} url={photo} onChangePhoto={setPhoto} />
        <Input
          label="Name"
          placeholder="Name"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => refEmail.current.focus()}
          onBlur={() => setName(name.trim())}
          maxLength={12}
        />
        <Input
          ref={refEmail}
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => refPassword.current.focus()}
          onBlur={() => setEmail(removeWhitespace(email))}
        />
        <Input
          ref={refPassword}
          label="Password"
          placeholder="Password"
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          onSubmitEditing={() => refPasswordConfirm.current.focus()}
          onBlur={() => setPassword(removeWhitespace(password))}
        />
        <Input
          ref={refPasswordConfirm}
          label="Password Confirm"
          placeholder="Password"
          returnKeyType="done"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          isPassword={true}
          onSubmitEditing={_handleSignupBtnPress}
          onBlur={() => setPasswordConfirm(removeWhitespace(passwordConfirm))}
        />
        <ErrorMessage message={errorMessage} />
        <Button
          title="Sign up"
          onPress={_handleSignupBtnPress}
          disabled={disabled}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 50px 20px;
`;

export default Signup;
