import React from "react";
import Hero from './Hero'
import Favorites from './Favorites'
import Banner from './Banner'
import Trending from './Trending'
function Home() {
  return (
    <>
      <Hero />
        <Favorites />
        <Banner
          title="Start With Design"
          des="M&H products are all crafted to standard sizes, allowing you the
                flexibility to mix and match them effortlessly."
          img="https://www.mandicasa.com/wp-content/uploads/2023/08/collection-diamond.jpg"
          reverse={false}
        />
        <Trending />
        <Banner
          title="Build A Dream"
          des="M&H items are manufactured in standardized sizes, providing you with the freedom to effortlessly mix and match them according to your preferences."
          img="https://image.made-in-china.com/2f0j00TUJoLHRrhykK/White-Luxury-Kitchen-Design-High-End-Lacquer-Finish-Modern-Kitchen-Cabinets.jpg"
          reverse={true}
        />
    </>
  );
}

export default Home;
