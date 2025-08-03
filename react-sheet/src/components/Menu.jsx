import React, { useState } from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import { Timer, Stopwatch} from './Stopwatch';

function Menu() {
  const tabs = ["Home", "Stopwatch", "Timer", "Todo", "Counter"]
  const [activeTab, setActiveTab] = useState("Home")
  const toggleActiveTab = (tab) => {
    console.log("tab", tab);
    setActiveTab(tab)
  }

  const renderHomePage = () => {
    return(
        <div> Welcome To Home Page! </div>
    );
  }

  const renderContent = () => {
    switch(activeTab){
        case "Home": return renderHomePage();
        case "Stopwatch": return <Stopwatch />;
        case "Timer": return <Timer />;
        case "Todo": return <TodoList />;
        case "Counter": return <Counter />;
        default: return null;
    }
  }

  return (
    <div className="tabs-container">
      <div className="tabs-header">
      	{tabs.map(tab => (
      		<button onClick={() => toggleActiveTab(tab)}>{tab}</button> 
      	))}
      </div>
      <div className="tabs-content">{renderContent()}</div>
    </div>
  );
}

export default Menu;

