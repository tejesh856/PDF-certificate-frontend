import React, { createContext, useState } from "react";
export const datacontext = createContext();
export default function Datacontext({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [err, seterr] = useState({
    name: "",
    course: "",
    certificatedate: "",
  });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    certificatedate: "",
  });
  const [clicked, setclicked] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState({
    studentCertificate: "bg-blue-600 text-white",
    certificatesList: "bg-transparent",
    settings: "bg-transparent",
  });
  return (
    <datacontext.Provider
      value={{
        isOpen,
        setIsOpen,
        loading,
        setLoading,
        formData,
        setFormData,
        clicked,
        setclicked,
        backgroundColor,
        setBackgroundColor,

        err,
        seterr,
      }}
    >
      {children}
    </datacontext.Provider>
  );
}
