import Card from "./Card";

const Features = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-4">
      <Card
        imageUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg "
        discountInfo="20% Off on Winter Clothings"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
      />
      <Card
        imageUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg "
        discountInfo="50% Off On Summer Fashion"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
      />
      <Card
        imageUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg "
        discountInfo="75% Off On Holiday Sales"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
      />
    </section>
  );
};

export default Features;
