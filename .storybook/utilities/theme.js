import { create } from '@storybook/theming';

import CastynetLogo from './castynet.svg';

export default create({
  base: 'light',
  brandTitle: 'Castynet Studios',
  brandUrl: 'https://castynet.africa',
  brandImage: CastynetLogo,
  brandTarget: '_self',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4
});
