import { FC, Dispatch } from "react"
import s from './Input.module.css'

interface Props {
    value:string
    setValue:Dispatch<React.SetStateAction<string>>
    placeholder:string
}

const Input:FC<Props> = (props) => {
    return <input className={s.main} value={props.value} onChange={(event) => {
        props.setValue(event.target.value)
    }} placeholder={props.placeholder}/>
}

export default Input