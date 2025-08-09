import AppNavbar from "@/components/app-navbar"
import AppFooter from "@/components/app-footer"

const page = () => {
  return (
    <div className='m-10'>
      <AppNavbar />
      <div className="text-white">
        extras page
      </div>
      <AppFooter />
    </div>
  )
}

export default page