import Logo from '/assets/icons/merce-logo.svg'

export default function SideBar() {
  return (
    <div className='hidden lg:block side-bar fixed lg:w-[340px] bg-soft-black h-screen'>
      <img className='hidden md:block' src={Logo} alt="" />
      
    </div>
  )
}
