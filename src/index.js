/* Global variables */
const numberOfItems = document.getElementById("item-quantity");
let numberOfItemsInCart = 0;

/* Mobile overlay/menu */
{
  const menuOpenButton = document.getElementById("open-menu");
  const menuCloseButton = document.getElementById("close-menu");
  const overlay = document.getElementById("overlay");

  menuOpenButton.onclick = function () {
    overlay.classList.remove("hidden");
  };

  function hide(element) {
    element.classList.add("hidden");
  }

  menuCloseButton.onclick = function () {
    hide(overlay);
  };

  window.onclick = function (event) {
    if (event.target === overlay) {
      hide(overlay);
    }
  };
}

/* Mobile images */
{
  const mobileImages = document.querySelectorAll("#mobile-images > img");

  function scrollTo(element) {
    element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }

  // Start with image 0 on page load
  let mobileImageIndex = 0;
  scrollTo(mobileImages[mobileImageIndex]);

  const mobilePreviousImageButton = document.getElementById("mobile-previous-image-button");
  const mobileNextImageButton = document.getElementById("mobile-next-image-button");

  mobileNextImageButton.onclick = function () {
    if (mobileImageIndex + 1 > mobileImages.length - 1) {
      mobileImageIndex = 0;
    } else {
      mobileImageIndex += 1;
    }
    scrollTo(mobileImages[mobileImageIndex]);
  };

  mobilePreviousImageButton.onclick = function () {
    if (mobileImageIndex - 1 < 0) {
      mobileImageIndex = mobileImages.length - 1;
    } else {
      mobileImageIndex -= 1;
    }
    scrollTo(mobileImages[mobileImageIndex]);
  };
}

/* Quantity */
{
  const addItemButton = document.getElementById("quantity-plus");
  const removeItemButton = document.getElementById("quantity-minus");

  addItemButton.onclick = function () {
    numberOfItems.value++;
  };

  removeItemButton.onclick = function () {
    if (numberOfItems.value > 0) numberOfItems.value--;
  };
}

/* Cart */
{
  const addToCartButton = document.getElementById("add-to-cart");
  const toggleCartButton = document.getElementById("toggle-cart");
  const cartModal = document.getElementById("cart");
  const cartInfo = document.getElementById("cart-info");
  let emptyCartButton;
  const cartItemCountIndicator = document.getElementById("cart-item-count-indicator");

  addToCartButton.onclick = function () {
    try {
      numberOfItemsInCart += parseInt(numberOfItems.value, 10);
      numberOfItems.value = 0;
      updateCart();
    } catch (error) {
      console.log(error);
    }
  };

  toggleCartButton.onclick = function () {
    cartModal.classList.toggle("hidden");
  };

  const CartIsEmpty = `<h4 class="text-gray-dark font-bold">Your cart is empty.</h4>`;
  const CartHasXItems = (number) => `<div class="flex justify-between items-center gap-4 w-full">
  <img src="./images/image-product-1-thumbnail.jpg" alt="Thumbnail image of product" class="w-14 h-auto" />
  <div class="text-gray-dark flex flex-col w-48">
    <span class="truncate flex-shrink">Fall Limited Edition Sneakers</span>
    <span class="">
      <span>$125.00 x ${number}</span>
      <span class="text-black font-bold">$${number * 125}.00</span>
    </span>
  </div>
  <button id="remove-items" class="w-4 h-4 flex justify-center items-center">
    <img src="./images/icon-delete.svg" alt="Remove item from Cart" />
  </button>
</div>
<a href="#" class="text-white font-bold bg-orange rounded-lg p-5 w-full text-center">Checkout</a>`;

  function updateCart() {
    if (numberOfItemsInCart < 1) {
      cartInfo.innerHTML = CartIsEmpty;
      cartItemCountIndicator.classList.add("hidden");
    } else {
      cartInfo.innerHTML = CartHasXItems(numberOfItemsInCart);
      cartItemCountIndicator.classList.remove("hidden");
      cartItemCountIndicator.innerHTML = numberOfItemsInCart;
      emptyCartButton = document.getElementById("remove-items");

      emptyCartButton.onclick = function () {
        numberOfItemsInCart = 0;
        updateCart();
      };
    }
  }

  // Set initial value
  updateCart();
}
