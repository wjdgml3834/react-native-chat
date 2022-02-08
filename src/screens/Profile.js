import React, { useContext, useState } from "react";
import { UserContext } from "../contexts";
import styled from "styled-components/native";
import { Button, Image, Input } from "../components";
import { getCurrentUser } from "../firebase";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Profile = ({ navigation, route }) => {
  const { setUser } = useContext(UserContext);
  const user = getCurrentUser();

  const [photo, setPhoto] = useState(user.photo);
  return (
    <Container>
      <Image showButton url={photo} />
      <Input label="Name" />
      <Input label="Email" />
      <Button title="Sign out" onPress={() => setUser({})} />
    </Container>
  );
};

export default Profile;
