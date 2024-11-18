import React from "react";
import { Image } from "sanity";

export type Feature = {
  icon: React.JSX.Element;
  src: string; //{ image: Image }
  title: string;
  description: string;
  // viewBox: string;
  // width: number;
  //height: number;
};
