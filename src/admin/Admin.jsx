import React, { useEffect, useState } from "react";
import "./admin.css"
import axios from 'axios';
import Adminheader from "./Adminheader";





const Admin = () => {

    const [data, setdata] = useState([]);
    const [book, setbook] = useState([]);
    const [plan, setplan] = useState([]);
    const [set, setset] = useState("inquires");

    useEffect(() => {
        axios.get("https://garage-p7qv.onrender.com/inquiryget").then(function (response) {
            setdata(response.data.data)
        })

    })

    const demo = () => {
        setset("inquires")

    }
    const demo1 = () => {
        setset("book services")
        axios.get("https://garage-p7qv.onrender.com/servicebookget").then(function (response) {
            setbook(response.data.data)
        })
    }
    const demo2 = () => {
        setset("plan book")
        axios.get("https://garage-p7qv.onrender.com/serviceplanget").then(function (response) {
            setplan(response.data.data)
        })
    }

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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            {/* <td>{e.id}</td> */}
                                                            <td>{e.name}</td>
                                                            <td>{e.email}</td>
                                                            <td>{e.number}</td>
                                                            <td>{e.massage}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
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
                                                    </tr>
                                                </>
                                            )
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plan.map((e) => {
                                          return(
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
                                            </tr>
                                            </>
                                          )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}



export default Admin;