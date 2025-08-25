

type numberProps = {
    value: number
}
type positiveProps = numberProps & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type negativeProps = numberProps & {
    isNegative: boolean
    isZero?: never
    isPositive?: never

}
type zeroProps = numberProps & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type randomProps = positiveProps | negativeProps | zeroProps

const RandomNum = ({ value, isPositive, isNegative, isZero }: randomProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
        </div>
    )
}

export default RandomNum
