export const MainNav = (props) => {
    let bgColor = props.backgroundColor;
    let fontColor = props.color;

    if (props.darkMode) {
        bgColor = "#000";
        fontColor = "#fff"
    }

    const style = {
        backgroundColor: bgColor,
        color: fontColor
    }

    return (
        <nav id="main-nav" style={style}>
            <ul>
                <li>Hjem</li>
                <li>Om</li>
                <li>Kontakt</li>
            </ul>
        </nav>
    )
}