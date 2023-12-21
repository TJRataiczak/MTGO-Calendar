
const Calendar = ({data}) => {

    console.log(data.map(event => event.name))

  return (
        data.map(event => 
            <div>
            <div></div>
            <div>{event.name}</div>
            </div>)
    )
}

export default Calendar