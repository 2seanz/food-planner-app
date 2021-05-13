const ItemContainer = ({ item }) => {

    return (
        <div>
            <div className="bg-secondary text-center p-4">
                <div className="container">
                    <div className="ht-tm-header">
                        <h3 className="display-5">{`Comments for ${item.dish}`}</h3>
                        <span className="lead text-primary">{`Check out what other FarmFresh users have to say about our delicious ${item.dish.toLowerCase()}!`}</span>
                    </div>
                </div>
            </div>
        
            <div className="row m-3 p-5 justify-content-center">
                <div className="card m-2 p-2">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{item.dish}</h4>
                        <h5 className="card-title">{ null }</h5>
                        <p className="card-text">{item.description}</p>
                        <button className="button p-1 m-1">Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default ItemContainer