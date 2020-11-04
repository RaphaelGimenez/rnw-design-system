import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Test from './test';

const testStories = storiesOf('Test', module);

testStories.add('default view', () => <Test />);
