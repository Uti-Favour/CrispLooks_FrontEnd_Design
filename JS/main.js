document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.getElementById("navBar");
  let nav_hidden = document.querySelector(".nav_hidden");
  const items = document.getElementById("items");

  navBar.addEventListener("click", () => {
    nav_hidden.classList.toggle("nav_display");
    nav_hidden.classList.toggle("nav_hidden");
  });

  // ------ Cloth List Items -------
  const orderList = [
    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },


    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    
  ];

  console.log(orderList.description(1));
});
