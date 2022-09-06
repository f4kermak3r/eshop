const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
    },
    {
      id: 2,
      title: "jackets",
    },
    {
      id: 3,
      title: "sneakers",
    },
    {
      id: 4,
      title: "hoodies",
    },
    {
      id: 5,
      title: "shoes",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }) => {
        return (
          <div className="category-container">
            <div className="image"></div>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>shop</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
