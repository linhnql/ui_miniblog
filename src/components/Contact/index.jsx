import React, { useState } from "react";
// import axios from 'axios';
import style from "./styles.module.scss";

import { Navigate } from "react-router-dom";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(contact);

    // axios.post('http://localhost:8080/post/backend/v1/contacts', {
    //     ...contact
    // },
    // {
    //     headers: {
    //         apikey: "2347edfd-c55c-4f59-96ee-600492f904f3",
    //         "Access-Control-Allow-Origin": "*"
    //     }
    // }).then((request) => {
    //     setContact(request.data);
    //     alert('Add Contact Successful');
    //     setRedirect(true);
    //     console.log(request)
    // }).catch((error) => {alert(error)})
  };
  return (
    <div className={style["contact"]}>
      <div className={style["contact__body"]}>
        <div className={style["contact__body--header"]}>Get in touch</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente
          minus omnis accusantium natus, a doloribus numquam sed neque
          architecto adipisci non quia dolor aperiam obcaecati quibusdam
          corporis ullam saepe em est voluptatem, ea quia quis. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Consequuntur, distinctio
          soluta ex ea perferendis corrupti?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          deserunt velit veniam harum ad nulla hic minima odit omnis dolorum
          dolores veritatis unde dolordit recusandae dolore omnis facere
          asperiores incidunt vel autem fuga minus sint eligendi vitae. Facilis,
          quo?
        </p>
        <div>
          <form
            className={style["contact__body--form"]}
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={contact.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={contact.email}
              onChange={handleChange}
            />
            <label htmlFor="message">Email Address</label>
            <textarea
              rows="6"
              name="message"
              id="message"
              placeholder="Enter your message"
              value={contact.message}
              onChange={handleChange}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
