import React, { useState } from "react";
import { alertService } from "../../Alert/alert.service";
import "./styles.css";

const AddBlog = () => {
  const [values, setValues] = useState({
    title: "",
    category: "",
    image: "",
    content: ""
  });
  const [loader, setLoader] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    if (!values.title || !values.content) {
      alertService.error("Please enter ALL mandatory fields!");
    } else {
      alertService.success("Message Sent! Thank you for contacting us.");
      setLoader(false);
    }
  };

  return (
    <div className="container">
      <form action="action_page.java">
        <div className="row">
          <div className="col-25">
            <label htmlFor="title">
              Title<span>*</span>
            </label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Blog title..."
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="category">
              Category<span>*</span>
            </label>
          </div>
          <div className="col-75">
            <select id="category" name="category">
              <option value="art">ART</option>
              <option value="music">MUSIC</option>
              <option value="travel">TRAVEL</option>
              <option value="technology">TECH</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="image">Image</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Image url..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">
              Content<span>*</span>
            </label>
          </div>
          <div className="col-75">
            <textarea
              id="content"
              name="content"
              placeholder="Write something..."
              rows="20"
              required
            ></textarea>
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
