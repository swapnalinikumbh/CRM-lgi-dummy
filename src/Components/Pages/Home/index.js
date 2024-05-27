import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import privatecar from "../../../assets/images/privatecar.png";
import twowheeler from "../../../assets/images/twowheeler.png";
import health from "../../../assets/images/health.png";
import "./Home.scss";
import { ROUTES } from "../../../routes/routes";
const productArrays = [
  {
    id: 1,
    name: "Private Car Insurance",
    description: "Private Car Insurance",
    image: privatecar,
    link: ROUTES.PRIVATE_CAR_DASHBOARD,
  },
  {
    id: 2,
    name: "Two Wheeler Insurance",
    description: "Two Wheeler Insurance",
    image: twowheeler,
    link: ROUTES,
  },
  {
    id: 3,
    name: "Health Insurance",
    description: "Health Insurance",
    image: health,
    link: ROUTES,
  },
];
const HomeComponent = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const onClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="container" style={{ backgroundColor: "#F9F9FD" }}>
      <div className="product-component-home-main-container">
        <h2 className="header">
          {" "}
          Select Product
        </h2>
        <div className="description">
          Welcome to our insurance family! As you navigate our CRM platform,
          feel empowered to explore the full range of products tailored to your
          unique needs. Select from the options below to manage your policies
          seamlessly and efficiently.
        </div>
        <div className="product-component-home-container">
          {productArrays?.map((value, index) => {
            return (
              <div key={value?.id} className="card">
                <img src={value?.image} className="card-img-top" alt="..." />
                <button
                  type="button"
                  className="btn product-component-button"
                  onClick={() => {
                    navigate(value?.link);
                  }}
                >
                  {value?.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
