import { useEffect, useState } from 'react'


function App() {
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   // Initialize tooltips manually if needed
  //   window.$(function () {
  //     window.$('[data-bs-toggle="tooltip"]').tooltip();
  //   });
  // }, []);

  return (
    <div className="container mt-5 text-center">
    <h1 className="mb-4">Welcome to Bootstrap in React</h1>

    {/* Tooltip Example */}
    <button
      className="btn btn-info"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="This is a tooltip"
    >
      Hover me for Tooltip
    </button>

    {/* Dropdown Example */}
    <div className="dropdown mt-4">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    {/* Modal Example */}
    <button
      className="btn btn-primary mt-4"
      onClick={() => setShowModal(true)}
    >
      Open Modal
    </button>

  
    {showModal && (
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Title</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>This is a Bootstrap modal in React with jQuery and Popper.js.</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )}

    {showModal && <div className="modal-backdrop fade show"></div>}
  </div>
  )
}

export default App
