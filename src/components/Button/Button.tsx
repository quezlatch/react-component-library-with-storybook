import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
	base: 'h-12 w-32 rounded hover:shadow-md',
	variants: {
		type: {
			primary: 'bg-slate-500 hover:shadow-slate-900',
			secondary: 'border border-slate-900 hover:shadow-slate-500',
		},
	},
})

type ButtonProps = Required<VariantProps<typeof button>> & {
	label: string
}

const Button = (props: ButtonProps) => (
	<button className={button(props)}>{props.label}</button>
)

export default Button
