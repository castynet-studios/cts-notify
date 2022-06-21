import { create } from '@storybook/theming';

import CastynetLogo from './castynet.svg';

export default create({
  base: 'light',
  brandTitle: 'Castynet Studios',
  brandUrl: 'https://castynet.africa',
  brandImage: CastynetLogo,
  brandTarget: '_self',

  colorPrimary: '#1f2762',
  colorSecondary: 'deepskyblue',

  barTextColor: 'white',
  barSelectedColor: '#ff1493',
  barBg: '#1f2762',

  inputBg: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 3
});
