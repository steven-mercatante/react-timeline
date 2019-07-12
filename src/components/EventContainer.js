import styled from "styled-components";

const EventContainer = styled.div`
  border: 1px solid red;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  // opacity: ${({ isVisible }) => (isVisible ? 1 : 0.15)};
  // transition: opacity 0.25s ease-in;

  :nth-child(1) {
    margin-top: 20px;
  }

  ${({ alternateEvents }) =>
    alternateEvents &&
    `:nth-child(odd) {
      flex-direction: row-reverse;
    }`}

  @media (max-width: 768px) {
    flex-direction: row !important;

    .content {
      max-width: 80%;
    }

    :nth-child(odd) {
      .node-content {
        left: 80px !important;
      }
    }

    :nth-child(even) {
      .node-content {
        left: 80px !important;
      }
    }
  }
`;

export default EventContainer;
