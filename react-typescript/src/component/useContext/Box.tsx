import { useContext } from "react"
import { ContextTheme } from "./ThemeContext"


const Box = () => {
    const theme = useContext(ContextTheme)

    return (
        <div style={{ backgroundColor: theme.secondary.main }}>
            Theme context
        </div>
    )
}

export default Box
