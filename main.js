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
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$10,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$11,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$12,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$13,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$14,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$15,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$16,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$17,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$18,000",
    },

    {
      src: "assets/collection-2.webp",
      title: "URBAN MEN ANKARA",
      description: "VINTAGE ANKARA STYLES",
      price: "$19,000",
    },
  ];


  orderList.forEach ( element => {

    function createProductElement(){



      return
`
<div class="grid lg:grid-cols-2 lg:mx-10 mx-5 gap-5">
            <div class="relative">
                <img src="assets/collection-15.jpg" class="rounded-lg lg:rounded-2xl" />
                <div
                    class="absolute bottom-0 right-0 bg-white text-black rounded-br-md lg:rounded-br-2xl rounded-tl-2xl px-10 lg:px-16 py-2 lg:py-5 max-w-sm">
                    <div>
                        <span class="font-bold">${`orderList.description`}</span>
                    </div>
                    <div class="mt-5">
                        <span class="py-2 px-10 bg-black text-white rounded-2xl mt-5">${`orderList.price`} <i
                                class="fas fa-arrow-right ml-2"></i></span>
                    </div>
                </div>
            </div>
`
    };


  });

});
