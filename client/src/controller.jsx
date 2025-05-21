import axios from "axios";

const DoorControl = () => {
  const handleDoor = async (action) => {
    try {
      await axios.post(`http://localhost:5000/api/door/${action}`);
      alert(`Door ${action}ed`);
    } catch (err) {
      alert("Action failed");
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-bold">Door Control</h2>
      <button
        onClick={() => handleDoor("open")}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Open Door
      </button>
      <button
        onClick={() => handleDoor("close")}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Close Door
      </button>
    </div>
  );
};

export default DoorControl;
