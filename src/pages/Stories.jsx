import { useEffect, useState } from 'react';
import './Stories.css';

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const mockStories = Array(6).fill(0).map((_, i) => ({
        title: `Mystery of Street ${i + 1}`,
        snippet: `A hidden tale from street ${i + 1} unfolds...`,
        image: '/story.jpg'
      }));
      setStories(mockStories);
    } catch (e) {
      setError(true);
    }
  }, []);

  return (
    <div className="story-container">
      {error && <div className="error-banner">Unable to load stories.</div>}
      <div className="story-grid">
        {stories.map((story, i) => (
          <div key={i} className="story-card">
            <img src={story.image} alt="" />
            <div className="overlay">Read More</div>
            <h3>{story.title}</h3>
            <p>{story.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
