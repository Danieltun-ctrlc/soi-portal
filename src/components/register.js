import { useState } from "react";
import "../assets/register.css";
import Nav from "./header";
export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.course) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <>
      <Nav />
      <div className="register-page">
        <div className="register-card">
          {submitted ? (
            <div className="register-success">
              <h2>Registration Successful 🎉</h2>
              <p>
                Thank you, <strong>{form.name}</strong>!
              </p>
              <p>
                You have registered interest in <strong>{form.course}</strong>.
              </p>
              <p>A confirmation email will be sent to {form.email}.</p>

              <button
                className="register-btn"
                onClick={() => setSubmitted(false)}
              >
                Register Another
              </button>
            </div>
          ) : (
            <>
              <h1 className="register-title">Course Registration</h1>
              <p className="register-subtitle">
                Submit your interest in a diploma.
              </p>

              <form onSubmit={handleSubmit} className="register-form">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </label>

                <label>
                  Select Course
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                  >
                    <option value="">-- Choose a course --</option>
                    <option value="Diploma in IT">Diploma in IT</option>
                    <option value="Diploma in AI & Analytics">
                      Diploma in AI & Analytics
                    </option>
                    <option value="Diploma in FinTech">
                      Diploma in FinTech
                    </option>
                    <option value="Diploma in Cybersecurity">
                      Diploma in Cybersecurity
                    </option>
                    <option value="Diploma in Cloud Computing">
                      Diploma in Cloud Computing
                    </option>
                  </select>
                </label>

                <button type="submit" className="register-btn">
                  Submit Registration
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
