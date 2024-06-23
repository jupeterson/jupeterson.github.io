import { scrollFunction } from "./common";
import { ImageSize } from "../../common/models/ImageSize";

export interface ImageDimension {
  height: number;
  width: number;
}

const resizePhotosContainer = (
  container: HTMLDivElement,
  imageSizes: ImageSize[]
) => {
  const photosNodeList = container.querySelectorAll(".photo");
  const photos = Array.from(photosNodeList) as HTMLDivElement[];
  fixResizingLoadedImages(photos, imageSizes, container);
  // Make sure all images are loaded
  photos.forEach((photo) => {
    photo.classList.add("start-loading");
    const image = photo.querySelector("img") as HTMLImageElement | null;
    if (image !== null) {
      if (image.complete) {
        photo.classList.replace("start-loading", "loaded");
      } else {
        image.addEventListener("load", function () {
          photo.classList.replace("start-loading", "loaded");
          image.addEventListener("click", lightBoxEventHandler, false);
        });
      }
    }
  });
};

const fixResizingLoadedImages = (
  photos: HTMLDivElement[],
  imageSizes: ImageSize[],
  container: HTMLDivElement
) => {
  const containerWidth = container.clientWidth - 5 * photos.length;

  let totalPhotoWidth = 0;
  let smallestHeight = 0;

  const imagesDimensions: ImageDimension[] = [];

  // 1.
  photos.forEach((photo) => {
    const image = photo.querySelector("img") as HTMLImageElement | null;
    if (image !== null) {
      const imageSize = imageSizes.find((imageSize) => {
        const path = imageSize.imagePath.replace("./public", "");
        const url = new URL(image.src);
        return url.pathname === path;
      });
      if (imageSize === undefined) {
        return;
      }
      if (smallestHeight === 0 || imageSize.height < smallestHeight) {
        smallestHeight = imageSize.height;
      }
    }
  });
  // 2.
  photos.forEach((photo) => {
    const image = photo.querySelector("img") as HTMLImageElement | null;
    if (image !== null) {
      const imageSize = imageSizes.find((imageSize) => {
        const path = imageSize.imagePath.replace("./public", "");
        const url = new URL(image.src);
        return url.pathname === path;
      });
      if (imageSize === undefined) {
        return;
      }
      const heightProportion = smallestHeight / imageSize.height;
      const newWidth = heightProportion * imageSize.width;
      totalPhotoWidth += newWidth;
      imagesDimensions.push({ height: smallestHeight, width: newWidth });
    }
  });

  // 3.
  const newScale = containerWidth / totalPhotoWidth;
  // 4.
  photos.forEach((photo, index: number) => {
    const image = photo.querySelector("img") as HTMLImageElement | null;
    if (image !== null) {
      const photoDimension = imagesDimensions[index];
      photo.style.width = newScale * photoDimension.width + "px";
      photo.style.height = newScale * photoDimension.height + "px";
    }
  });
};

export const reSizeAllPhotos = async () => {
  const response = await fetch("../../images/image-sizes.json");
  const imageSizes = await response.json();
  const photosContainerNodeList = document.querySelectorAll(
    ".photo-set"
  ) as NodeList | null;
  if (photosContainerNodeList === null) return;
  const photosContainer = Array.from(
    photosContainerNodeList
  ) as HTMLDivElement[];
  photosContainer.forEach((container) => {
    resizePhotosContainer(container, imageSizes);
  });
};

export const whenImageLoaded = (
  container: any,
  imageSrc: string,
  onImageLoaded: () => void
) => {
  const newImage = document.createElement("img");
  newImage.addEventListener("load", onImageLoaded);
  newImage.setAttribute("src", imageSrc);
};
export const loadingAllImagesUpdater = (
  container: any,
  onLoadedImage: (
    noOfImagesLoaded: number,
    totalNumberOfImagesToLoad: number
  ) => void
) => {
  let noImagesLoaded = 0;
  const totalImages = container.querySelectorAll("img");
  const totalNumberOfImages = totalImages.length;
  // If there are no images to load, say so directly
  if (totalNumberOfImages === 0) {
    onLoadedImage(noImagesLoaded, totalNumberOfImages);
  }
  const allImagesElements = Array.from(totalImages);
  allImagesElements.forEach((element: any, index: number) => {
    const currentImageSrc = element.getAttribute("src");
    const newImage = document.createElement("img");
    newImage.addEventListener("load", () => imageLoaded(currentImageSrc));
    newImage.setAttribute("src", currentImageSrc);
  });

  const imageLoaded = (imageSrc: string) => {
    noImagesLoaded++;
    onLoadedImage(noImagesLoaded, totalNumberOfImages);
  };
};

const lightBoxEventHandler = (event: Event) => {
  event.preventDefault();
  const imageEvent = event.target as HTMLImageElement;
  let imageSrc = imageEvent?.getAttribute("src");
  // Could be a parallax image
  if (imageSrc === null) {
    imageSrc = imageEvent?.style.backgroundImage.split('"')[1];
  }
  const lightbox = document.querySelector("#lightbox");
  lightbox?.setAttribute("style", "display: block");
  const lightboxImage = document.querySelector("#lightbox .photo-lid");
  const postBaseUrl = lightboxImage?.getAttribute("data-postbaseurl");
  const absoluteImagePath = postBaseUrl + imageSrc!;
  lightboxImage?.setAttribute(
    "style",
    "background-image: url('" + absoluteImagePath + "');"
  );
};

if (typeof window !== "undefined") {
  // Client-side-only code
  window.onload = () => {
    // LIGHTBOX
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        const lightbox = document.querySelector("#lightbox");
        lightbox?.setAttribute("style", "display: none");
      }
    });
  };

  window.onresize = reSizeAllPhotos;
  window.onscroll = function () {
    scrollFunction();
  };
}
