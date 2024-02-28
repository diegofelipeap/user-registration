import React from "react"
import { H1 } from "./style"

function title(props) {
    return <H1>{props.children}</H1>
}
export default title

/*function optionTitle({children}) {
    return <H1>{children}</H1>
}
export default optionTitle
Esté é um conceito de desestruturação.
*/

