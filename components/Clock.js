import { useState, useEffect } from "react";

export default function Clock(props) {
   // useState is a hook that creates a state variable and a function to update it
   const [date, setDate] = useState(null); // Note: Never set this to unknown data obtained at run time (ie: new Date(), a random number, etc.) - see: https://nextjs.org/docs/messages/react-hydration-error
   
   // useEffect is a hook that runs after the component is rendered
   useEffect(() => {
      // set the initial date once
      setDate(new Date());

      // update the date once every second
      const timerID = setInterval(() => {
         setDate(new Date());
      }, 1000);

      // cleanup function
      return () => {
         clearInterval(timerID);
      };
   }, []);

   return (
      <p>
         Locale: {props.locale}: {date?.toLocaleTimeString(props.locale)}
      </p>
   );
}
