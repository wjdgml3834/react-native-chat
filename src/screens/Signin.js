import React from "react";
import styled from " styled-components/native";
import { Button } from "react-native";

const Signin = () => {
  return (
    <Container>
      <StyledText>Sign in</StyledText>
      <Button title="signup" onPress={() => navigation.navigate("Signup")} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: "#111111";
`;

export default Signin;
