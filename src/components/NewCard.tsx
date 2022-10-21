import { FunctionComponent } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as yup from "yup";
import { errorMsg, successMsg } from "../services/ feedbackService";
import { postCard } from "../services/cardService";
import { useNavigate } from "react-router-dom";

interface NewCardsProps {}

const NewCards: FunctionComponent<NewCardsProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
      description: "",
      logo: "",
      backgroundImg: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Pleade insert Business Name").min(2),
      address: yup
        .string()
        .required("Pleade Provide Business Address")
        .min(2)
        .max(35),
      phone: yup
        .string()
        .required("Pleade Provide Phone Number")
        .max(10)
        .min(9)
        .matches(
          /^\+?(972\-?)?0?(([23489]{1}\-?\d{7})|[5]{1}\d{1}\-?\d{7})$/,
          "Please provide Valid Phone Format"
        ),
      description: yup
        .string()
      .min(5)
        .required("Tell some things about your business"),
      logo: yup.string().required("Pleade insert Logo URL"),
      backgroundImg: yup.string().required("Pleade insert Header Image URL"),
    }),
    onSubmit: (values) => {
      postCard(values)
        .then((res) => {
          successMsg(` ${res.data.name}'s Card Created Successfully`);
          navigate("/bizCardz");
        })
        .catch((err) => {
          errorMsg("Something went wrong. Please try again");
          console.log(err);
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center">
          <span>Add New BizCard</span>
        </h1>
      </div>
      <div className="container cardForm">
        <form
          className="bg-white p-4 rounded mx-auto form"
          style={{ minWidth: "40%", maxWidth: "1000px" }}
          onSubmit={formik.handleSubmit}
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="."
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="name">Business Name</label>
            {formik.touched.name && formik.errors.name ? (
              <p className="text-danger small my-1">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="."
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="address">Address</label>
                {formik.touched.address && formik.errors.address ? (
                  <p className="text-danger small my-1">
                    {formik.errors.address}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="."
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  maxLength={10}
                />
                <label htmlFor="phone">Phone</label>
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="text-danger small my-1">
                    {formik.errors.phone}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="logo"
                  placeholder="."
                  name="logo"
                  onChange={formik.handleChange}
                  value={formik.values.logo}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="logo">Logo URL</label>{" "}
                {formik.touched.logo && formik.errors.logo ? (
                  <p className="text-danger small my-1">{formik.errors.logo}</p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="backgroundImg"
                  placeholder="."
                  name="backgroundImg"
                  onChange={formik.handleChange}
                  value={formik.values.backgroundImg}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="backgroundImg">Card Header URL</label>
                {formik.touched.backgroundImg && formik.errors.backgroundImg ? (
                  <p className="text-danger small my-1">
                    {formik.errors.backgroundImg}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="."
              id="description"
              style={{ height: "130px" }}
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
            ></textarea>
            <label htmlFor="description">Description</label>
            {formik.touched.description && formik.errors.description ? (
              <p className="text-danger small my-1">
                {formik.errors.description}
              </p>
            ) : null}
          </div>

          <button type="submit" className="btn btn-warning w-100 registerBtn">
            Add BizCard
          </button>
        </form>
      </div>
      <div className="space">.</div>
    </>
  );
};

export default NewCards;
