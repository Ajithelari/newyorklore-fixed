// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-2">About</h4>
          <p>New York Lore shares stories, legends & hidden gems of NYC.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/stories">Stories</a></li>
            <li><a href="/submit">Submit</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
