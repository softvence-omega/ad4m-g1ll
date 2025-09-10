import ContactBanner from "@/components/contactsComponents/ContactBanner"
import ContactForm from "@/components/contactsComponents/ContactForm"
import { Footer } from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

function Page() {
  return (
    <div>
        <Navbar/>
        <ContactBanner/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Page