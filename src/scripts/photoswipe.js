import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { $ } from "../utils/domUtils";

const displayGalleryBtn = $(".bento__button");

const lightbox = new PhotoSwipeLightbox({
  gallery: "#bento-grid",
  children: "a",
  pswpModule: () => import("photoswipe"),
  padding: { top: 20, bottom: 20, left: 80, right: 80 },
});

lightbox.init();

displayGalleryBtn.addEventListener("click", () => {
  lightbox.loadAndOpen(0);
});
