import { useState, useEffect } from "react";
import axios from "axios";

interface Testimonial {
  id: number;
  name: string;
  message: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "https://mocki.io/v1/a8ab8f59-ea01-419c-a81c-a8e1ff40640d"
        );
        setTestimonials(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  const renderTestimonial = testimonials.map((t) => (
    <div className="testimonial-card" key={t.id}>
      <h5>{t.name}</h5>
      <p>{t.message}</p>
    </div>
  ));
  return (
    <section>
      <h2>Aprreciation from Happy Customers</h2>
      <div className="testimonial-container">{renderTestimonial}</div>
    </section>
  );
};

export default Testimonials;
