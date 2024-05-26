import { ReactFlowProvider } from 'reactflow';

import React from 'react';

/**
 * ReactFlowProviderの下で用意されているhooksを利用するため、
 * StorybookのDecoratorでReactFlowProviderをラップする
 */
export const decorators = [
  (Story) => (
    <ReactFlowProvider>
      <Story />
    </ReactFlowProvider>
  )
]