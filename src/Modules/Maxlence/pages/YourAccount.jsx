import React, { Component } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
export const YourAccount = () => {
  class UploadDocument extends Component {
    handleFileUpload = (event) => {
      console.log(event.target.files[0].name);
    };

    render() {
      return (
        <>
          <input
            ref="fileInput"
            onChange={this.handleFileUpload}
            type="file"
            style={{ display: "none" }}
            // multiple={false}
          />
          <div className="acount_img_inner_btn_div">
            <button
              className="acount_img_inner_btn"
              onClick={() => this.refs.fileInput.click()}
            >
              <div className="acount_img_inner">
                <AiOutlineCamera />
              </div>
            </button>
          </div>
        </>
      );
    }
<<<<<<< Updated upstream
  }
=======
  };

  const UploadDocument = () => {
    // const handleFileUpload = (event) => {
    //   console.log(event.target.files[0].name);
    //   setValues((old) => {
    //     return { ...old, file: event.target.files[0] };
    //   });
    // };
    return (
      <>
        <input
          ref={inputElement}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          style={{ display: "none" }}
          name="pic"
        />
        <div className="acount_img_inner_btn_div">
          <a
            className="acount_img_inner_btn"
            onClick={() => inputElement.current?.click()}
          >
            <div className="acount_img_inner">
              <AiOutlineCamera />
            </div>
          </a>
        </div>
      </>
    );
  };
  const Form = () => {
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setValues({
        ...values,
        [name]: value,
      });
    };

    const FormData1 = [
      {
        formTitle: "Personal Information",
        input: [
          {
            label: "Name",
            inputType: "text",
            name: "fullname",
            defaultValue: values.fullname,
            onBlur: handleInputChange,
            disabled: form1disable
          },
          {
            label: "Contact No.",
            inputType: "number",
            name: "phoneNumber",
            defaultValue: values.phoneNumber,
            onBlur: handleInputChange,
            disabled: form1disable
          },
          {
            label: "Email ID",
            inputType: "email",
            disabled: true,
            defaultValue: values.email,
          },
          {
            label: "Designation",
            inputType: "text",
            name: "designation",
            defaultValue: values.designation,
            onBlur: handleInputChange,
            disabled: form1disable
          },
        ],
      },
      
    ];
    
    const FormData2 = [
      {
        formTitle: "Business Information",
        input: [
          {
            label: "Company name",
            inputType: "text",
            name: "companyName",
            defaultValue: values.companyName,
            onBlur: handleInputChange,
            disabled: form2disable
          },
          {
            label: "Address",
            inputType: "text",
            name: "workingAddress",
            defaultValue: values.workingAddress,
            onBlur: handleInputChange,
            disabled: form2disable
          },
          {
            label: "Email ID",
            inputType: "email",
            name: "companyEmail",
            defaultValue: values.companyEmail,
            onBlur: handleInputChange,
            disabled: form2disable
          },
          {
            label: "URL",
            inputType: "text",
            name: "URL",
            defaultValue: values.URL,
            onBlur: handleInputChange,
            disabled: form2disable
          },
        ],
      },
    ]

    const FormApp1 = (props) => {
      return (
        <div className="account_input_title_top">
          <MdOutlineEdit title="Edit" onClick={()=> setForm1disable(!form1disable)} className="account_edit_icon" />
          <div className="account_input_title">
            <h3>{props.formTitle}</h3>
          </div>
          <div className="account_input_title_top_inner">
            {props.input.map((val, i) => {
              return (
                <div key={i} className="row">
                  <div className="col-12">
                    <div className="form_input_div">
                      <div className="row">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                          <label>{val.label}</label>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                          <input
                            type={val.inputType}
                            placeholder={val.placeholder}
                            name={val.name}
                            defaultValue={val.defaultValue}
                            onBlur={val.onBlur}
                            disabled={val.disabled}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 account_input_hr_div">
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    const FormApp2 = (props) => {
      return (
        <div className="account_input_title_top">
          <MdOutlineEdit title="Edit" onClick={()=> setForm2disable(!form2disable)} className="account_edit_icon" />
          <div className="account_input_title">
            <h3>{props.formTitle}</h3>
          </div>
          <div className="account_input_title_top_inner">
            {props.input.map((val, i) => {
              return (
                <div key={i} className="row">
                  <div className="col-12">
                    <div className="form_input_div">
                      <div className="row">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                          <label>{val.label}</label>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                          <input
                            type={val.inputType}
                            placeholder={val.placeholder}
                            name={val.name}
                            defaultValue={val.defaultValue}
                            onBlur={val.onBlur}
                            disabled={val.disabled}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 account_input_hr_div">
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <>
        {FormData1.map((val, i) => {
          return <FormApp1 key={i} {...val} />;
        })}
        {FormData2.map((val, i) => {
          return <FormApp2 key={i} {...val} />;
        })}
      </>
    );
  };
>>>>>>> Stashed changes
  return (
    <>
      <section className=" container mb-5 mt-5">
        <div className="row g-3">
          <div className="col-12">
            <div className="account_btn_div">
              <button className="btn outline_btn me-1">Cancel</button>
              <button className="btn full_btn ms-1">save</button>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12">
            <div
              className="acount_img"
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/500x500/?girl,face")`,
              }}
            >
              <UploadDocument />
            </div>
          </div>
          <div className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-12 col-12  acount_title_div">
            <div className="account_user_name_div">
              <h3>John Snow</h3>
              <p>john@xyz.com</p>
            </div>
          </div>
          <div className="col-12">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

const Form = () => {
  const FormData = [
    {
      formTitle: "Personal Information",
      input: [
        {
          label: "Name",
          inputType: "text",
          placeholder: "John Snow",
        },
        {
          label: "Contact No.",
          inputType: "number",
          placeholder: "9876543210",
        },
        {
          label: "Email ID",
          inputType: "email",
          placeholder: "johnsnow@lunoelectrical.com",
        },
        {
          label: "Designation",
          inputType: "text",
          placeholder: "Owner",
        },
      ],
    },
    {
      formTitle: "Business Information",
      input: [
        {
          label: "Company name",
          inputType: "text",
          placeholder: "Luno Electrical",
        },
        {
          label: "Address",
          inputType: "text",
          placeholder: "10 Oxley Rd, Hawthorn VIC 3122",
        },
        {
          label: "Email ID",
          inputType: "email",
          placeholder: "info@lunoelectrical.com.au",
        },
        {
          label: "URL",
          inputType: "text",
          placeholder: "www.lunoelectrical.com.au",
        },
      ],
    },
  ];
  const FormApp = (props) => {
    return (
      <div className="account_input_title_top">
        <MdOutlineEdit className="account_edit_icon" />
        <div className="account_input_title">
          <h3>{props.formTitle}</h3>
        </div>
        <div className="account_input_title_top_inner">
          {props.input.map((val, i) => {
            return (
              <div key={i} className="row">
                <div className="col-12">
                  <div className="form_input_div">
                    <div className="row">
                      <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                        <label>{val.label}</label>
                      </div>
                      <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <input
                          type={val.inputType}
                          placeholder={val.placeholder}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 account_input_hr_div">
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <>
      {FormData.map((val, i) => {
        return <FormApp key={i} {...val} />;
      })}
    </>
  );
};
