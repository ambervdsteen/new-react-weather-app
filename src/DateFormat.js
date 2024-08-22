

function DateFormat ({date}){
let days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let day = days[date.getDay()]
let datenumber=date.getDate()
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month=months[date.getMonth()]
let hour = date.getHours()
if (hour<10) {hour=`0${hour}`;}
let minutes=date.getMinutes()
if (minutes < 10) {minutes =`0${minutes}`;}

return(
   
   <div>
{day}, {month} {datenumber}, {hour}:{minutes}</div>


);
}

export default DateFormat;