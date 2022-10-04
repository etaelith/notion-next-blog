const HrSpace = () => {
  return (
    <div className="inline-flex justify-center items-center w-full">
      <hr className="my-4 w-64 h-px bg-gray-700 border-0 dark:bg-gray-700" />
      <span className="absolute left-1/2 px-3 bg-gradientblack rounded-lg font-medium text-gray-400 -translate-x-1/2 dark:text-white dark:bg-gray-800">
        Or continue with
      </span>
    </div>
  );
};

export default HrSpace;
