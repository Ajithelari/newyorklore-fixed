import React, { useEffect, useState } from 'react';

const mockStories = [
  { id: 1, title: "Subway Whisper", image: "/story1.jpg", snippet: "Heard a voice..." },
  { id: 2, title: "Ghost on 5th Ave", image: "/story2.jpg", snippet: "Strange shadows..." },
  { id: 3, title: "Empire Lights", image: "/story3.jpg", snippet: "Neon reflections..." },
  { id: 4, title: "Deli Conversations", image: "/story4.jpg", snippet: "Unexpected chats..." },
  { id: 5, title: "Taxi Confessions", image: "/story5.jpg", snippet: "Midnight truths..." },
  { id: 6, title: "Lost in Central Park", image: "/story6.jpg", snippet: "Wanderer's tale..." },
];

function Stories() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setStories(mockStories);
    } catch {
      setError(true);
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Stories</h1>

      <section className="max-w-3xl mx-auto text-gray-700 space-y-4 mb-6">
        <p>New York is filled with whispers of the past. On every block, a new story is waiting to be unearthed.</p>
        <p>Whether you’re a native or a traveler, join us in chronicling the legends that define the city’s soul.</p>
      </section>

      {error && <div className="bg-red-100 text-red-700 p-4 mb-4">Unable to load stories.</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stories.map(story => (
          <div key={story.id} className="relative group overflow-hidden rounded shadow-md">
            <img src={story.image} alt={story.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{story.title}</h2>
              <p>{story.snippet}</p>
            </div>
            <div className="absolute inset-0 bg-[#E91E63]/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span>Read More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
