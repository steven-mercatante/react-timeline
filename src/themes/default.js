const theme = {
  timeline: {
    fontSize: '1rem',
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  timelineTrack: {
    position: 'absolute',
    left: `50%`,
    width: '2px',
    height: '100%',
    backgroundColor: '#ee18b6',
    content: "''",
  },
  marker: {
    backgroundColor: '#fff',
    border: '2px solid #EB2DB4',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    zIndex: 100,
  },
  card: {
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#333',
    padding: '10px',
    boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)',
    width: '100%',
    maxWidth: '560px',
  },
  button: {
    display: 'inline-block',
    fontSize: '14px',
    backgroundColor: 'rebeccapurple',
    borderRadius: '4px',
    padding: '6px',
    color: '#fff',
    margin: '10px 5px 5px 0',
    border: 'none',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  dateContainer: {},
  date: {},
  imageAtom: {
    objectFit: 'cover',
    overflow: 'hidden',
    width: '100%',
    maxHeight: '400px',
  },
  imageCredit: { marginTop: '100px', fontSize: '0.85rem' },
  imageText: { color: 'red' },
  youTubeText: {},
  events: {},
  event: { marginBottom: '20px' },
};

export default theme;
