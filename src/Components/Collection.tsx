import React from "react";

interface Doctor {
  id: number;
  name: string;
  city: string;
  expertise: string;
}
interface CollectionProps {
  doctors: Doctor[];
}

const Collection: React.FC<CollectionProps> = ({ doctors }) => {
  const reqCity = doctors[0].city;
  const renderDoctors = doctors.map((d) => (
    <div className="doctor-card" key={d.id}>
      <h3>{d.name}</h3>
      <h4>{d.expertise}</h4>
      <p> {d.city}</p>
    </div>
  ));
  return (
    <div className="collection-container">
      <h2>Here are the list of doctors from {reqCity}</h2>
      <div className="doctors-container">{renderDoctors}</div>
    </div>
  );
};

export default Collection;
