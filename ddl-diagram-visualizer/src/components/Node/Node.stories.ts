/* Storybook デモ DemoNodeコンポーネント */

import type { Meta, StoryObj } from '@storybook/react';
import { DemoNode } from './Node';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Demo/Node',
  component: DemoNode,
  parameters: {
    // コンポーネントの表示位置を設定
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // propsの型を指定することで、コントロールパネルでの入力を制限できる。
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: 'text', defaultValue: 'white' },
    isConnectable: { control: 'boolean' },
  },
  // ハンドラーがpropsに渡される場合、[ハンドラー名] fn()を使用。
  //   args: { onClick: fn() },
} satisfies Meta<typeof DemoNode>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Red: Story = {
  args: {
    color: 'red',
    isConnectable: true,
  },
};

export const Green: Story = {
  args: {
    color: 'green',
    isConnectable: true,
  },
};
