import React from "react"

type TextOwnProps<E extends React.ElementType> = {
    size?: "sm" | "md" | "lg"
    color?: "primary" | "secondary"
    children: React.ReactNode
    //as: string //it acan be any html elemrnt
    // as: React.ElementType
    as?: E
}

type TextProps<E extends React.ElementType> =
    TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

const Article = <E extends React.ElementType = "div">(
    { size, color, children, as }: TextProps<E>
) => {
    const Component = as || "div"
    return (
        <Component className={`class-with-${size}-${color}`}>
            {children}
        </Component>
    )
}

export default Article

