import { configure } from '@storybook/react';
import './storybook.css';

configure(require.context('../src', true, /\.stories\.mdx$/), module);
configure(require.context('../src', true, /\.stories\.js$/), module);
