const furniture = [
    {
      name: "Sheep Chair",
      price: 5000,
      image:
        "https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg",
      id: 1,
    },
    {
      name: "Cabinet",
      price: 10000,
      image:
        "data:image/jpeg;base64,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",
      id: 3,
    },
    {
      name: "Wood Chair",
      price: 8000,
      image:
        "https://minimalist-e-commerce.vercel.app/static/media/14.a674c36b5a4aa0bb7377.png",
      id: 8,
    },
    {
      name: "Leather Chair",
      price: 10000,
      image:
        "https://minimalist-e-commerce.vercel.app/static/media/15.34062d24a3b098cdc795.jpg",
      id: 11,
    },
    {
      name: "Living Chair",
      price: 5000,
      image:
        "https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg",
      id: 13,
    },
    {
        name: "Black cabinet",
        price: 5000,
        image:
          "https://minimalist-e-commerce.vercel.app/static/media/8.35f833ef20163491e804.jpg",
        id: 7,
      },
  ];
  export default furniture;
  