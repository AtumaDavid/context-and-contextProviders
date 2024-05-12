import React from "react";
import Button from "./Button";
import Header from "./Header";

const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    // checks if the previous theme is "light". If it is, it returns "dark"; otherwise, it returns "light"
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default App;
