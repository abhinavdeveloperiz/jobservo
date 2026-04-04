import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./employee/home";
import Jobs from "./employee/jobs";
import JobDetails from "./employee/jobdetails";
import HireMe from "./employee/hireme";
import Messages from "./employee/messages";
import Chat from "./employee/chat";
import Profile from "./employee/profile";

// Components
import Navbar from "./employee/components/Navbar";
import Footer from "./employee/components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Main Content */}
        <div className="flex-1 pb-20">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job/details" element={<JobDetails />} />
            <Route path="/hireme" element={<HireMe />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Bottom Navbar */}
        <Navbar />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
