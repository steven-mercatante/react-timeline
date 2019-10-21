import styled from 'styled-components';
import LAYOUTS from '../constants/layouts';

const Events = styled.div.attrs(_ => ({
  className: 'events',
}))(props => {
  const defaults = {
    [`&.${LAYOUTS.INLINE_EVENTS_INLINE_DATE}`]: {
      paddingLeft: '0px',
    },
  };

  const style = { ...defaults, ...props.theme.events };

  return style;
});

export default Events;
