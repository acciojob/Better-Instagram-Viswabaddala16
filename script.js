//your code here
document.addEventListener("DOMContentLoaded", () => {
  let selectedImage = null;

  const images = document.querySelectorAll(".image");
  images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
      // Set the dragged image as the selected image
      selectedImage = e.target;
    });

    image.addEventListener("dragend", () => {
      // Clear the selected image
      selectedImage = null;
    });

    image.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    image.addEventListener("dragenter", (e) => {
      e.preventDefault();
      if (selectedImage !== null) {
        // Swap the background images when dragging over
        const tempImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = selectedImage.style.backgroundImage;
        selectedImage.style.backgroundImage = tempImage;
      }
    });
  });
});
		