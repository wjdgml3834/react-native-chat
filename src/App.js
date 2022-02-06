import React from "react";
import { StatusBar } from "react-native";
// 상태바 설정
import { ThemeProvider } from "styled-components";
// theme 불러오기 위해서
import { theme } from "./theme";
import Navigation from "./navigations";
import { UserProvider, ProgressProvider } from "./contexts";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        <UserProvider>
          <StatusBar
            backgroundColor={theme.background}
            barStyle="dark-content"
          />
          <Navigation />
        </UserProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default App;
