export default function List() {
    let items = ['Tomatoes', 'Pasta', 'Coconut']

    return (
      <div>
        <h2>Products</h2>
        {
          items.map((item)=>{
            return (
              <div className="food">
                <h4>{item} $40</h4>
              </div>
            )
          })
        }
      </div>
    )
  } 