import * as LoaderSource from "react-loader-spinner";

export enum LoaderTypes {
  AUDIO = "audio",
  BARS = "bars",
  CIRCLES = "circles",
  FALLING_LINES = "falling_lines",
  GRID = "grid",
  OVAL = "oval",
  TAILSPIN = "tailspin",
  THREE_DOTS = "three_dots",
}

export const componentsByType = {
  [LoaderTypes.AUDIO]: LoaderSource.Audio,
  [LoaderTypes.BARS]: LoaderSource.Bars,
  [LoaderTypes.CIRCLES]: LoaderSource.Circles,
  [LoaderTypes.FALLING_LINES]: LoaderSource.FallingLines,
  [LoaderTypes.GRID]: LoaderSource.Grid,
  [LoaderTypes.OVAL]: LoaderSource.Oval,
  [LoaderTypes.TAILSPIN]: LoaderSource.TailSpin,
  [LoaderTypes.THREE_DOTS]: LoaderSource.ThreeDots,
};

export type LoaderProps = {
  type?: LoaderTypes;
  width: string;
  height: string;
  color: string;
  secondaryColor?: string;
  ariaLabel: string;
  strokeWidth?: string;
};