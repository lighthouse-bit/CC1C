import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/NavBar/AboutUs";
import VisionMission from "./components/NavBar/AboutUs/VisionMission";
import FounderMessage from "./components/NavBar/AboutUs/FounderMessage";
import MeetOurTeam from "./components/NavBar/AboutUs/MeatOurTeam";
import TeamMemberDetail from "./components/NavBar/AboutUs/TeamMemberDetail";
import ObjectivesSection from "./components/NavBar/AboutUs/ObjectivesSection";
import ProgramsSection from "./pages/Programs/ProgramsSection";
import ClimateResilience from "./pages/Programs/CilimateResilience";
import YouthLeader from "./pages/Programs/YouthLeader";
import LocalConference from "./pages/Programs/LocalConference";
import YouthConsultant from "./pages/Programs/YouthConsultant";
import Afforestation from "./pages/Programs/Afforestation";
import Hygiene from "./pages/Programs/Hygiene";
import Leadership from "./pages/Programs/Leadership";
import BlogSection from "./pages/Blog/BlogSection";
import ContactUs from "./pages/ContactForm/ContactUs";
import MakeDonation from "./pages/Donations/MakeDonation";
import AdminPanel from "./pages/admin-view/AdminPanel";
import Gallery from "./pages/Gallery/Gallery";
import PartCollab from "./pages/Partners/PartCollab";
import DonationForm from "./components/Donate/DonationForm";
import AdvisoryBoard from "./components/NavBar/AboutUs/AdvisoryBoard";
import AdminBlogForm from "./components/admin-view/AdminBlogForm";
import BlogDetails from "./pages/Blog/BlogDetails";
import GalleryDeleteComponent from "./components/admin-view/GalleryDeleteComponent";

function App() {
  const location = useLocation();

  // Hide Navbar and Footer for ALL admin routes
  const hideNavbarAndFooter = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col overflow-hidden bg-white min-h-screen justify-between">
      {/* Conditionally render Navbar and Footer */}
      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/blogs/new" element={<AdminBlogForm />} />
        <Route path="/admin/gallery-del" element={<GalleryDeleteComponent />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/vision-mission" element={<VisionMission />} />
        <Route path="/about-us/founder-message" element={<FounderMessage />} />
        <Route path="/about-us/our-team" element={<MeetOurTeam />} />
        <Route path="/about-us/our-team/:id" element={<TeamMemberDetail />} />
        <Route path="/about-us/objectives" element={<ObjectivesSection />} />
        <Route path="/about-us/partners-sponsors" element={<PartCollab />} />
        <Route path="/about-us/advisory-board" element={<AdvisoryBoard />} />
        
        <Route path="/programs" element={<ProgramsSection />} />
        <Route path="/programs/skills-development" element={<ClimateResilience />} />
        <Route path="/programs/youth-leadership" element={<YouthLeader />} />
        <Route path="/programs/local-conference" element={<LocalConference />} />
        <Route path="/programs/sustainable-farming" element={<YouthConsultant />} />
        <Route path="/programs/girls-leadership" element={<Afforestation />} />
        <Route path="/programs/youth-peace-security" element={<Hygiene />} />
        <Route path="/programs/climate-action" element={<Leadership />} />

        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        
        <Route path="/more/contact-us" element={<ContactUs />} />
        <Route path="/donate" element={<MakeDonation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/transfer-page" element={<DonationForm />} />
        
      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
