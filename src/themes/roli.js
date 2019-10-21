import merge from 'lodash.merge';
import defaultTheme from './default';

const roliTheme = merge({}, defaultTheme, {
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
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50%',
    left: '1px',
  },
  card: {
    backgroundColor: '#1B2944',
    color: '#fff',
    // border: '2px solid #713DEB',
  },
  button: {
    fontSize: '14px',
    backgroundColor: '#09CDA1',
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
