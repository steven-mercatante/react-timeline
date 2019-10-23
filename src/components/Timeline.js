import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import themes from '../themes';
import merge from 'lodash.merge';
import isPlainObject from 'lodash.isplainobject';
import TimelineContext from '../TimelineContext';
import { joinClassNames } from '../utils/classNames';
import LAYOUTS from '../constants/layouts';

const OverflowWrapper = styled.div`
  overflow: auto;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  font-size: ${props => props.theme.timeline.fontSize};
  font-family: ${props => props.theme.timeline.fontFamily};

  ::after {
    position: absolute;
    left: ${props => props.theme.timelineTrack.left};
    width: ${props => props.theme.timelineTrack.width};
    height: ${props => props.theme.timelineTrack.height};
    background-color: ${props => props.theme.timelineTrack.backgroundColor};
    content: ${props => props.theme.timelineTrack.content};
  }

  &.${LAYOUTS.INLINE_EVENTS} {
    ::after {
      left: 130px;
    }
  }

  &.${LAYOUTS.INLINE_EVENTS_INLINE_DATE} {
    ::after {
      left: 29px;
    }
  }

  @media (max-width: 768px) {
    ::after {
      left: 29px !important;
    }
  }
`;

const _opts = {
  layout: LAYOUTS.ALTERNATE_EVENTS, // see LAYOUTS constant
};

export default function Timeline({ className, theme, opts, children }) {
  let finalOpts = _opts;
  if (opts && isPlainObject(opts)) {
    finalOpts = merge(finalOpts, opts);
  }

  const classNames = joinClassNames([
    'timeline',
    'overflow-wrapper',
    className,
  ]);
  const inlineDate = finalOpts.layout.toLowerCase().includes('in-date');

  return (
    <ThemeProvider theme={theme || themes.default}>
      <OverflowWrapper className={classNames}>
        <Container className={`timeline container ${finalOpts.layout}`}>
          <TimelineContext.Provider
            value={{
              opts: finalOpts,
              layout: finalOpts.layout,
              inlineDate,
            }}
          >
            {children}
          </TimelineContext.Provider>
        </Container>
      </OverflowWrapper>
    </ThemeProvider>
  );
}

Timeline.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object,
  opts: PropTypes.object,
  children: PropTypes.element.isRequired,
};
