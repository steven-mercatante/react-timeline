import styled from 'styled-components';
import LAYOUTS from '../constants/layouts';

const Events = styled.div.attrs(_ => ({
  className: 'events',
}))`
  padding: ${props => props.theme.events.padding};

  &.${LAYOUTS.INLINE_EVENTS_INLINE_DATE} {
    padding-left: 0px;
  }
`;

export default Events;
