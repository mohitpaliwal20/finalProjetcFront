import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";
import frameImg from "../../../../public/Images/Logo.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center w-full">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full py-12 gap-y-8 md:flex-row">
          <div className="text-center w-11/12 max-w-[450px]">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            <div className="mt-6">
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>
          {/* <div className="relative w-11/12 max-w-[450px]">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
              className="w-full"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Template;
