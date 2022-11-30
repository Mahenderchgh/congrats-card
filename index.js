const element = (
  // Write your code here.
  <div className="congratulations-bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="name">Kiran V</h1>
      <p className="details">
        Vishnu Institute of Computer Education and Technology.
        <br />
        Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        class="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
