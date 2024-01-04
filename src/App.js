import React from "react";

/*Component*/
import Track from "./components/Section/Track";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import ContextProvider from "./Context";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Track />
      <Footer />
    </ContextProvider>
  );
}

export default App;
