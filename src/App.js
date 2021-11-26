import { useState } from "react";
import Modal from "./components/modal/modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setShowModal(true)}>
        Open modal
      </button>
      {showModal && (
        <Modal
          title={<span>Welcome to UI GEMS</span>}
          content={<h3>This is a sample modal</h3>}
          close={setShowModal}
        />
      )}
    </div>
  );
}

export default App;
