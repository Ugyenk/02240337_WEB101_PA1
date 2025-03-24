import React, { useState } from "react";
import "./Sidebar.css";
import { FaSearch, FaBell, FaPlusCircle } from "react-icons/fa";

const Sidebar = () => {
  const chats = [
    { name: "NuKu", status: "New Snap", time: "3m", streak: 298, avatar: "nuku.webp" },
    { name: "Kanisha Pradhan", status: "New Snap", time: "7m", streak: 226, avatar: "2.webp" },
    { name: "Namgay Lhamo", status: "New Snap on mobile", time: "2h", streak: 64, avatar: "3.webp" },
    { name: "Tshering BidhaYangzom", status: "New Snap", time: "Mar 9", streak: 23, avatar: "tby.webp" },
    { name: "Chimmy", status: "New Snap", time: "1d", streak: 27, avatar: "chimy.webp" },
    { name: "33.yd", status: "Opened", time: "2h", streak: 105, avatar: "1.webp" },
  ];

  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="/profile.webp" alt="User" className="sidebar-avatar" />
          <FaBell className="sidebar-icon" />
          <FaPlusCircle className="sidebar-icon" />
        </div>

        <div className="sidebar-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="sidebar-ai">
          <p>My AI</p>
          <img src="/ai.webp" alt="AI" className="ai-avatar" />
        </div>

        <div className="sidebar-chats">
          {chats.map((chat, index) => (
            <div key={index} className="chat-item" onClick={() => setSelectedChat(chat)}>
              <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
              <div className="chat-info">
                <h4>{chat.name}</h4>
                <p className="chat-status">
                  {chat.status} • {chat.time} • 🔥 {chat.streak}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {selectedChat ? (
          <div className="chat-box">
            <div className="chat-header">
              <img src={selectedChat.avatar} alt={selectedChat.name} className="chat-avatar" />
              <h4>{selectedChat.name}</h4>
            </div>
            <div className="chat-messages">
              <p className="message">Opened</p>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Send a chat" />
              <button>Send</button>
            </div>
          </div>
        ) : (
          <p>Select a chat to start messaging</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
