import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../CustomHooks/useAuth";
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const { loading, setLoading, loginUser, googleLogin } = useAuth();
  const navigation = useNavigate();
  console.log(loading);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // email pass login
  const onSubmit = (data) => {
    loginUser(data.email, data.password);
    console.log(data);
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          //send user to home page
          navigation("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
        if (err) {
          setLoading(false);
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p role="alert">email is required</p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p role="alert">password is required</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleLogin}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Dont have an account yet?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
