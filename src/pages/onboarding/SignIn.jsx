import MerceLogo from '/assets/icons/merce-logo.svg'

export default function SignIn() {
  return (
    <div className="flex text-white items-center justify-center h-screen">
      <div className="lg:w-1/4 w-3/4">
        <div className="flex mb-8">
          <img src={MerceLogo} alt='merce logo' />
        </div>
        <p className="text-5xl font-black mb-8">Sign In</p>
        <p className="font-semibold mb-5">Sign in with google</p>
        <button className="group hover:bg-white hover:border-white transition-all duration-150 flex justify-center text-base font-semibold mb-5 border-gunmetal w-full rounded-lg py-3 border-2">
          {" "}
          <img src="/assets/icons/google.svg" alt="" />{" "}
          <span className="ml-2 group-hover:text-soft-black transition-all duration-150">Google</span>
        </button>
        <p className="font-semibold mt-8 border-t-2 pt-8 border-gunmetal text-sonic-silver">
          This site is protected by reCAPTCHA and the Google Privacy Policy.
        </p>
      </div>
    </div>
  );
}
