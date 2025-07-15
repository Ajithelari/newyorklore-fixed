import React from 'react';

function Home() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-serif text-gray-800 mb-4">New York Lore</h1>
        <p className="text-lg text-gray-600 font-[Lora]">Stories from the City That Never Sleeps</p>
      </section>

      {/* CareDuel Banner */}
      <section className="bg-gray-100 border border-[#E91E63] p-4 mb-8 text-center text-[#424242] font-[Lora] text-[18px]">
        <a
          href="https://careduel.com/topic-of-the-week"
          className="underline hover:text-[#E91E63] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Topic of the Week
        </a>
      </section>

      {/* Awards Panel */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a
          href="https://top216.com/vote"
          className="border border-[#424242] rounded-lg p-6 shadow hover:border-[#E91E63] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-xl font-serif mb-2">🗳️ Vote Top216</h3>
          <p className="text-gray-600">Support us and vote in the Top216 competition!</p>
        </a>
        <a
          href="https://thetop36.com/highlights"
          className="border border-[#424242] rounded-lg p-6 shadow hover:border-[#E91E63] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-xl font-serif mb-2">🌆 Explore The Top36</h3>
          <p className="text-gray-600">Browse featured stories and projects across the city.</p>
        </a>
      </section>

      {/* Placeholder Brand Copy */}
      <section className="text-gray-700 space-y-4 text-[16px] font-[Lora]">
        <p>
          New York is a city of endless tales. From the quiet whispers in subway tunnels to the vibrant street
          art in Brooklyn, every corner hides a unique story.
        </p>
        <p>
          At New York Lore, we celebrate the legends, the unsung heroes, and the little cultural details that
          make this city unlike any other.
        </p>
      </section>
    </div>
  );
}

export default Home;