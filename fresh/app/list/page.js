export default function List() {
    let items = ['Tomatoes', 'Pasta', 'Coconut']

    return (
      <div>
        <h2 className="title">Products</h2>
        {
          items.map((item, i)=>{
            return (
              <div className="food" key={i}>
                <img src={`/food${i}.png`} className="food-img" />
                <h4>{item} $40</h4>
              </div>
            )
          })
        }
      </div>
    )
  } 