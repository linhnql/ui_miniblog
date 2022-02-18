import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { alertService } from "../../Alert/alert.service";
import axios from "axios";
import "./styles.css";

const categorySelect = [
  "ART", "MUSIC", "TRAVEL", "TECH"
]

const ContactReply = () => {
  const [loader, setLoader] = useState(false);
  const [values, setValues] = useState({});
  const { id } = useParams();
  const [blogId, setBlogId] = useState();

  const baseURL = `http://localhost:8082/miniblog/backend/v1/contacts/${id}`;
  const headers = {
    apikey: "2347edfd-c55c-4f59-96ee-600492f904f3",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  useEffect(() => {
    axios.get(baseURL, { headers }).then((response) => {
      setValues(response.data);
      setBlogId(id)
    });
  }, [blogId]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    if (!values.reply) {
      alert("Please enter reply message!");
    } else {
      alert(`Reply successful. Thank you!`);
      window.location.replace(`/contacts/${id}`);
      // axios
      //   .put(
      //     `http://localhost:8082/miniblog/backend/v1/blogs/${id}`,
      //     {
      //       ...values,
      //     },
      //     {
      //       headers: {
      //         apikey: "2347edfd-c55c-4f59-96ee-600492f904f3",
      //         "Access-Control-Allow-Origin": "*",
      //         "Content-Type": "application/json"
      //       },
      //     }
      //   )
      //   .then((request) => {
      //     setValues(request.data);
      //     alert(`Edit ${values.title} successful. Thank you!`);
      //     setLoader(false);
      //     window.location.replace(`/blogs/${id}`);
      //     // console.log(request);
      //   })
      //   .catch((error) => {
      //     alert("Something went wrong! Please try again.");
      //     console.log(values);
      //   });
    }
  };

  return (
    <div className="container">
      <form action="action_page.java">
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">
              From
            </label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Contact name..."
              defaultValue={values?.email}
              readOnly={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">
              Messenger
            </label>
          </div>
          <div className="col-75">
            <textarea
              id="intro"
              name="intro"
              placeholder="Write something..."
              defaultValue={values?.messenger}
              readOnly={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">
              Reply<span>*</span>
            </label>
          </div>
          <div className="col-75">
            <textarea
              id="reply"
              name="reply"
              placeholder="Write something..."
              rows="20"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <input
            type="submit"
            name="submit"
            value="Reply"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
        <div>
          <Link className="back" to={`/contacts/${id}`}>
            ← Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ContactReply;
