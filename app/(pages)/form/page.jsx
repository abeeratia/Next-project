

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Formik } from "formik";
// // Layout
// import Header from "../layout/header";
// import Footer from "../layout/footer";
// import HeroPage from "../elements/heroPage";
// // Import Images
// import pic1 from "../../images/about/pic-1.jpg";
// import icon1 from "../../images/icon/icon1.png";
// import icon2 from "../../images/icon/icon2.png";
// import icon3 from "../../images/icon/icon3.png";
// /* import redux*/
// import { useDispatch, useSelector } from "react-redux";
// import { contactUser } from "../../store/contactSlice";
// // import yup
// import * as yup from "yup";

// const FamilyCart = () => {
//     const lang = useSelector((state) => state.lang.value.lang);
//     const main = useSelector((state) => state.lang.value.contact);
//     const details = useSelector((state) => state.lang.value.contactDetails);
//     const { contact } = useSelector((state) => state.lang.value.pages);
//     const dispatch = useDispatch();
//     const [inputVal, setInputVal] = useState([]);
//     const [initialValues, setInitialValues] = useState({
//         name: "",
//         organization: "Agouz Hospital",
//         phone: "",
//         gender: "",
//         address: "",
//         city: "",
//         state: "",
//         birthday: "",
//         birthdayPlace: "",
//         idNum: "",
//         work: "",
//         workPlace: "",
//         peopleNumber: "",
//         card: "",
//     });

//     const handleFormSubmit = (values, { resetForm }) => {
//         // dispatch(contactUser(values));
//         resetForm({ values: "" });
//     };
//     const arr = [];
//     const handlenumberChange = (num) => {
//         setInputVal(num);
//         for (let i = 0; i < num; i++) {
//             arr.push({
//                 name: `people${i + 1}`,
//             });
//         }
//     }
//     return (
//         <>
//             <Header />

//             <div className="page-content bg-white">
//                 <HeroPage
//                     text={contact[lang]}
//                     className={"page-banner banner-lg contact-banner"}
//                 />

//                 <section className="">
//                     <div className="container">
//                         <div className="contact-wraper">
//                             <div className="row">
//                                 <div className="col-lg-6 mb-30">
//                                     <Formik
//                                         initialValues={initialValues}
//                                         validationSchema={checkoutSchema}
//                                         onSubmit={handleFormSubmit}
//                                     >
//                                         {({
//                                             values,
//                                             errors,
//                                             touched,
//                                             handleChange,
//                                             handleBlur,
//                                             handleSubmit,
//                                             isSubmitting,
//                                         }) => (
//                                             <form
//                                                 onSubmit={handleSubmit}
//                                                 className="form-wraper contact-form ajax-form"
//                                             >
//                                                 <div className="row">
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="name"
//                                                             name="name"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.name}
//                                                             className="form-control"
//                                                             placeholder={"الاسم رباعى"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.name && touched.name && errors.name}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <select id="gender" value={values.gender} onChange={handleChange} className="form-control">
//                                                             <option value="">-- اختر النوع --</option>
//                                                             <option value="male">Male</option>
//                                                             <option value="female">Female</option>
//                                                         </select>
//                                                         <span className="error">
//                                                             {errors.gender && touched.gender && errors.gender}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="address"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.address}
//                                                             className="form-control"
//                                                             placeholder={"العنوان"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.address && touched.address && errors.address}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="state"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.state}
//                                                             className="form-control"
//                                                             placeholder={"المحافظة"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.state && touched.state && errors.state}
//                                                         </span>
//                                                     </div>

//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="city"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.city}
//                                                             className="form-control"
//                                                             placeholder={"المدينة"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.city && touched.city && errors.city}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="date"
//                                                             name="birthday"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.birthday}
//                                                             className="form-control"
//                                                             placeholder={"تاريخ الميلاد"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.birthday && touched.birthday && errors.birthday}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="birthdayPlace"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.birthdayPlace}
//                                                             className="form-control"
//                                                             placeholder={" محل الميلاد"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.birthdayPlace && touched.birthdayPlace && errors.birthdayPlace}
//                                                         </span>
//                                                     </div>

//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="number"
//                                                             name="idNum"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.idNum}
//                                                             className="form-control"
//                                                             placeholder={" الرقم القومى "}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.idNum && touched.idNum && errors.idNum}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="work"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.work}
//                                                             className="form-control"
//                                                             placeholder={"المهنة"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.work && touched.work && errors.work}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="workPlace"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.workPlace}
//                                                             className="form-control"
//                                                             placeholder={" جهه العمل "}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.workPlace && touched.workPlace && errors.workPlace}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="phone"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.phone}
//                                                             className="form-control"
//                                                             placeholder={"رقم الهاتف"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.phone && touched.phone && errors.phone}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <select id="card" value={values.card} onChange={handleChange} className="form-control">
//                                                             <option value="">-- اختر العدد --</option>
//                                                             <option value="alone">فردى</option>
//                                                             <option value="family">عيله</option>
//                                                         </select>

//                                                         <span className="error">
//                                                             {errors.card && touched.card && errors.card}
//                                                         </span>
//                                                     </div>
//                                                     {values.card === 'family' && (
//                                                         <div className="form-group col-md-12 ">
//                                                             <input
//                                                                 type="number"
//                                                                 name="peopleNumber"
//                                                                 onChange={handleChange}
//                                                                 onBlur={handleBlur}
//                                                                 value={values.peopleNumber}
//                                                                 className="form-control"
//                                                                 placeholder={"عدد الافراد"}
//                                                             />
//                                                             <span className="error">
//                                                                 {errors.peopleNumber && touched.peopleNumber && errors.peopleNumber}
//                                                             </span>
//                                                         </div>
//                                                     )}
//                                                     {values.peopleNumber > 0 ? (
//                                                         handlenumberChange(values.peopleNumber)
//                                                     ) : null}
//                                                     {arr.length > 0 && (
//                                                         arr.map((item, i) => {
//                                                             return (
//                                                                 <>
//                                                                     <div className="form-group col-md-12">
//                                                                         <input
//                                                                             type="name"
//                                                                             name="name"
//                                                                             onChange={handleChange}
//                                                                             onBlur={handleBlur}
//                                                                             value={values.name}
//                                                                             className="form-control"
//                                                                             placeholder={"الاسم رباعى"}
//                                                                         />
//                                                                         <span className="error">
//                                                                             {errors.name && touched.name && errors.name}
//                                                                         </span>
//                                                                     </div>
//                                                                     <div className="form-group col-md-12">
//                                                                         <select id="gender" value={values.gender} onChange={handleChange} className="form-control">
//                                                                             <option value="">-- اختر النوع --</option>
//                                                                             <option value="male">Male</option>
//                                                                             <option value="female">Female</option>
//                                                                         </select>
//                                                                         <span className="error">
//                                                                             {errors.gender && touched.gender && errors.gender}
//                                                                         </span>
//                                                                     </div>
//                                                                 </>
//                                                             )
//                                                         })
//                                                     )}
//                                                     <div className="col-lg-12">
//                                                         <button
//                                                             name="submit"
//                                                             type="submit"
//                                                             value="Submit"
//                                                             className="btn w-100 btn-secondary btn-lg"
//                                                             disabled={isSubmitting}
//                                                         >
//                                                             {main.button[lang]}
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </form>
//                                         )}
//                                     </Formik>
//                                 </div>
//                                 <div className="col-lg-6 mb-30">
//                                     <div
//                                         className="contact-info ovpr-dark"
//                                         style={{ backgroundImage: "url(" + pic1 + ")" }}
//                                     >
//                                         <div className="info-inner">
//                                             <h4 className="title mb-30">{main.text[lang]}</h4>
//                                             <div className="icon-box">
//                                                 <h6 className="title">
//                                                     <i className="ti-map-alt"></i>
//                                                     {main.locationName[lang]}
//                                                 </h6>
//                                                 <p>{main.location[lang]}</p>
//                                             </div>
//                                             <div className="icon-box">
//                                                 <h6 className="title">
//                                                     <i className="ti-id-badge"></i>
//                                                     {main.emailHeading[lang]}
//                                                 </h6>
//                                                 <Link to="#" className="text-white">
//                                                     {main.emailText[lang]}
//                                                 </Link>
//                                                 <p>{main.phoneNumber[lang]}</p>
//                                             </div>
//                                             <div className="icon-box">
//                                                 <h6 className="title">
//                                                     <i className="ti-world"></i>
//                                                     {main.follow[lang]}
//                                                 </h6>
//                                                 <ul className="social-media">
//                                                     <li>
//                                                         <a
//                                                             rel="noreferrer"
//                                                             target="_blank"
//                                                             href="https://www.facebook.com/Elagouz.Hospital/"
//                                                         >
//                                                             <i className="fab fa-facebook"></i>
//                                                         </a>
//                                                     </li>
//                                                     <li>
//                                                         <a
//                                                             rel="noreferrer"
//                                                             target="_blank"
//                                                             href="https://youtube.com/channel/UCZqQMivKhy2gKcMCq3X6WdQ"
//                                                         >
//                                                             <i className="fab fa-youtube"></i>
//                                                         </a>
//                                                     </li>
//                                                     <li>
//                                                         <a
//                                                             rel="noreferrer"
//                                                             target="_blank"
//                                                             href="https://instagram.com/elagouz_hospital?igshid=YmMyMTA2M2Y"
//                                                         >
//                                                             <i className="fab fa-instagram"></i>
//                                                         </a>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="section-area section-sp1">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-4 col-md-6 mb-30">
//                                 <div className="feature-container feature-bx4 feature4">
//                                     <div className="icon-md feature-icon">
//                                         <img src={icon1} alt="" />
//                                     </div>
//                                     <div className="icon-content">
//                                         <h5 className="ttr-title">{details.contactNumber[lang]}</h5>
//                                         <p>01111149544</p>
//                                         <p>01222273236</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6 mb-30">
//                                 <div className="feature-container feature-bx4 feature3">
//                                     <div className="icon-md feature-icon">
//                                         <img src={icon3} alt="" />
//                                     </div>
//                                     <div className="icon-content">
//                                         <h5 className="ttr-title">{details.email[lang]}</h5>
//                                         <p>AgouzHospital2000@gmail.com</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6 mb-30">
//                                 <div className="feature-container feature-bx4 feature2">
//                                     <div className="icon-md feature-icon">
//                                         <img src={icon2} alt="" />
//                                     </div>
//                                     <div className="icon-content">
//                                         <h5 className="ttr-title">
//                                             {details.address.heading[lang]}
//                                         </h5>
//                                         <p>{details.address.text[lang]}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>

//             <Footer />
//         </>
//     );
// };

// const phoneRegExp =
//     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//     name: yup.string().required("required"),
//     phone: yup
//         .string()
//         .matches(phoneRegExp, "رقم التليفون غير صحيح ")
//         .required("مطلوب"),
//     gender: yup.string().required("مطلوب"),
//     address: yup.string().required("مطلوب"),
//     city: yup.string().required("مطلوب"),
//     state: yup.string().required("مطلوب"),
//     birthday: yup.string().required(" تاريخ الميلادمطلوب"),
//     birthdayPlace: yup.string().required("مطلوب"),
//     idNum: yup.number().required("مطلوب"),
//     work: yup.string().required("مطلوب"),
//     workPlace: yup.string().required("مطلوب"),
//     card: yup.string().required("مطلوب"),
//     peopleNumber: yup.number().required("مطلوب"),
// });

// export default FamilyCart;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Formik } from "formik";
// import Header from "../layout/header";
// import Footer from "../layout/footer";
// import HeroPage from "../elements/heroPage";
// import pic1 from "../../images/about/pic-1.jpg";
// import icon1 from "../../images/icon/icon1.png";
// import icon2 from "../../images/icon/icon2.png";
// import icon3 from "../../images/icon/icon3.png";
// import { useDispatch, useSelector } from "react-redux";
// import { contactUser } from "../../store/contactSlice";
// import * as yup from "yup";

// const FamilyCart = () => {
//     const lang = useSelector((state) => state.lang.value.lang);
//     const main = useSelector((state) => state.lang.value.contact);
//     const details = useSelector((state) => state.lang.value.contactDetails);
//     const { contact } = useSelector((state) => state.lang.value.pages);
//     const dispatch = useDispatch();

//     const [initialValues, setInitialValues] = useState({
//         name: "",
//         organization: "Agouz Hospital",
//         phone: "",
//         gender: "",
//         address: "",
//         city: "",
//         state: "",
//         birthday: "",
//         birthdayPlace: "",
//         idNum: "",
//         work: "",
//         workPlace: "",
//         peopleNumber: "",
//         card: "",
//         familyMembers: []
//     });

//     const handleFormSubmit = (values, { resetForm }) => {
//         // dispatch(contactUser(values));
//         resetForm({ values: "" });
//     };

//     useEffect(() => {
//         if (initialValues.peopleNumber) {
//             const familyMembers = Array.from({ length: initialValues.peopleNumber }, (_, index) => ({
//                 name: "",
//                 gender: "",
//                 personalID:"",
//             }));
//             setInitialValues(prevState => ({
//                 ...prevState,
//                 familyMembers
//             }));
//         }
//     }, [initialValues.peopleNumber]);

//     return (
//         <>
//             <Header />

//             <div className="page-content bg-white">
//                 <HeroPage
//                     text={contact[lang]}
//                     className={"page-banner banner-lg contact-banner"}
//                 />

//                 <section className="">
//                     <div className="container">
//                         <div className="contact-wraper">
//                             <div className="row">
//                                 <div className="col-lg-6 mb-30">
//                                     <Formik
//                                         initialValues={initialValues}
//                                         validationSchema={checkoutSchema}
//                                         onSubmit={handleFormSubmit}
//                                     >
//                                         {({
//                                             values,
//                                             errors,
//                                             touched,
//                                             handleChange,
//                                             handleBlur,
//                                             handleSubmit,
//                                             isSubmitting,
//                                             setFieldValue
//                                         }) => (
//                                             <form
//                                                 onSubmit={handleSubmit}
//                                                 className="form-wraper contact-form ajax-form"
//                                             >
//                                                 <div className="row">
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="name"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.name}
//                                                             className="form-control"
//                                                             placeholder={"الاسم رباعى"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.name && touched.name && errors.name}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <select id="gender" name="gender" value={values.gender} onChange={handleChange} className="form-control">
//                                                             <option value="">-- اختر النوع --</option>
//                                                             <option value="male">Male</option>
//                                                             <option value="female">Female</option>
//                                                         </select>
//                                                         <span className="error">
//                                                             {errors.gender && touched.gender && errors.gender}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="address"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.address}
//                                                             className="form-control"
//                                                             placeholder={"العنوان"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.address && touched.address && errors.address}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="state"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.state}
//                                                             className="form-control"
//                                                             placeholder={"المحافظة"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.state && touched.state && errors.state}
//                                                         </span>
//                                                     </div>

//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="city"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.city}
//                                                             className="form-control"
//                                                             placeholder={"المدينة"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.city && touched.city && errors.city}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="date"
//                                                             name="birthday"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.birthday}
//                                                             className="form-control"
//                                                             placeholder={"تاريخ الميلاد"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.birthday && touched.birthday && errors.birthday}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="birthdayPlace"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.birthdayPlace}
//                                                             className="form-control"
//                                                             placeholder={" محل الميلاد"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.birthdayPlace && touched.birthdayPlace && errors.birthdayPlace}
//                                                         </span>
//                                                     </div>

//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="number"
//                                                             name="idNum"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.idNum}
//                                                             className="form-control"
//                                                             placeholder={" الرقم القومى "}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.idNum && touched.idNum && errors.idNum}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="work"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.work}
//                                                             className="form-control"
//                                                             placeholder={"المهنة"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.work && touched.work && errors.work}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="workPlace"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.workPlace}
//                                                             className="form-control"
//                                                             placeholder={" جهه العمل "}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.workPlace && touched.workPlace && errors.workPlace}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             name="phone"
//                                                             onChange={handleChange}
//                                                             onBlur={handleBlur}
//                                                             value={values.phone}
//                                                             className="form-control"
//                                                             placeholder={"رقم الهاتف"}
//                                                         />
//                                                         <span className="error">
//                                                             {errors.phone && touched.phone && errors.phone}
//                                                         </span>
//                                                     </div>
//                                                     <div className="form-group col-md-12">
//                                                         <select id="card" name="card" value={values.card} onChange={handleChange} className="form-control">
//                                                             <option value="">-- اختر العدد --</option>
//                                                             <option value="alone">فردى</option>
//                                                             <option value="family">عيله</option>
//                                                         </select>

//                                                         <span className="error">
//                                                             {errors.card && touched.card && errors.card}
//                                                         </span>
//                                                     </div>
//                                                     {values.card === 'family' && (
//                                                         <div className="form-group col-md-12 ">
//                                                             <input
//                                                                 type="number"
//                                                                 name="peopleNumber"
//                                                                 onChange={e => {
//                                                                     handleChange(e);
//                                                                     setFieldValue('familyMembers', Array.from({ length: e.target.value }, () => ({ name: "", gender: "" })));
//                                                                 }}
//                                                                 onBlur={handleBlur}
//                                                                 value={values.peopleNumber}
//                                                                 className="form-control"
//                                                                 placeholder={"عدد الافراد"}
//                                                             />
//                                                             <span className="error">
//                                                                 {errors.peopleNumber && touched.peopleNumber && errors.peopleNumber}
//                                                             </span>
//                                                         </div>
//                                                     )}
//                                                     {values.familyMembers.length > 0 && (
//                                                         values.familyMembers.map((_, index) => (
//                                                             <div key={index} className="form-group col-md-12">
//                                                                 <input
//                                                                     type="text"
//                                                                     name={`familyMembers[${index}].name`}
//                                                                     onChange={handleChange}
//                                                                     onBlur={handleBlur}
//                                                                     value={values.familyMembers[index].name}
//                                                                     className="form-control"
//                                                                     placeholder={`الاسم رباعى الفرد ${index + 1}`}
//                                                                 />
//                                                                 <select
//                                                                     name={`familyMembers[${index}].gender`}
//                                                                     onChange={handleChange}
//                                                                     onBlur={handleBlur}
//                                                                     value={values.familyMembers[index].gender}
//                                                                     className="form-control mt-3"
//                                                                 >
//                                                                     <option value="">--  اختر النوع {index+1}--</option>
//                                                                     <option value="male">Male</option>
//                                                                     <option value="female">Female</option>
//                                                                 </select>
//                                                             </div>
//                                                         ))
//                                                     )}
//                                                     <div className="col-lg-12">
//                                                         <button
//                                                             name="submit"
//                                                             type="submit"
//                                                             value="Submit"
//                                                             className="btn w-100 btn-secondary btn-lg"
//                                                             disabled={isSubmitting}
//                                                         >
//                                                             {main.button[lang]}
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </form>
//                                         )}
//                                     </Formik>
//                                 </div>
//                                 <div className="col-lg-6 mb-30">
//                                     <div
//                                         className="contact-info ovpr-dark"
//                                         style={{ backgroundImage: "url(" + pic1 + ")" }}
//                                     >
//                                         <div className="info-inner">
//                                             <h4 className="title mb-30">{main.text[lang]}</h4>
//                                             <div className="icon-box">
//                                                 <h6 className="title">
//                                                     <i className="ti-map-alt"></i>
//                                                     {main.locationName[lang]}
//                                                 </h6>
//                                                 <p>{main.location[lang]}</p>
//                                             </div>
//                                             <div className="icon-box">
//                                                 <h6 className="title">
//                                                     <i className="ti-id-badge"></i>
//                                                     {main.emailHeading[lang]}
//                                                 </h6>
//                                                 <Link to="#" className="text-white">
//                                                     {main.emailText[lang]}
//                                                 </Link>
//                                                 <p>{main.phoneNumber[lang]}</p>
//                                             </div>
//                                             <div className="icon-box">
//                                                 <h6 className="title">
//                                                     <i className="ti-world"></i>
//                                                     {main.follow[lang]}
//                                                 </h6>
//                                                 <ul className="social-media">
//                                                     <li>
//                                                         <a
//                                                             rel="noreferrer"
//                                                             target="_blank"
//                                                             href="https://www.facebook.com/Elagouz.Hospital/"
//                                                         >
//                                                             <i className="fab fa-facebook"></i>
//                                                         </a>
//                                                     </li>
//                                                     <li>
//                                                         <a
//                                                             rel="noreferrer"
//                                                             target="_blank"
//                                                             href="https://youtube.com/channel/UCZqQMivKhy2gKcMCq3X6WdQ"
//                                                         >
//                                                             <i className="fab fa-youtube"></i>
//                                                         </a>
//                                                     </li>
//                                                     <li>
//                                                         <a
//                                                             rel="noreferrer"
//                                                             target="_blank"
//                                                             href="https://instagram.com/elagouz_hospital?igshid=YmMyMTA2M2Y"
//                                                         >
//                                                             <i className="fab fa-instagram"></i>
//                                                         </a>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="section-area section-sp1">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-4 col-md-6 mb-30">
//                                 <div className="feature-container feature-bx4 feature4">
//                                     <div className="icon-md feature-icon">
//                                         <img src={icon1} alt="" />
//                                     </div>
//                                     <div className="icon-content">
//                                         <h5 className="ttr-title">{details.contactNumber[lang]}</h5>
//                                         <p>01111149544</p>
//                                         <p>01222273236</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6 mb-30">
//                                 <div className="feature-container feature-bx4 feature3">
//                                     <div className="icon-md feature-icon">
//                                         <img src={icon3} alt="" />
//                                     </div>
//                                     <div className="icon-content">
//                                         <h5 className="ttr-title">{details.email[lang]}</h5>
//                                         <p>AgouzHospital2000@gmail.com</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6 mb-30">
//                                 <div className="feature-container feature-bx4 feature2">
//                                     <div className="icon-md feature-icon">
//                                         <img src={icon2} alt="" />
//                                     </div>
//                                     <div className="icon-content">
//                                         <h5 className="ttr-title">
//                                             {details.address.heading[lang]}
//                                         </h5>
//                                         <p>{details.address.text[lang]}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>

//             <Footer />
//         </>
//     );
// };

// const phoneRegExp =
//     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//     name: yup.string().required("required"),
//     phone: yup
//         .string()
//         .matches(phoneRegExp, "رقم التليفون غير صحيح ")
//         .required("مطلوب"),
//     gender: yup.string().required("مطلوب"),
//     address: yup.string().required("مطلوب"),
//     city: yup.string().required("مطلوب"),
//     state: yup.string().required("مطلوب"),
//     birthday: yup.string().required(" تاريخ الميلادمطلوب"),
//     birthdayPlace: yup.string().required("مطلوب"),
//     idNum: yup.number().required("مطلوب"),
//     work: yup.string().required("مطلوب"),
//     workPlace: yup.string().required("مطلوب"),
//     card: yup.string().required("مطلوب"),
//     peopleNumber: yup.number().required("مطلوب"),
// });

// export default FamilyCart;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, FieldArray } from "formik";
import Header from "../layout/header";
import Footer from "../layout/footer";
import HeroPage from "../elements/heroPage";
import pic1 from "../../images/about/pic-1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const FamilyCart = () => {
    const lang = useSelector((state) => state.lang.value.lang);
    const main = useSelector((state) => state.lang.value.contact);
    const details = useSelector((state) => state.lang.value.contactDetails);
    const { contact } = useSelector((state) => state.lang.value.pages);
    const dispatch = useDispatch();

    const [initialValues, setInitialValues] = useState({
        name: "",
        organization: "Agouz Hospital",
        phone: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        birthday: "",
        birthdayPlace: "",
        idNum: "",
        work: "",
        workPlace: "",
        peopleNumber: "",
        card: "",
        familyMembers: []
    });

    const handleFormSubmit = (values, { resetForm }) => {
        console.log(values); // Logging all form values for debugging
        // dispatch(contactUser(values));
        resetForm({ values: initialValues });
    };

    useEffect(() => {
        if (initialValues.peopleNumber) {
            const familyMembers = Array.from({ length: initialValues.peopleNumber }, (_, index) => ({
                name: "",
                gender: "",
                personalID: "",
            }));
            setInitialValues(prevState => ({
                ...prevState,
                familyMembers
            }));
        }
    }, [initialValues.peopleNumber]);
    const state = [{ name: "أسوان" }, { name: "أسيوط" }, { name: "الإسكندرية" }, { name: "الإسماعيلية" }, { name: "الأقصر" }, { name: "البحر الأحمر" }, { name: "البحيرة" }, { name: "الجيزة" }, { name: "الدقهلية" }, { name: "السويس" }, { name: "الشرقية" }, { name: "الغربية" }, { name: "الفيوم" }, { name: "القليوبية" }, { name: "القاهرة" }, { name: "المنوفية" }, { name: "المنيا" }, { name: "الوادي الجديد" }, { name: "بني سويف" }, { name: "بورسعيد" }, { name: "جنوب سيناء" }, { name: "دمياط" }, { name: "سوهاج" }, { name: "شمال سيناء" }, { name: "قنا" }, { name: "كفر الشيخ" }, { name: "مطروح" }]
    return (
        <>
            <Header />

            <div className="page-content bg-white">
                <HeroPage
                    text={contact[lang]}
                    className={"page-banner banner-lg contact-banner"}
                />

                <section className="">
                    <div className="container">
                        <div className="contact-wraper">
                            <div className="row">
                                <div className="col-lg-6 mb-30">
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={checkoutSchema}
                                        onSubmit={handleFormSubmit}
                                        enableReinitialize
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                            setFieldValue
                                        }) => (
                                            <form
                                                onSubmit={handleSubmit}
                                                className="form-wraper contact-form ajax-form"
                                            >
                                                <div className="row">
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.name}
                                                            className="form-control"
                                                            placeholder={"الاسم رباعى"}
                                                        />
                                                        <span className="error">
                                                            {errors.name && touched.name && errors.name}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <select id="gender" name="gender" value={values.gender} onChange={handleChange} className="form-control">
                                                            <option value="">-- اختر النوع --</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                        <span className="error">
                                                            {errors.gender && touched.gender && errors.gender}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.address}
                                                            className="form-control"
                                                            placeholder={"العنوان"}
                                                        />
                                                        <span className="error">
                                                            {errors.address && touched.address && errors.address}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <select id="state" name="state" value={values.state} onChange={handleChange} className="form-control">
                                                            <option value="">-- اختر المحافظه --</option>
                                                            {state.map((item, index) => (
                                                                <option key={index} value={item.name}>{item.name}</option>
                                                            ))}

                                                        </select>
                                                        <span className="error">
                                                            {errors.state && touched.state && errors.state}
                                                        </span>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.city}
                                                            className="form-control"
                                                            placeholder={"المدينة"}
                                                        />
                                                        <span className="error">
                                                            {errors.city && touched.city && errors.city}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="date"
                                                            name="birthday"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.birthday}
                                                            className="form-control"
                                                            placeholder={"تاريخ الميلاد"}
                                                        />
                                                        <span className="error">
                                                            {errors.birthday && touched.birthday && errors.birthday}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="text"
                                                            name="birthdayPlace"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.birthdayPlace}
                                                            className="form-control"
                                                            placeholder={" محل الميلاد"}
                                                        />
                                                        <span className="error">
                                                            {errors.birthdayPlace && touched.birthdayPlace && errors.birthdayPlace}
                                                        </span>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="number"
                                                            name="idNum"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.idNum}
                                                            className="form-control"
                                                            placeholder={" الرقم القومى "}
                                                        />
                                                        <span className="error">
                                                            {errors.idNum && touched.idNum && errors.idNum}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="text"
                                                            name="work"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.work}
                                                            className="form-control"
                                                            placeholder={"المهنة"}
                                                        />
                                                        <span className="error">
                                                            {errors.work && touched.work && errors.work}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="text"
                                                            name="workPlace"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.workPlace}
                                                            className="form-control"
                                                            placeholder={" جهه العمل "}
                                                        />
                                                        <span className="error">
                                                            {errors.workPlace && touched.workPlace && errors.workPlace}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.phone}
                                                            className="form-control"
                                                            placeholder={"رقم الهاتف"}
                                                        />
                                                        <span className="error">
                                                            {errors.phone && touched.phone && errors.phone}
                                                        </span>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <select id="card" name="card" value={values.card} onChange={handleChange} className="form-control">
                                                            <option value="">-- اختر العدد --</option>
                                                            <option value="alone">فردى</option>
                                                            <option value="family">عيله</option>
                                                        </select>

                                                        <span className="error">
                                                            {errors.card && touched.card && errors.card}
                                                        </span>
                                                    </div>
                                                    {values.card === 'family' && (
                                                        <div className="form-group col-md-12">
                                                            <input
                                                                type="number"
                                                                name="peopleNumber"
                                                                onChange={e => {
                                                                    handleChange(e);
                                                                    setFieldValue('peopleNumber', e.target.value);
                                                                    setFieldValue('familyMembers', Array.from({ length: e.target.value }, () => ({ name: "", gender: "", personalID: "" })));
                                                                }}
                                                                onBlur={handleBlur}
                                                                value={values.peopleNumber}
                                                                className="form-control"
                                                                placeholder={"عدد الافراد"}
                                                            />
                                                            <span className="error">
                                                                {errors.peopleNumber && touched.peopleNumber && errors.peopleNumber}
                                                            </span>
                                                        </div>
                                                    )}
                                                    {values.familyMembers.length > 0 && values.card === 'family' && (
                                                        <FieldArray
                                                            name="familyMembers"
                                                            render={arrayHelpers => (
                                                                values.familyMembers.map((_, index) => (
                                                                    <div key={index} className="form-group col-md-12">
                                                                        <h5>الشخص {index + 1}</h5>
                                                                        <input
                                                                            type="text"
                                                                            name={`familyMembers.${index}.name`}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.familyMembers[index].name}
                                                                            className="form-control mt-2"
                                                                            placeholder={`الاسم رباعى الفرد ${index + 1}`}
                                                                        />
                                                                        <span className="error">
                                                                            {errors.familyMembers && errors.familyMembers[index] && errors.familyMembers[index].name && touched.familyMembers && touched.familyMembers[index] && touched.familyMembers[index].name && errors.familyMembers[index].name}
                                                                        </span>
                                                                        <select
                                                                            name={`familyMembers.${index}.gender`}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.familyMembers[index].gender}
                                                                            className="form-control mt-3"
                                                                        >
                                                                            <option value="">-- اختر النوع --</option>
                                                                            <option value="male">Male</option>
                                                                            <option value="female">Female</option>
                                                                        </select>
                                                                        <span className="error">
                                                                            {errors.familyMembers && errors.familyMembers[index] && errors.familyMembers[index].gender && touched.familyMembers && touched.familyMembers[index] && touched.familyMembers[index].gender && errors.familyMembers[index].gender}
                                                                        </span>

                                                                        <input
                                                                            type="text"
                                                                            name={`familyMembers.${index}.personalID`}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.familyMembers[index].personalID}
                                                                            className="form-control mt-3"
                                                                            placeholder={`الرقم القومى الفرد ${index + 1}`}
                                                                        />
                                                                        <span className="error">
                                                                            {errors.familyMembers && errors.familyMembers[index] && errors.familyMembers[index].personalID && touched.familyMembers && touched.familyMembers[index] && touched.familyMembers[index].personalID && errors.familyMembers[index].personalID}
                                                                        </span>
                                                                    </div>
                                                                ))
                                                            )}
                                                        />
                                                    )}
                                                    <div className="col-lg-12">
                                                        <button
                                                            name="submit"
                                                            type="submit"
                                                            value="Submit"
                                                            className="btn w-100 btn-secondary btn-lg"
                                                            disabled={isSubmitting}
                                                        >
                                                            {main.button[lang]}
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <div
                                        className="contact-info ovpr-dark"
                                        style={{ backgroundImage: "url(" + pic1 + ")" }}
                                    >
                                        <div className="info-inner">
                                            <h4 className="title mb-30">{main.text[lang]}</h4>
                                            <div className="icon-box">
                                                <h6 className="title">
                                                    <i className="ti-map-alt"></i>
                                                    {main.locationName[lang]}
                                                </h6>
                                                <p>{main.location[lang]}</p>
                                            </div>
                                            <div className="icon-box">
                                                <h6 className="title">
                                                    <i className="ti-id-badge"></i>
                                                    {main.emailHeading[lang]}
                                                </h6>
                                                <Link to="#" className="text-white">
                                                    {main.emailText[lang]}
                                                </Link>
                                                <p>{main.phoneNumber[lang]}</p>
                                            </div>
                                            <div className="icon-box">
                                                <h6 className="title">
                                                    <i className="ti-world"></i>
                                                    {main.follow[lang]}
                                                </h6>
                                                <ul className="social-media">
                                                    <li>
                                                        <a
                                                            rel="noreferrer"
                                                            target="_blank"
                                                            href="https://www.facebook.com/Elagouz.Hospital/"
                                                        >
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            rel="noreferrer"
                                                            target="_blank"
                                                            href="https://youtube.com/channel/UCZqQMivKhy2gKcMCq3X6WdQ"
                                                        >
                                                            <i className="fab fa-youtube"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            rel="noreferrer"
                                                            target="_blank"
                                                            href="https://instagram.com/elagouz_hospital?igshid=YmMyMTA2M2Y"
                                                        >
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-area section-sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="feature-container feature-bx4 feature4">
                                    <div className="icon-md feature-icon">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-title">{details.contactNumber[lang]}</h5>
                                        <p>01111149544</p>
                                        <p>01222273236</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="feature-container feature-bx4 feature3">
                                    <div className="icon-md feature-icon">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-title">{details.email[lang]}</h5>
                                        <p>AgouzHospital2000@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="feature-container feature-bx4 feature2">
                                    <div className="icon-md feature-icon">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-title">
                                            {details.address.heading[lang]}
                                        </h5>
                                        <p>{details.address.text[lang]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    name: yup.string()
        .test(
            'has-three-spaces',
            'يرجى إدخال الاسم رياعي',
            (value) => {
                // Ensure the value is a string
                if (!value || typeof value !== 'string') return false;

                // Count the number of spaces
                const spaceCount = (value.match(/ /g) || []).length;

                // Return true if there are exactly three spaces
                return spaceCount >= 3;
            }
        )
        .min(11, "يرجي ادخال الاسم الرباعي صحيح ")
        .required(" يرجى إدخال الاسم رياعي "),
    phone: yup.string()
        .matches(phoneRegExp, "  رقم الهاتف غير صحيح ")
        .required("يرجى إدخال رقم الهاتف"),
    gender: yup.string().required("مطلوب"),
    address: yup.string().required("مطلوب"),
    city: yup.string().required("مطلوب"),
    state: yup.string().required("مطلوب"),
    birthday: yup.string().required(" تاريخ الميلادمطلوب"),
    birthdayPlace: yup.string().required("مطلوب"),
    idNum: yup.string()
        .matches(/^\d{14}$/, "يجب أن يحتوي رقم البطاقة على 14 رقمًا فقط")
        .required("يرجى إدخال رقم البطاقة"),
    work: yup.string().required("مطلوب"),
    workPlace: yup.string().required("مطلوب"),
    card: yup.string().required("مطلوب"),
    peopleNumber: yup.number().when('card', {
        is: 'family',
        then: yup.number().required("مطلوب")
    }),
    familyMembers: yup.array().of(
        yup.object().shape({
            name: yup.string()
                .test(
                    'has-three-spaces',
                    'يرجى إدخال الاسم رياعي',
                    (value) => {
                        // Ensure the value is a string
                        if (!value || typeof value !== 'string') return false;

                        // Count the number of spaces
                        const spaceCount = (value.match(/ /g) || []).length;

                        // Return true if there are exactly three spaces
                        return spaceCount >= 3;
                    }
                )
                .min(11, "يرجي ادخال الاسم الرباعي صحيح ")
                .required(" يرجى إدخال الاسم رياعي "),
            gender: yup.string().required("مطلوب"),
            personalID: yup.string()
                .matches(/^\d{14}$/, "يجب أن يحتوي رقم البطاقة على 14 رقمًا فقط")
                .required("يرجى إدخال رقم البطاقة"),
        })
    )
});

export default FamilyCart;
