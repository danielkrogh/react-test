export const MainFooter = (props) => {
    let bgColor = props.backgroundColor;
    let fontColor = "#000"

    if (props.darkMode) {
        bgColor = "#000";
        fontColor = "#fff"
    }

    const style = {
        backgroundColor: bgColor,
        color: fontColor
    }

    return (
        <footer id="main-footer" style={style}>
            <section>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </section>
        </footer>
    )
}