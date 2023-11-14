import MenuItem from "../../components/MenuItem/MenuItem";
import Cover from "../../components/Shared/Cover/Cover";

const MenuCategory = ({ items,title,img }) => {
  return (
    <div className="pt-20">
      {title && <Cover
        img={img}
        title={title}
        subtitle="Would you like to try a dish?"
      />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
