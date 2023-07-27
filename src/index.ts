import './styles/global.css'

// use relative path rather that absolute otherwise rollup dts gets confused and
// treats it as an external reference. No doubt there's a simple solution to this
// but i don't know hwta it is :(

export { default as Button } from './components/Button'
