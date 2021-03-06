import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js or *.stories.jsx
const req = require.context('../src', true, /\.stories\.(js|jsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
