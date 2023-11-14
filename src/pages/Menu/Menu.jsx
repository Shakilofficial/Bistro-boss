import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import pizzaImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our Menu"
        subtitle="Would you like to try a dish?"
      />
      <SectionTitle
        subHeading="Do not Miss"
        heading="Todays Offer"
      ></SectionTitle>
      {/* Offered Menu Item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desert Menu Item */}
      <MenuCategory
        items={desserts}
        title="Desserts"
        img={dessertImg}
      ></MenuCategory>

      {/* Pizza */}
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>

      {/* Salad*/}
      <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>

      {/* Pizza */}
      <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
