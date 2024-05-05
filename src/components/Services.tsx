import React from "react";

export const OurTeam = () => {
  return (
    <div className="px-8 py-6 text-left">
      <div
        style={{
          borderLeft: "5px solid green",
          height: "100%",
          padding: "0.5rem",
        }}
      >
        <h1 className="text-2xl mb-4">OUR</h1>
        <h2 className="text-3xl">SERVICES</h2>
      </div>
    </div>
  );
};

interface CardProps {
  icon: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <div className="flex-shrink-0 bg-green-700 rounded-lg shadow-md p-4 w-52 h-56 flex flex-col justify-end">
      <i className={`text-2xl ${icon}`}></i>
      <h3 className="text-white text-xl font-medium">{title}</h3>
    </div>
  );
};

const data = [
  {
    title: "Employee Handbook",
    icon: "fas fa-book",
  },
  {
    title: "Project Reports",
    icon: "fas fa-chart-line",
  },
  {
    title: "Project Reports",
    icon: "fas fa-chart-line",
  },
  {
    title: "Project Reports",
    icon: "fas fa-chart-line",
  },
  {
    title: "Project Reports",
    icon: "fas fa-chart-line",
  },
  {
    title: "Project Reports",
    icon: "fas fa-chart-line",
  },
  // ... other items
];

const Services = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row mb-36">
      <div className="md:w-1/3">
        <OurTeam />
      </div>
      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {data.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
