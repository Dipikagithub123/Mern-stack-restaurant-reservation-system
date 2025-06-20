import { data } from '../restApi.json';

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR VEGETARIAN FAVORITES</h1>
          <p>
            Savor the best of plant-powered cuisine! Each dish is crafted with fresh, wholesome ingredients for a guilt-free, delicious experience. Discover your next favorite vegetarian delight below.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
