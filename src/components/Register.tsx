import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/ feedbackService";
import { registerUser } from "../services/userService";

interface RegisterBusinessProps {}

const RegisterBusiness: FunctionComponent<RegisterBusinessProps> = () => {
  const navigate = useNavigate();
  const [biz, setBiz] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", biz: "" },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Please provide your Full Name")
        .min(2, "Full Name must be at least 2 characters"),
      email: yup
        .string()
        .required("Please provide Email Address")
        .min(5, "Email must be at least 5 characters")
        .email("Please provide valid Email"),
      password: yup
        .string()
        .required("Please provide Password")
        .min(6, "Password must be at least 6 characters"),
      biz: yup.boolean(),
    }),
    onSubmit: (values) => {
      let user: User = { ...values, biz: biz };
      registerUser(user)
        .then((res) => {
          successMsg(`${user.name} registered Successfully`);
          sessionStorage.setItem("token", res.data.token);
          navigate("/bizCardz");
        })
        .catch((err) => {
          console.log(err);
          errorMsg(err);
        });
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="m-3">
        <div className="row">
          <div className="col col-lg-5 col-md-7 col-12 order-lg-1 order-sm-2">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="."
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  name="name"
                />
                <label htmlFor="name">Full Name</label>
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-danger small my-1">{formik.errors.name}</p>
                ) : null}
              </div>
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
                  <p className="text-danger small my-1">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
            </div>
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

            <div className="col my-3">
              <div className="page__toggle">
                <label className="toggle">
                  <input
                    className="toggle__input"
                    type="checkbox"
                    value={formik.values.biz}
                    onBlur={formik.handleBlur}
                    name="biz"
                    onChange={() => setBiz(!biz)}
                  />
                  <span className="toggle__label">
                    <span className="toggle__text">
                      I'm a Business Owner (100% free)
                    </span>
                  </span>
                </label>
              </div>
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-warning registerBtn w-100"
              >
                {biz ? <>Register as Business Owner</> : <>Register as User</>}
              </button>
            </div>
          </div>
          <div className="col order-lg-2 order-sm-1">
            {biz ? (
              <>
                <div className="row text-center registerAsUser">
                  <h2>
                    <span>Register as Business Owner</span>
                  </h2>
                  <div className="col-6 my-3">
                    <h4 className="m-0 p-0">Unlimited cards</h4>
                    <p className="m-0 p-0">
                      You have the ability to create more than one card for your
                      business under a single account
                    </p>
                  </div>
                  <div className="col-6 my-3">
                    <h4 className="m-0 p-0">Easy to create, edit and share</h4>
                    <p className="m-0 p-0">
                      Our user interface is easy to operate, allowing you to
                      make changes and share them worldwide
                    </p>
                  </div>
                  <div className="col-6 my-3">
                    <h4 className="m-0 p-0">Environment friendly</h4>
                    <p className="m-0 p-0">
                      As you don’t print your business cards, you don’t have to
                      use papers. This eliminates the need of cutting trees for
                      paper.
                    </p>
                  </div>
                  <div className="col-6 my-3">
                    <h4 className="m-0 p-0">Professional first impression</h4>
                    <p className="m-0 p-0">
                      With BizCardz you will stand out from the crowd since not
                      everyone is using digital business cards. (it's 2022,
                      duh!)
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row text-center registerAsUser">
                  <h2>
                    <span>Register as User</span>
                  </h2>
                  <div className="col-6 my-3">
                    <h4 className="m-0 p-0">View & connect Business</h4>
                    <p className="m-0 p-0">
                      Dozens of businesses are already registered. You can
                      easily contact and see the their details
                    </p>
                  </div>
                  <div className="col-6 my-3">
                    <h4 className="m-0 p-0">Quick & Easy Access</h4>
                    <p className="m-0 p-0">
                      From your mobile, computer or even tablet!
                      <br /> BizCardz available wherever you choose
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterBusiness;
