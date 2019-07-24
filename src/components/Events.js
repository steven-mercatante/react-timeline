import styled from "styled-components";

const Events = styled.div.attrs(_ => ({
  className: "events"
}))(props => {
  const defaults = {
    padding: "10px",
    "&.inline-events-inline-date": {
      paddingLeft: "0px"
    }
  };

  const style = { ...defaults, ...props.theme.events };

  return style;
});

export default Events;
