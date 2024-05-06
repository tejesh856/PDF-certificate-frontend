import React, { useContext } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { datacontext } from "../Datacontext";

export default function Certificategen() {
  const {
    isOpen,
    setIsOpen,
    loading,
    setLoading,
    formData,
    setFormData,
    err,
    seterr,
  } = useContext(datacontext);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };

      const response = await fetch(
        "http://localhost:8000/api/pdfgenerate",
        requestOptions
      );

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.success === false) {
          seterr({
            name: errorData.message.name ? errorData.message.name[0] : "",
            course: errorData.message.course ? errorData.message.course[0] : "",
            certificatedate: errorData.message.certificatedate
              ? errorData.message.certificatedate[0]
              : "",
          });
          setLoading(false);
          setIsOpen(true);
        }
      } else {
        const responseData = await response.json();
        if (responseData.success === true) {
          const anchor = document.createElement("a");
          anchor.href = responseData.certificatelink;
          anchor.setAttribute("download", "certificate.pdf");
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
        }
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
        setLoading(false);
        setIsOpen(false);
      }
    } catch (error) {
      setLoading(false);
      setIsOpen(true);
      console.error("Error fetching data:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center h-screen w-full">
      <Sidebar />
      <div className="w-full h-full flex items-center justify-center">
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Generate Certificate
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        onSubmit={handleFormSubmit}
        loading={loading}
        onChange={handleInputChange}
        formData={formData}
        setFormData={setFormData}
        err={err}
        seterr={seterr}
      />
    </div>
  );
}
