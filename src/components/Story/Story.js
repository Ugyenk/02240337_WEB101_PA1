import React from "react";
import "./Story.css";

const Story = ({ stories }) => {
  return (
    <div className="story-section">
      {stories.map((story, index) => (
        <div key={index} className="story-item">
          <img src={story.image} alt={`Story ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Story;
