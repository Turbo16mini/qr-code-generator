import { FC, MouseEventHandler, ReactNode } from "react";
import s from './Button.module.css'

interface Props {
    children: ReactNode
    variant: 'primary' | 'secondary'
    onClick: MouseEventHandler<HTMLButtonElement>
    size: 'large' | 'small'
    wide?:boolean
}

const Button: FC<Props> = (props) => {
    return <button onClick={props.onClick} className={s[props.variant] + ' ' + s[props.size] + ' ' + (props.wide ? s.wide : '') }>{props.children}</button>

}
export default Button