"use client";
import { useEffect } from "react";

const useBlurredImageLoader = (selector) => {
  useEffect(() => {
    const blurredImageDivs = document.querySelectorAll(selector);

    blurredImageDivs.forEach((div) => {
      const img = div.querySelector("img");

      function loaded() {
        div.classList.add("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  }, [selector]);
};

export default useBlurredImageLoader;
