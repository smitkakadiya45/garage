import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import Adminheader from "./Adminheader";

const Admin = () => {
  const [data, setdata] = useState([]);
  const [book, setbook] = useState([]);
  const [plan, setplan] = useState([]);
  const [set, setset] = useState("inquires");

  useEffect(() => {
    axios.get("https://g-b9eg.onrender.com/inquiryget").then(function(response){
        setdata(response.data.data)
    })
  }, [data, book, plan]);

  const demo = () => {
    setset("inquires");
  };
  const demo1 = () => {
    setset("book services");
    axios
      .get("https://g-b9eg.onrender.com/servicebookget")
      .then(function (response) {
        setbook(response.data.data);
      });
  };
  const demo2 = () => {
    setset("plan book");
    axios
      .get("https://g-b9eg.onrender.com/serviceplanget")
      .then(function (response) {
        setplan(response.data.data);
      });
  };

  const handledelete = (e) => {
    var _id = e.target.getAttribute("data");

    axios
      .post("https://g-b9eg.onrender.com/inquirydelete", { _id })
      .then(function (response) {});
  };
  const handlebookdelete = (e) => {
    var _id = e.target.getAttribute("book");

    axios
      .post("https://g-b9eg.onrender.com/servicebookdelete", { _id })
      .then(function (response) {});
  };
  const handleplandelete = (e) => {
    var _id = e.target.getAttribute("plan");

    axios
      .post("https://g-b9eg.onrender.com/serviceplandelete", { _id })
      .then(function (response) {});
  };

  return (
    <>
      <Adminheader />
      <div className="admin-title">
        <h1>for admin use</h1>
      </div>
      <div className="admin-outer">
        <div className="admin-inner">
          <div className="admin-sidebar">
            <ul>
              <li onClick={demo}>Inquiries</li>
              <li onClick={demo1}>Book Services</li>
              <li onClick={demo2}>Plan Book</li>
            </ul>
          </div>
          <div className="admin-content">
            {set === "inquires" && (
              <div className="admin-section" onClick={demo}>
                <h2>Inquiries</h2>
                <table>
                  <thead>
                    <tr>
                      {/* <th>ID</th> */}
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number</th>
                      <th>massage</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((e) => {
                      return (
                        <>
                          <tr>
                            {/* <td>{e.id}</td> */}
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.number}</td>
                            <td>{e.massage}</td>
                            <td>
                              <button onClick={handledelete} data={e._id}>
                                delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {set === "book services" && (
              <div className="admin-section">
                <h2>Book Services</h2>
                <table>
                  <thead>
                    <tr>
                      {/* <th>ID</th> */}
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number</th>
                      <th>service</th>
                      <th>date</th>
                      <th>time</th>
                      <th>notes</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {book.map((e) => {
                      return (
                        <>
                          <tr>
                            {/* <td>{e.id}</td> */}
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.number}</td>
                            <td>{e.service}</td>
                            <td>{e.date}</td>
                            <td>{e.time}</td>
                            <td>{e.notes}</td>
                            <td>
                              <button onClick={handlebookdelete} book={e._id}>
                                delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {set === "plan book" && (
              <div className="admin-section">
                <h2>Plan Book</h2>
                <table>
                  <thead>
                    <tr>
                      {/* <th>ID</th> */}
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number</th>
                      <th>pack</th>
                      <th>date</th>
                      <th>time</th>
                      <th>price</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.map((e) => {
                      return (
                        <>
                          <tr>
                            {/* <td>{e.id}</td> */}
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.number}</td>
                            <td>{e.serviceplan}</td>
                            <td>{e.date}</td>
                            <td>{e.time}</td>
                            <td>{e.price}</td>
                            <td>
                              <button onClick={handleplandelete} plan={e._id}>
                                delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
