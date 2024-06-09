import type { Meta, StoryObj } from '@storybook/react';
import { DirectoryUpload } from './DirectoryUpload';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Demo/DirectoryUpload',
  component: DirectoryUpload,
  parameters: {
    docs: {
      description: {
        component:
          'ディレクトリ指定でアップロードし、SQLファイルのみファイル名と内容を取得し、配列に追加している。入力はディレクトリ、出力は{ファイル名,ファイル内容}の配列となっている。なお、こちらは確認のためにアップロード後にボタン下に配列内容を出力している。',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof DirectoryUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DirectoryUploadDemo: Story = {};
