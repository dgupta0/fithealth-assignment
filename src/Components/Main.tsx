import { useState } from "react";
import Form from "./Form";
import Collection from "./Collection";
import Testimonials from "./Testimonials";

export const Main = () => {
  const [citySelected, setIsCitySelected] = useState(false);
  const [doctors, setDoctors] = useState<any[]>([]);
  console.log("doc", doctors);
  return (
    <main>
      <h2>Consultation Booking Form</h2>
      <Form setDoctors={setDoctors} setIsCitySelected={setIsCitySelected} />
      {citySelected && <Collection doctors={doctors} />}
      <Testimonials />
    </main>
  );
};
