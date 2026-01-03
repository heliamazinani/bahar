export const flyToCart = (imgEl) => {
  const cart = document.getElementById("cart-icon");
  if (!imgEl || !cart) return;

  const imgRect = imgEl.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  const flyingImg = imgEl.cloneNode(true);

  flyingImg.style.position = "fixed";
  flyingImg.style.left = imgRect.left + "px";
  flyingImg.style.top = imgRect.top + "px";
  flyingImg.style.width = imgRect.width + "px";
  flyingImg.style.height = imgRect.height + "px";
  flyingImg.style.zIndex = 9999;
  flyingImg.style.pointerEvents = "none";
  flyingImg.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
  flyingImg.style.borderRadius = "12px";

  document.body.appendChild(flyingImg);

  requestAnimationFrame(() => {
    flyingImg.style.left = cartRect.left + "px";
    flyingImg.style.top = cartRect.top + "px";
    flyingImg.style.width = "20px";
    flyingImg.style.height = "20px";
    flyingImg.style.opacity = "0.3";
  });

  setTimeout(() => flyingImg.remove(), 500);
  cart.classList.add("fly-hit");
  setTimeout(() => cart.classList.remove("fly-hit"), 250);

};
