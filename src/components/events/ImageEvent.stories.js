import React from 'react';
import { Timeline, Events, ImageEvent } from '../../index';
import { storiesOf } from '@storybook/react';
import jellyfish from '../../../demo/images/jellyfish.jpg';

storiesOf('Events/ImageEvent', module)
  .addParameters({ component: ImageEvent })

  .add('remote image URL', () => (
    <Timeline>
      <Events>
        <ImageEvent
          date="10/03/19"
          src="https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
          alt="yellow jellyfish"
          text="I love this photo!"
          credit="Photo by [Karan Karnik](https://unsplash.com/@kkkaran)"
        />
      </Events>
    </Timeline>
  ))
  .add('local image', () => (
    <Timeline>
      <Events>
        <ImageEvent
          date="10/03/19"
          src={jellyfish}
          alt="swimming jellyfish"
          text="I love this photo!"
          credit="Photo by [Jeffrey Hamilton](https://unsplash.com/@pistos)"
        />
      </Events>
    </Timeline>
  ));
