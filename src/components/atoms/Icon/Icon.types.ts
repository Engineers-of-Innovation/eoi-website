// Icons

import { Arrow } from "./icons/Arrow";
import { Chevron } from "./icons/Chevron";


// Types
export enum IconRotate {
  North = '180deg',
  NorthEast = '-135deg',
  NorthWest = '135deg',
  East = '-90deg',
  South = '0deg',
  SouthEast = '-45deg',
  SouthWest = '45deg',
  West = '90deg'
}

export enum IconSize {
  XSmall = 12,
  Small = 16,
  Medium = 20,
  Large = 24,
  XLarge = 32,
  XXLarge = 40,
  XXXLarge = 64,
  XXXXLarge = 80,
  XXXXXLarge = 112
}

export const iconComponents = {
  arrow: Arrow,
  chevron: Chevron
}
