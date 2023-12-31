import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		label: 'Hello World!',
		type: 'primary',
	},
}

export const Secondary: Story = {
	args: {
		label: 'Goodbye Cruel World!',
		type: 'secondary',
	},
}
