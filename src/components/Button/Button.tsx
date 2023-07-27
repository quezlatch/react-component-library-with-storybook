type ButtonProps = {
    label: string
}
const Button = (props: ButtonProps) => <button className="bg-slate-500 rounded hover:shadow-md hover:shadow-slate-900 h-12 w-20">{props.label}</button>

export default Button