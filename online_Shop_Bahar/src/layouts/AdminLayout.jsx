import React from "react";
import AdminNav from "../components/AdminNav/AdminNav";


export default function AdminLayout({ children }) {


  return (
    <>
 
      <AdminNav/><div className="admin-layout">{children}</div>
    </>
  );
}
