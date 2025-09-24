import { useEffect, useState } from "react";
import { getAllGuest, getGuestById} from "./api/guests";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";


export default function App() {
 const [guests, setGuests] = useState([]);
 const [selectedGuest, setSelectedGuest] = useState(null);
const [selectedId, setSelectedId] = useState(null);
const [loading, setLoading] = useState(false);

 console.log("selectedId", selectedId);
 console.log("selectedGuest", selectedGuest);

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

useEffect(() => {
 if (!selectedId) return;
 async function loadSingleGuest() {
  setLoading(true);
  try {
    const data = await getGuestById(selectedId);
    setSelectedGuest(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
  
 }
 loadSingleGuest();
}, [selectedId]);

  return (
  <main className="container">
    {selectedId ? (
      <GuestDetails 
      guest={selectedGuest}
      loading={loading}
      onBack={()=> {
        setSelectedId(null);
        setSelectedGuest(null);
      }}
      />
    ) : (
  
 <GuestList guests ={guests} setSelectedId={setSelectedId} />
    )}
  </main>
  );
}
