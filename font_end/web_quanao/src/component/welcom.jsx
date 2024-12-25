
const Webcomback = () => {
  return (
    <div className="relative w-full p-12 text-center bg-gray-100 rounded-lg shadow-lg">
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-gray-800 uppercase">Welcome Back!</h1>
        <p className="mt-4 text-lg text-gray-600">We're glad to see you again! Ready to log in?</p>
      </div>
      <div className="absolute top-0 left-1/2 w-[300px] h-[300px] bg-blue-300 rounded-full opacity-50 blur-[100px] animate-glow"></div>
    </div>
  );
};

export default Webcomback;
