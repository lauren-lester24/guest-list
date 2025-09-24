export default function GuestDetails({ guest, onBack, loading }) {
  if (loading) {
    return <p>Loading Guest....</p>;
  }

  if (!guest) {
    return <p>Couldn't find guest</p>;
  }
  return (
    <article className="card">
      <button className="btn" onClick={onBack}>
        Back
      </button>
      <h2>{guest.name}</h2>
      <h2>
        {guest.email}
      </h2>
      <h2>
        {guest.phone}
      </h2>
   <p>
    {guest.bio}
   </p>
   <p>
    {guest.job}
   </p>

      <p>{guest.description}</p>
    </article>
  );
}

