import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { Button, Image } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 파이어베이스 로고 스토리지 주소
const LOGO =
  "https://firebasestorage.googleapis.com/v0/b/rn-chat-e7ab8.appspot.com/o/chat-logo.jpeg?alt=media";

const Signin = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);
  return (
    <Container insets={insets}>
      <Image url={LOGO} />
      <StyledText>Sign in</StyledText>
      <Button title="Sign up" onPress={() => console.log("sign in")} />
      <Button
        title="or sign up"
        onPress={() => navigation.navigate("Signup")}
        containerStyle={{ marginTop: 0, backgroundColor: "transparent" }}
        textStyle={{ color: theme.btnTextLink, fontSize: 18 }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

export default Signin;
