import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { Button } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Signin = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);
  return (
    <Container insets={insets}>
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
