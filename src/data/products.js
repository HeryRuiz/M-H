const products = [
  {
    name: "Sheep Chair",
    price: 5000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1177239887980802089/1.jpg?ex=6571c915&is=655f5415&hm=0a0f99b37bd8331bc2647cf3d642f70f952ab70e575c90bbe2eee204d2f42ab9&",
    id: 1,
  },
  {
    name: "Toaster",
    price: 1000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1177239888320536686/2.jpg?ex=6571c915&is=655f5415&hm=f1ac971170fcddeab7411a6ad6e9b5d063f4236acb6a0f2f98b73d6a1dde0c5a&",
    id: 2,
  },
  {
    name: "Cabinet",
    price: 10000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1177239888547037284/4.jpg?ex=6571c915&is=655f5415&hm=d05f33823deb80e988deb99c411bc49936431b857670d6a8c42d792d73507b39&",
    id: 3,
  },
  {
    name: "Gold lamp",
    price: 15000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1177239888777719879/5.jpg?ex=6571c915&is=655f5415&hm=a29e6838517a6d272d5f3c7d1e083220e6aa3c577d1a6d6e9d965340c4b186ba&",
    id: 4,
  },
  {
    name: "Skin Oil",
    price: 1300,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1177239889020985365/6.jpg?ex=6571c915&is=655f5415&hm=da1c96f1a437fb7eb859218493a747655aecbe4a62b4d08a4cb93f94d1604995&",
    id: 5,
  },
  {
    name: "Lamp",
    price: 2000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1177239889289429152/7.jpg?ex=6571c915&is=655f5415&hm=eb389d31f7c998a8dc53181fc9c32ad8e19b2b7516116fdd2b04fc82986a9338&",
    id: 6,
  },
  {
    name: "Black cabinet",
    price: 5000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1177239889545277481/8.jpg?ex=6571c915&is=655f5415&hm=f18b65ac2b817b158f681c555222302712aede86cf3213e16d57f31b1437c3a7&",
    id: 7,
  },
  {
    name: "Wood Chair",
    price: 8000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1177239889775960095/10.jpg?ex=6571c915&is=655f5415&hm=b254e5b649769f5856d2b40235b65469546af4b5d33a53a714212472c055c010&",
    id: 8,
  },
  {
    name: "Cealing Lamp",
    price: 4000,
    image:
      "https://cdn.discordapp.com/attachments/1156969246354587668/1178672544518250517/11.jpg?ex=6576ff59&is=65648a59&hm=a7c301d98ad2c1c5f0e84c16134b1ac95e1b2954b7a3b82f2ecb8c959125e1d5&",
    id: 9,
  },
  {
    name: "Cotton Sheets",
    price: 1000,
    image:
      "https://cdn.discordapp.com/attachments/1156969246354587668/1178672544774094971/13.jpg?ex=6576ff59&is=65648a59&hm=2fdf96041a45dec4e689116d4dcca07ac6871b8f3e08a91d5a79449837707c63&",
    id: 10,
  },
  {
    name: "Leather Chair",
    price: 10000,
    image:
      "https://cdn.discordapp.com/attachments/1156969246354587668/1178672545013174272/15.jpg?ex=6576ff59&is=65648a59&hm=362e4a209b879d9e9dd3f3f09770bc4dfeec244756b401a6c82386ddc246e914&",
    id: 11,
  },
  {
    name: "Secure Came",
    price: 20000,
    image:
      "https://cdn.discordapp.com/attachments/1156969246354587668/1178672545218699274/16.jpg?ex=6576ff59&is=65648a59&hm=89bac06908dccc5602da1ce699d77b8ebd0a64daca0a67dfda418a9a537892ec&",
    id: 12,
  },
  {
    name: "Living Chair",
    price: 5000,
    image:
      "https://cdn.discordapp.com/attachments/1156969246354587668/1178672545642315876/19.jpg?ex=6576ff59&is=65648a59&hm=8e27a1b14ba4a120705d67c07d94ff4d83220acb1382ead024c226a0c08ebeb5&",
    id: 13,
  },
  {
    name: "Face Cleaner",
    price: 6000,
    image:
      "https://cdn.discordapp.com/attachments/1156969246354587668/1178672545877200989/20r.jpg?ex=6576ff59&is=65648a59&hm=696c381b990ccac2768727da2c7f1164d93690224de97a5fa45a82657ad3abfc&",
    id: 14,
  },
  {
    name: "Blue Lamp",
    price: 9000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1178695691799892069/3.png?ex=657714e8&is=65649fe8&hm=c8e672759f083d1e4ac8e806a774551c973b3291e2fa23cf8395c15897892b03&",
    id: 15,
  },
  {
    name: "Gold Light",
    price: 12000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1178695692282249246/12.png?ex=657714e8&is=65649fe8&hm=cf3121589101aa7ee74f429eb7668815ff096ad9ca77f7267da9063281e6500a&",
    id: 16,
  },
  {
    name: "Grey Lamp",
    price: 2000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1178695692802326619/17.png?ex=657714e8&is=65649fe8&hm=1654947898ced6893bda3fff1f44b99b5ee2a17abb0f23e2ca031c3259580632&",
    id: 17,
  },
  {
    name: "Black Lamp",
    price: 5000,
    image:
      "https://cdn.discordapp.com/attachments/1175025075448205375/1178695693276287017/18.png?ex=657714e8&is=65649fe8&hm=dad5684962a80d74ab5250396da60438290255c02653859beb2aa2f178a39cf4&",
    id: 18,
  },
];
export default products;
