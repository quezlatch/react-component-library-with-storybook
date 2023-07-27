import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import * as stories from './Button.stories'

const { Primary } = composeStories(stories)

it('displays label', () => {
	render(<Primary />)
	expect(screen.queryByText('Hello World!')).toBeInTheDocument()
})
