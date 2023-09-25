// React.js component for a variable-size title.
// size (options: huge, standard, small, tiny): Choose from a pre-defined font size.
// is_transparent (bool): Conditionally apply styling for the title.
// font (options: playfair, inter): Choose from a list of fonts. 
const Title = ({ id, children, size, is_transparent, font}) => {
    return (
        <h1 className={`title ${size} ${font}` + (is_transparent === true ? " transparent" : "") } id={id}>
            { children }
        </h1>
    )
}

export default Title;