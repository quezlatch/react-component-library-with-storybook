type ButtonProps = {
	label: string
}
const Button = (props: ButtonProps) => (
	<button className="h-12 w-20 rounded bg-slate-500 hover:shadow-md hover:shadow-slate-900">
		{props.label}
	</button>
)

export default Button
