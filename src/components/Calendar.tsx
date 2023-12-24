
const Calendar = ({scheduled, reoccuring}) => {

  return (
        scheduled.map(event => 
            <div>
                <div>{event.name}</div>
                <div>{event.time}</div>
            </div>)
    )
}

export default Calendar