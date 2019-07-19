import styled from "styled-components";

const EventContainer = styled.div`
  border: 1px solid red;
  position: relative;
  display: flex;
  margin-bottom: 20px;

  ${props =>
    props.animationsEnabled && `opacity: ${props.isVisible ? 1 : 0.15};`}
  ${({ animationsEnabled }) =>
    animationsEnabled && `transition: opacity 0.25s ease-in;`}

  :nth-child(1) {
    margin-top: 20px;
  }

  :nth-child(odd) {
    &.alternate-events {
      .node-content {
        left: calc(50% + ${props => props.theme.eventContent.leftOffset});
      }
    }
  }

  :nth-child(even) {
    flex-direction: row-reverse;

    &.alternate-events {
      .node-content {
        right: calc(50% + ${props => props.theme.eventContent.rightOffset});
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: row !important;

    .content {
      max-width: 80%;
    }

    :nth-child(odd) {
      .node-content {
        left: 50px !important;
      }
    }

    :nth-child(even) {
      .node-content {
        left: 50px !important;
      }
    }
  }
`;

export default EventContainer;
