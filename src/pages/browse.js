import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  // First we use our custom useContent hook to grab the series and films collections from firebase
  const { series } = useContent("series");
  const { films } = useContent("films");

  // Then we use the selection filter from utils to categorize each document and return
  // slides that can be shown by genre.
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
