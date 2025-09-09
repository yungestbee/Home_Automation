import axios from "axios";
import { Link} from "react-router-dom";

const DoorControl = () => {
  const handleDoor = async (action) => {
    try {
      await axios.post(`http://localhost:5000/api/door/${action}`);
      alert(`Door ${action}ed`);
    } catch (err) {
      alert("Action failed");
    }
  };

  const handleLight = async (action) => {
    try {
      await axios.post(`http://localhost:5000/api/light/${action}`);
      alert(`Light ${action}`);
    } catch (err) {
      alert("Action failed");
    }
  };

  return (
    <>
      <div className="container">
        <div className="updateBtn">
          <Link to="/update-email">
            <button>Update Email</button>
          </Link>
        </div>
        <h1>Home Automation Controls</h1>
        <div className="">
          <h2 className="mb-4 text-lg font-bold">Door Control</h2>
          <div className="buttons">
            <button onClick={() => handleDoor("open")} className="doorOpen">
              Open Door
            </button>
            <button onClick={() => handleDoor("close")} className="doorClose">
              Close Door
            </button>
          </div>
        </div>

        <div className="p-4">
          <h2 className="mb-4 text-lg font-bold">Light Control</h2>
          <div className="buttons">
            <button onClick={() => handleLight("on")} className="lightOn">
              Light On
            </button>
            <button onClick={() => handleLight("off")} className="lightOff">
              Light Off
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoorControl;
