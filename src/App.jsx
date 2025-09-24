import { useEffect, useState } from "react";
import { getAllGuest } from "./api/guests";
import GuestList from "./components/GuestList";

export default function App() {
 const [guests, setGuests] = useState([]);
 


 

useEffect(() => {
  async function loadGuest() {
    try {
      const data = await getAllGuest();
      console.log("data in guests", data);
      setGuests(data);
    } catch (error) {
      console.error(error);
    }
  }
  loadGuest();
}, []);











// fetch single guest

// useEffect(() => {
//  if (!selectedId) return;
//  async function loadSingleGuest() {
//   setLoading(true);
//   try {
//     const data = await getGuestsById(selectedId);
//     setSelectedGuest(data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
  
//  }
//  loadSingleGuest();
// }, [selectedId]);

  return (
  <main className="container">
  <h1>Guest</h1>
 <GuestList guests ={guests}/>
  </main>);
}
