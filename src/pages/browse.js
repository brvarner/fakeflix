import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  // First we use our custom useContent hook to grab the series and films collections from firebase
  const { series } = useContent("series");
  const { films } = useContent("films");
  let slides;

  // Then we use the selection filter from utils to categorize each document and return
  // slides that can be shown by genre.
  if (series && films) {
    slides = selectionFilter({ series, films });
  }

  console.log({ slides });

  return <p>Hello from the browse!</p>;
}
