export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to New York Lore</h1>

      <p>New York Lore is your gateway to the city's most captivating secrets, legends, and hidden treasures.</p>
      <p>Browse local tales, historical gems, and artful insights shared by real New Yorkers and curious visitors alike.</p>

      <a href="https://careduel.com/topic-of-the-week" className="care-banner">
        Topic of the Week
      </a>

      <div className="awards">
        <a href="https://top216.com/vote" className="award-card">
          <h3>🏆 Vote Top216</h3>
        </a>
        <a href="https://thetop36.com/highlights" className="award-card">
          <h3>🔍 Explore The Top36</h3>
        </a>
      </div>
    </div>
  );
}
