import merge from 'lodash.merge';
import defaultTheme from './default';

const roliTheme = merge({}, defaultTheme, {
  timelineTrack: {
    backgroundColor: '#323343',
    width: '4px',
  },
  marker: {
    width: '26px',
    height: '26px',
    backgroundColor: '#22212E',
    border: ' 4px solid #323343',
    borderRadius: '50%',
  },
  card: {
    color: '#fff',
    backgroundColor: '#22212E',
    border: '4px solid #323343',
  },
  button: {
    fontSize: '14px',
    backgroundColor: '#3FC296',
    padding: '4px',
    color: '#fff',
    margin: '0 4px 0 0',
    border: 'none',
  },
  date: {
    backgroundColor: '#22212E',
    padding: '6px',
    color: '#fff',
  },
});

export default roliTheme;
