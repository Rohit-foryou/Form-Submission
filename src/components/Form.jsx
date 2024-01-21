import { useState } from "react";
import axios from 'axios';


function Form() {

  const [name, setName] = useState("");
  const [membershipno, setMembershipno] = useState("");
  const [brno, setBrno] = useState("");
  const [city, setcity] = useState("");
  const [phno, setPhno] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const data = {
        Name: name,
        BarcodeNo: brno,
        MembershipNo: membershipno,
        City: city,
        PhNo: phno,
      };
  
      const response = await axios.post('https://sheet.best/api/sheets/862edf79-9073-42cf-8449-ab5608b4603a', data);
  
      console.log(response);
  
      // Reset form fields after successful submission
      setName('');
      setBrno('');
      setMembershipno('');
      setcity('');
      setPhno('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  

  return (
    <>
    
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Barcode No.
          </label>
          <input
            type=""
            className="form-control"
            // id="exampleFormControlInput1"
            // placeholder=""
            onChange={(e) => setBrno(e.target.value)}
            value={brno}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Membership No.
          </label>
          <input
            type=""
            className="form-control"
            // id="exampleFormControlInput1"
            // placeholder="Membership No."
            onChange={(e) => setMembershipno(e.target.value)}
            value={membershipno}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type=""
            className="form-control"
            // id="exampleFormControlInput1"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            City
          </label>
          <input
            type=""
            className="form-control"
            // id="exampleFormControlInput1"
            // placeholder="City Name"
            onChange={(e) => setcity(e.target.value)}
            value={city}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ph no.
          </label>
          <input
            type=""
            className="form-control"
            // id="exampleFormControlInput1"
            onChange={(e) => setPhno(e.target.value)}
            value={phno}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
