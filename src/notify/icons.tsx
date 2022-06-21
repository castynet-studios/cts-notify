import { StyledIcon } from '@styled-icons/styled-icon';

import {
  Error,
  ErrorAlt,
  InfoSquare,
  CheckShield
} from '@styled-icons/boxicons-solid';

export enum AvailableIcons {
  InfoSquare = 'InfoSquare',
  CheckShield = 'CheckShield',
  Error = 'Error',
  ErrorAlt = 'ErrorAlt'
}

type IIcons = {
  [key in AvailableIcons]: StyledIcon;
};

export const Icon: IIcons = {
  Error,
  ErrorAlt,
  InfoSquare,
  CheckShield
};
