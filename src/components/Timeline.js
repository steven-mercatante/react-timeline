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

const Container = styled.div(props => {
  const defaults = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    '*, *:before, *:after': {
      boxSizing: 'border-box',
    },

    // renders the vertical line
    '::after': { ...props.theme.timelineTrack },

    [`&.${LAYOUTS.INLINE_EVENTS}`]: {
      '::after': { left: '130px' },
    },

    [`&.${LAYOUTS.INLINE_EVENTS_INLINE_DATE}`]: {
      '::after': { left: '29px' },
    },

    '@media (max-width: 768px)': {
      '::after': { left: '29px !important' },
    },
  };

  const style = { ...defaults, ...props.theme.timeline };

  return style;
});

const _opts = {
  layout: LAYOUTS.ALTERNATE_EVENTS, // see LAYOUTS constant
};

export default function Timeline({ className, theme, opts, children }) {
  let finalTheme = themes.default;
  // if (typeof theme === 'string' && themes[theme.toLowerCase()]) {
  //   finalTheme = themes[theme.toLowerCase()];
  // }
  // if (isPlainObject(theme)) {
  //   finalTheme = merge(finalTheme, theme);
  // }

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
    <ThemeProvider theme={finalTheme}>
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
