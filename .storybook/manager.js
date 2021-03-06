import { addons } from '@storybook/addons';
import theme from './utilities/theme';

import favicon from './utilities/favicon.png';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme
});
