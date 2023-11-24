export default function Weekview() {
 
  const months = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];

  const d0 = new Date();
  const month0 = months[d0.getMonth()];
  const date0 = d0.getDate();

  let d1 = new Date(Date.now() - 864e5);
  const month1 = months[d1.getMonth()];
  const date1 = d1.getDate();

  let d2 = new Date(Date.now() - 2 * 864e5);
  const month2 = months[d2.getMonth()];
  const date2 = d2.getDate();

  let d3 = new Date(Date.now() - 3*864e5);
  const month3 = months[d3.getMonth()];
  const date3 = d3.getDate();

  let d4 = new Date(Date.now() - 4 * 864e5);
  const month4 = months[d4.getMonth()];
  const date4 = d4.getDate();

  let d5 = new Date(Date.now() -5*864e5);
  const month5 = months[d5.getMonth()];
  const date5 = d5.getDate();

  let d6 = new Date(Date.now() -6*864e5);
  const month6 = months[d6.getMonth()];
  const date6 = d6.getDate();

  const weekdays = [
    {
      day : `${date0}` , 
      month: `${month0}`,
      doneStatus : ""
     }, 

    {
     day : `${date1}` , 
     month: `${month1}`,
     doneStatus : ""
    }, 

    {
     day : `${date2}` , 
     month: `${month2}`,
     doneStatus : ""
    }, 

    {
     day : `${date3}` , 
     month: `${month3}`,
     doneStatus : ""
    }, 

    {
     day : `${date4}` , 
     month: `${month4}`,
     doneStatus : ""
    }, 

    {
     day : `${date5}` , 
     month: `${month5}`,
     doneStatus : ""
    }, 

    {
     day : `${date6}` , 
     month: `${month6}`,
     doneStatus : ""
    }, 
  ];

  return (

    <div className="grid grid-cols-7 px-3 text-center">

      <div className=""></div> {/* Div vacío para el grid, NO BORRAR!!! */}

      <div className="flex justify-around col-span-6 font-medium max-[550px]:text-sm max-[410px]:text-xs">

        <div className="flex flex-col">
          <span>{weekdays[0].month}</span>
          <span>{weekdays[0].day}</span>
        </div>

        <div className="flex flex-col">
          <span>{weekdays[1].month}</span>
          <span>{weekdays[1].day}</span>
        </div>

        <div className="flex flex-col">
          <span>{weekdays[2].month}</span>
          <span>{weekdays[2].day}</span>
        </div>

        <div className="flex flex-col">
          <span>{weekdays[3].month}</span>
          <span>{weekdays[3].day}</span>
        </div>

        <div className="flex flex-col">
          <span>{weekdays[4].month}</span>
          <span>{weekdays[4].day}</span>
        </div>

        <div className="flex flex-col">
          <span>{weekdays[5].month}</span>
          <span>{weekdays[5].day}</span>
        </div>

        <div className="flex flex-col">
          <span>{weekdays[6].month}</span>
          <span>{weekdays[6].day}</span>
        </div>

      </div>

    </div>

  );
}
