const ItemListContainer = ({greeting}) => {
    const greetingStyles = {
        fontSize:"2rem",
        fontWeight:"bold",
        textAlign:"center",
        color:"#424242",
        marginTop:"200px"
    }
    return (
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainer