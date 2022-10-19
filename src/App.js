import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="/profile-picture.jpeg" alt="Profile" width="250px" />
      </div>
      <h1>Khadijah Nabil</h1>
      <p>Frontend Developer</p>
      <p>kcodes.com</p>
      <button>✉️ Email</button>
      <button>LinkedIn</button>
      <div>
        <h2>About</h2>
        <p>
          Hello! My name is Khadijah and I am a frontend developer with an
          interest in making things simple and automating daily tasks. I try to
          keep up with best practices and always looking for new things to
          learn!
        </p>
      </div>
      <div>
        <h2>Interests</h2>
        <p>Content creation, Music, Food, Travel</p>
      </div>
      <footer>
        <button>twitter</button>
        <button>instagram</button>
        <button>github</button>
      </footer>
    </div>
  );
}

export default App;
