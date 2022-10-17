import { FunctionComponent } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { errorMsg, successMsg } from "../services/ feedbackService";
import { userLogin } from "../services/userService";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().email().required().min(5),
      password: yup.string().required().min(6),
    }),
    onSubmit: (values) => {
      userLogin(values)
        .then((res) => {
          successMsg(`Looged as ${values.email}`);
          sessionStorage.setItem("token", res.data.token);
          navigate("/bizCardz");
        })
        .catch((err) => {
          console.log(err);
          errorMsg("Wrong Email or Password. Please try again");
        });
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="m-3">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="."
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                name="email"
              />
              <label htmlFor="email">Email Address</label>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger small my-1">{formik.errors.email}</p>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="."
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                name="password"
              />
              <label htmlFor="password">Password</label>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger small my-1">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <button type="submit" className="btn btn-warning w-100 registerBtn">
              Log in
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
