import "./signup-component.scss";
import { useState } from "react";
const SignUpComponent = () => {
  const initialFormState = {
    fullname: "",
    email: "",
    password: "",
    repassword: "",
    country: "",
    term: false,
  };

  const initialErros = {
    fullname: "",
    email: "",
    password: "",
    repassword: "",
    country: "",
    term: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errorMsg, setErrorMsg] = useState(initialErros);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    validateForm(name , value);
  };

  const validateForm = (name,value) => {
    let errMsg = "";

    if (name === "fullname") {
      const fullnamePattern = /^[A-Za-z0-9 ]+$/;

      if (!value || value.length < 3 || !fullnamePattern.test(value)) {
        errMsg =
          "name should be least 3 characters and only letters and numbers.";
      }
    }

    if (name === "email") {
      const emailPattern = /\S+@\S+\.\s+/;

      if (!value || emailPattern.test(value)) {
        errMsg = "Please enter a valid Email.";
      }
    }

    if (name === "password") {
      if (!value || value.length < 7) {
        errMsg = "Password must be at least 7 chatacters log.";
      }
    }

    if (name === "repassword") {
      if (!value || value !== formData.password ) {
        errMsg = "Passwords do not match.";
      }
    }

    switch (name) {
      case "country":
        if (!value) {
          errMsg = "please select a country.";
        }
        break;

      case "term":
        if (!value) {
          errMsg = "You must agree to the terms and condinations.";
        }
        break;

      default:
        break;
    }

    setErrorMsg((prevErr)=>({...prevErr,[name]:errMsg}));
    return errMsg==='';
    
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("alle daten", formData);

      const res = await fetch('baseUrl',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData)

      });
      const data = await res.json();

      console.log(data);
      
      setFormData(initialFormState);
      setErrorMsg(initialErros);
    } else {
      console.error("form contain error");
    }
  };

  return (
    <div className="container">
      <div>
        <div>
          <h1>logo</h1>

          <div>
            <h2>Let&apos;s get you started</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label htmlFor="fullname">Full Name </label>
                  {errorMsg.fullname && (
                    <span className="err">{errorMsg.fullname}</span>
                  )}
                </div>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  aria-describedby="fullname-error"
                  className={errorMsg.fullname ? "err-border" : ""}
                />
              </div>

              <div>
                <div>
                  <label htmlFor="email">Email </label>
                  {errorMsg.email && (
                    <span className="err">{errorMsg.email}</span>
                  )}
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errorMsg.email ? "err-border" : ""}
                />
              </div>

              <div>
                <div>
                  <label htmlFor="password">Create password</label>
                  {errorMsg.password && (
                    <span className="err">{errorMsg.password}</span>
                  )}
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errorMsg.password ? "err-border" : ""}
                />
              </div>

              <div>
                <div>
                  <label htmlFor="repassword">Repeat password </label>
                  {errorMsg.repassword && (
                    <span className="err">{errorMsg.repassword}</span>
                  )}
                </div>
                <input
                  type="password"
                  id="repassword"
                  name="repassword"
                  placeholder="Repeat password"
                  value={formData.repassword}
                  onChange={handleChange}
                  className={errorMsg.repassword ? "err-border" : ""}
                />
              </div>

              <div>
                <div>
                  <label htmlFor="countries">Select country </label>
                  {errorMsg.country && (
                    <span className="err">{errorMsg.country}</span>
                  )}
                </div>

                <select
                  name="country"
                  id="countries"
                  value={formData.country}
                  onChange={handleChange}
                  className={errorMsg.repassword ? "err-border" : ""}
                >
                  <option value="">Choose your country</option>
                  <option value="germany">Germany</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="term"
                  name="term"
                  value={formData.term}
                  onChange={handleChange}
                />
                <label htmlFor="term" className={errorMsg.term ? "err" : ""}>
                  I agree to the UNICEF Terms and Conditions
                </label>
                {errorMsg.repassword && (
                  <p className="err">{errorMsg.repassword}</p>
                )}
              </div>

              <button type="submit"> Create account</button>
            </form>

            <div>
              <button>Google</button>
              <button>Github</button>
            </div>
          </div>
        </div>

        <div>text</div>
      </div>
    </div>
  );
};
export default SignUpComponent;
