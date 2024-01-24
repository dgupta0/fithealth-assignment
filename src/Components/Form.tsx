import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface FormProps {
  setDoctors: React.Dispatch<React.SetStateAction<any[]>>;
  setIsCitySelected: React.Dispatch<React.SetStateAction<boolean>>;
}
const Form: React.FC<FormProps> = ({ setDoctors, setIsCitySelected }) => {
  const [isMidAge, setIsMidAge] = useState(false);
  const formEl = {
    name: "",
    tel: "",
    age: "",
    city: "",
    company: "",
    complains: "",
    prev: isMidAge ? "No" : "N/A",
  };
  const [form, setForm] = useState(formEl);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cityFromParams = queryParams.get("city");

  useEffect(() => {
    async function getDataFromParams() {
      try {
        const res = await axios.get(
          "https://mocki.io/v1/a39cec73-bb62-46d7-8e4a-f5ce0c3abb58"
        );
        if (cityFromParams) {
          const docs = res.data.filter(
            (d: { city: string }) => d.city.toLowerCase() === cityFromParams
          );
          setIsCitySelected(true);
          setDoctors(docs);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromParams();
  }, [cityFromParams]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "age") {
      if (parseInt(value) >= 40) {
        setIsMidAge(true);
      } else {
        setIsMidAge(false);
      }
    }
  }

  console.log(form);

  async function getData(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://mocki.io/v1/a39cec73-bb62-46d7-8e4a-f5ce0c3abb58"
      );

      const cityToShow = cityFromParams
        ? cityFromParams.toLowerCase()
        : form.city.toLowerCase();

      const doctorsInCity = res.data.filter(
        (d: { city: string }) => d.city.toLowerCase() === cityToShow
      );
      setIsCitySelected(true);
      setDoctors(doctorsInCity);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onKeyDown={(e) => handleKeyDown(e)}>
      <div className="row row1">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="tel"
          name="tel"
          value={form.tel}
          placeholder="Enter 10 digits number"
          onChange={(e) => handleChange(e)}
          pattern="(7|8|9|6)\d{9}"
        />
      </div>
      <div className="row row2">
        <input
          type="number"
          name="age"
          maxLength={3}
          placeholder="age"
          onChange={(e) => handleChange(e)}
          value={form.age}
        />
        <input
          type="text"
          name="city"
          placeholder="enter your city name"
          onChange={(e) => handleChange(e)}
          value={form.city}
        />
        <input
          type="text"
          name="company"
          placeholder="company name"
          onChange={(e) => handleChange(e)}
          value={form.company}
        />
      </div>
      <div className="row row3">
        <input
          type="textarea"
          placeholder="complains"
          name="complains"
          onChange={(e) => handleChange(e)}
          value={form.complains}
        />
      </div>
      {isMidAge && (
        <div className="row4">
          <p>Any previous experience with physiotherapy?</p>
          <input
            type="radio"
            name="prev"
            onChange={(e) => handleChange(e)}
            checked={form.prev === "Yes"}
            value="Yes"
            id="Yes"
          />
          <label className="yes-label" htmlFor="Yes">
            Yes
          </label>
          <input
            type="radio"
            name="prev"
            value="No"
            id="No"
            onChange={(e) => handleChange(e)}
            checked={form.prev === "No"}
          />
          <label htmlFor="No">No</label>
        </div>
      )}
      <button className="onSubmit" onClick={(e) => getData(e)}>
        Get Doctors
      </button>
    </form>
  );
};

export default Form;
