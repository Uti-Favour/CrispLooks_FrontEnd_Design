document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.getElementById("navBar");
  const items = document.getElementById("items");

  //navBar functionality
  let nav_hidden = document.querySelector(".nav_hidden");
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
      price: "$11,000",
    },


    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$12,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$13,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$14,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$15,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$16,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$17,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$18,000",
    },

    {
      src: "Images/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$19,000",
    },

    
  ];


});
