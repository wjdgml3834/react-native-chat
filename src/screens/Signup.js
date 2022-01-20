import React from "react";
import styled from "@emotion/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

const Signup = () => {
  return (
    <Container>
      <StyledText>Sign up</StyledText>
    </Container>
  );
};

export default Signup;
