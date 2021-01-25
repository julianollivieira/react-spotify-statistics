import './ListItem.css';

function ListItem(props) {
    return (
        <div className="list-item">
            <h4>{props.position}</h4>
            <div className="img-container">
                <img src={props.img} alt="Song Icon" />
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default ListItem;
