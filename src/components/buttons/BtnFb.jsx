import { useAuth } from "context/AuthContext"; 
const BtnFb = () => {
  const {loginWithFacebook} = useAuth()
  const handleLogFacebook = async () => {
    await loginWithFacebook()
  }
  return (
    <button
      type="button"
      className="cursor-pointer text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
      onClick={handleLogFacebook}
    >
      <svg
        className="mr-2 -ml-1 w-8 h-8"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="facebook-f"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
        ></path>
      </svg>
      Sign in with Facebook
    </button>
  );
};

export default BtnFb;
