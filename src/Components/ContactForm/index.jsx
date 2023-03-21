import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

const ContactForm = () => {
  //   const nameref = useRef();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: [value],
    });
  };
  //   console.log(nameref);
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = user;
    if (name && email && phone && subject && message) {
      const res = await fetch(
        "https://reactcontactform-98ed8-default-rtdb.firebaseio.com/reactcontactformany.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            subject,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        alert("Data Store Success Fully");
      }
    } else {
      alert("plz fill all the data ");
    }
  };

  return (
    <>
      <form method="POST">
        <div className={styles.maincontact}>
          <div className={styles.contactsection}>
            <h1 className={styles.contactustext}>Contact US</h1>
            <div className={styles.row}>
              <h6 className={styles.name}>Full Name</h6>
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={user.name}
                  // ref={nameref}
                  onChange={getUserData}
                  autoComplete="off"
                  required
                  className={styles.textinput}
                />
              </label>
            </div>
            <div className={styles.row}>
              <h6 className={styles.name}>Email Address</h6>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={user.email}
                  onChange={getUserData}
                  required
                  className={styles.textinput}
                />
              </label>
            </div>
            <div className={styles.row}>
              <h6 className={styles.name}>Phone Number</h6>
              <label htmlFor="phone number">
                <input
                  type="tel"
                  name="phone"
                  placeholder="9125861720"
                  value={user.phone}
                  onChange={getUserData}
                  required
                  className={styles.textinput}
                />
              </label>
            </div>
            <div className={styles.row}>
              <h6 className={styles.name}>Subject</h6>
              <label htmlFor="Subject">
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  value={user.subject}
                  onChange={getUserData}
                  required
                  className={styles.textinput}
                />
              </label>
            </div>
            <div className={styles.row}>
              <h6 className={styles.name}>Message</h6>
              <label htmlFor="Message">
                <input
                  type="text"
                  name="message"
                  placeholder="Type Your Message"
                  value={user.message}
                  onChange={getUserData}
                  required
                  className={styles.textinput}
                />
              </label>
            </div>
            <button onClick={postData}>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
