import React from "react";
import Todolist from "./features/Todo";
import CalendarSection from "./features/Calendar";
function App() {
  return (
    <div className="App">
      <div className="container">
        <CalendarSection />
        <Todolist />
      </div>
    </div>
  );
}

export default App;
