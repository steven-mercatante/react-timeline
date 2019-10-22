import defaultTheme from './default';
import { createTheme } from '../utils/themes';

const roliTheme = createTheme(defaultTheme, {
  timeline: {
    backgroundColor: '#0C1734',
    a: { color: 'yellow' },
  },
  timelineTrack: {
    background: 'linear-gradient(to bottom,  #d85bcf 0%,#f0799d 100%);',
    width: '2px',
  },
  marker: {
    width: '16px',
    height: '16px',
    backgroundColor: '#E167BA',
    border: '2px solid #fff',
    borderRadius: '50%',
    left: '1px',
  },
  card: {
    backgroundColor: '#1B2944',
    color: '#fff',
  },
  button: {
    fontSize: '14px',
    backgroundColor: '#08BE95',
    padding: '4px',
    color: '#fff',
    border: 'none',
  },
  date: {
    padding: '6px',
    backgroundColor: '#9221C2',
    color: '#fff',
  },
});

export default roliTheme;
