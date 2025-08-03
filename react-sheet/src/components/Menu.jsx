import React, { useState } from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import { Timer, Stopwatch} from './Stopwatch';
import Accordian from './Accordian';
import MessagingApp from './MessagingApp';

function Menu() {
  const buttonTabs = ["Home", "Todo", "Counter", "Messages"]
  const dropdownTabs = ["Stopwatch", "Timer",]
  const [activeTab, setActiveTab] = useState("Home")
  const toggleActiveTab = (tab) => {
    console.log("tab", tab);
    setActiveTab(tab)
  }

  const renderHomePage = () => {
    return(
        <>
            <div style={{color: "Black"}}> Welcome To Home Page! </div>
            <Accordian />
        </>
    );
  }

  const renderContent = () => {
    switch(activeTab){
        case "Home": return renderHomePage();
        case "Stopwatch": return <Stopwatch />;
        case "Timer": return <Timer />;
        case "Todo": return <TodoList />;
        case "Counter": return <Counter />;
        case "Messages": return <MessagingApp />
        default: return null;
    }
  }

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {/* Render as buttons */}
        {buttonTabs.map(tab => (
            <button key={tab} onClick={() => toggleActiveTab(tab)}>
            {tab}
            </button>
        ))}

        {/* Render dropdown */}
        <select value={dropdownTabs.includes(activeTab) ? activeTab : ""} onChange={(e) => toggleActiveTab(e.target.value)} >
            <option value="">Clock</option>
            {dropdownTabs.map(tab => (
                <option key={tab} value={tab}>
                    {tab}
                </option>
            ))}
        </select>
        </div>
      <div className="tabs-content">{renderContent()}</div>
    </div>
  );
}

export default Menu;

