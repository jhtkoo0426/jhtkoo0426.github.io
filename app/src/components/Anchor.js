// React.js component for anchor with applied CSS effects.
// inline (bool): True for an inline anchor, false for a block anchor.
// underline (bool): True for an underline animation.
// target (bool): True for _blank, False for nothing.
const Anchor = ({ id, children, href, inline, underline, target }) => {
    return (
        <a className={"anchor" + (inline === true ? " inline" : "") + (underline ===  true ? " underline" : "")} href={href} target={target === true ? "_blank" : "_self"} id={id} rel="noreferrer">{ children }</a>
    )
}

export default Anchor