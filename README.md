# Snapchat Replica

## 📌 Overview
This is a Snapchat Replica web application that includes a sidebar for conversations, a chat box, and a story section. Users can interact with chat messages, view stories, and navigate through an intuitive UI.

## 🚀 Features
- **Sidebar:** Displays user conversations and AI assistant chat.
- **Chat Box:** Expands to fill the right side for an immersive chatting experience.
- **Story Component:** Displays user stories with hover effects.
- **Responsive Design:** Works across different screen sizes.

## 🛠️ Tech Stack
- **Frontend:** React.js
- **Styling:** CSS
- **State Management:** useState, useEffect
- **Package Manager:** npm

## 📂 Folder Structure
```
/src
  ├── components
  │   ├── Sidebar.js
  │   ├── ChatBox.js
  │   ├── Story.js
  │   ├── styles
  │   │   ├── Sidebar.css
  │   │   ├── ChatBox.css
  │   │   ├── Story.css
  ├── App.js
  ├── index.js
  ├── README.md
```
## Code Explaination
/* Story container positioned on the right side */
.story-container {
  width: 200px; /* Set the width of the story section */
  height: 100vh; /* Full viewport height */
  background: #fff; /* White background */
  border-left: 1px solid #ddd; /* Adds a separator line */
  padding: 10px; /* Add spacing inside */
  overflow-y: auto; /* Enable vertical scrolling */
  display: flex;
  flex-direction: column; /* Stack stories vertically */
  align-items: center; /* Center-align stories */
}

/* Individual story item styling */
.story-item {
  width: 100%; /* Take full width of container */
  margin-bottom: 15px; /* Space between stories */
  border-radius: 10px; /* Rounded corners */
  overflow: hidden; /* Hide overflowed content */
  cursor: pointer; /* Indicate clickability */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth effects */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow */
}

/* Hover effect: Slightly enlarges and enhances shadow */
.story-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Ensure images fit well within story items */
.story-item img {
  width: 100%; /* Fill the story container */
  border-radius: 10px; /* Keep rounded corners */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-container {
    width: 180px; /* Reduce width on smaller screens */
  }
}

@media (max-width: 480px) {
  .story-container {
    width: 160px; /* Further reduce width on mobile */
  }
}~

## 🏗️ Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/snapchat-replica.git
   cd snapchat-replica
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 🔥 Usage
- Click on a chat to expand the conversation.
- Click on a story to view it with animation.
- Responsive layout ensures smooth experience across devices.

## 🎨 UI Enhancements
- Smooth hover effects on stories.
- Animated interactions in the chat section.
- Scrolling support for long chat lists.

## 🤝 Contributing
Pull requests are welcome! Please open an issue to discuss changes before making updates.

## 📜 License
MIT License

