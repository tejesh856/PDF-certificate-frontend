// Modal.js
import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  loading,
  onChange,
  formData,
  setFormData,
  seterr,
  err,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal absolute top-0  left-0 border border-blue-600 z-50 bg-black/30 h-full w-full"
      overlayClassName="overlay"
    >
      <div className="modal-content bg-white m-4 rounded p-4">
        <h1 className="text-xl font-bold mb-4">Generate Certificate</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <span className="text-red-500">{err.name}</span>
            <label
              htmlFor="name"
              className="flex text-gray-700 font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md px-3 py-2"
              onChange={onChange}
              value={formData.name}
            />
          </div>
          <div className="mb-4">
            <span className="text-red-500">{err.course}</span>
            <label
              htmlFor="course"
              className="block text-gray-700 font-semibold mb-2"
            >
              Course:
            </label>
            <input
              type="text"
              id="course"
              name="course"
              className="w-full border rounded-md px-3 py-2"
              onChange={onChange}
              value={formData.course}
            />
          </div>
          <div className="mb-4">
            <span className="text-red-500">{err.certificatedate}</span>
            <label
              htmlFor="certificatedate"
              className="block text-gray-700 font-semibold mb-2"
            >
              Certificate Date:
            </label>
            <input
              type="date"
              id="certificatedate"
              name="certificatedate"
              className="w-full border rounded-md px-3 py-2"
              onChange={onChange}
              value={formData.certificatedate}
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Certificate"}
            </button>
            <button
              type="button"
              className={`bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => {
                setFormData({
                  name: "",
                  course: "",
                  certificatedate: "",
                });
                seterr({
                  name: "",
                  course: "",
                  certificatedate: "",
                });
                onClose();
              }}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
}
