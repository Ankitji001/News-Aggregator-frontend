const Navbar = ({ setCategory }) => {
  return (
    <nav>
      <h2>News Aggregator</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
      </select>
    </nav>
  );
};

export default Navbar;
