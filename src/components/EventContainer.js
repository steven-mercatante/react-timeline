import styled from "styled-components";

const EventContainer = styled.div`
  // border: 1px solid green;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0.15)};
  transition: opacity 0.25s ease-in;

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
      .content {
        // border: 1px solid red;
        left: 80px !important;
      }
    }

    :nth-child(even) {
      .content {
        // border: 1px solid yellow;
        left: 80px !important;
      }
    }
  }
`;

export default EventContainer;
