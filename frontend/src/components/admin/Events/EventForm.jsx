const EventForm = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create / Edit Event</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Event Title" className="w-full px-4 py-2 border rounded" />
        <textarea placeholder="Event Description" className="w-full px-4 py-2 border rounded"></textarea>
        <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-yellow-500">
          Save Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;

