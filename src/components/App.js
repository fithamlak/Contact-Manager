import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/contacts";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import { ContactsCrudeContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudeContextProvider>
          <Routes>
            <Route path="/" exact element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />

            <Route path="/edit" element={<EditContact />} />

            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </ContactsCrudeContextProvider>
      </Router>
    </div>
  );
}

export default App;
