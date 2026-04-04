import { useState } from "react";
import {
  MapPin,
  Briefcase,
  Share2,
  Pencil,
  GraduationCap,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Profile() {
  const [tab, setTab] = useState("about");

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* TOP HEADER */}
      <div className="bg-gradient-to-b from-blue-600 to-white pt-10 pb-6 text-center relative">
        {/* PROFILE IMAGE */}
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* NAME */}
        <h2 className="mt-4 text-xl font-semibold ">Ahmed Hassan</h2>
        <p className="text-gray-500">Senior UX Designer</p>

        <div className="flex justify-center gap-4 text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> Dubai
          </span>
          <span className="flex items-center gap-1">
            <Briefcase size={14} /> 8 years
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 mt-4 px-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-md bg-blue-500 text-white">
            <Pencil size={16} /> Edit Profile
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-md bg-blue-500 text-white">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4 px-4 md:px-10 mt-6 border rounded-xl mx-2 border-gray-400">
        {[
          { label: "Profile Views", value: "245" },
          { label: "Applications", value: "28" },
          { label: "Interviews", value: "12" },
          { label: "Score", value: "92%" },
        ].map((item, i) => (
          <div key={i} className=" p-4 text-center">
            <h3 className="font-semibold text-lg">{item.value}</h3>
            <p className="text-gray-500 text-xs">{item.label}</p>
          </div>
        ))}
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap px-4">
        {["settings", "experience", "skills", "about"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-xl capitalize ${
              tab === t ? "bg-black text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="px-4 md:px-10 mt-6 space-y-6">
        {/* ABOUT */}
        {tab === "about" && (
          <>
            <div className="shadow-md rounded-2xl p-5">
              <h2 className="font-semibold mb-2">About</h2>
              <p className="text-gray-600">
                Passionate UX Designer with 8+ years of experience creating
                user-centered designs for web and mobile applications.
              </p>
            </div>

            {/* LANGUAGES */}
            <div className="shadow-md rounded-2xl p-5">
              <div className="flex justify-between mb-3">
                <h2 className="font-semibold">Languages</h2>
                <button className="text-blue-600 text-sm">+ Add</button>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Globe className="text-green-600" />
                </div>

                <div>
                  <h3 className="font-medium">English</h3>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full mr-2">
                    Native
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    Certified
                  </span>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="font-semibold mb-3">Education</h2>

              {["Stanford University", "MIT"].map((uni, i) => (
                <div
                  key={i}
                  className="shadow-md rounded-2xl p-5 mb-3 flex gap-4"
                >
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <GraduationCap />
                  </div>

                  <div>
                    <h3 className="font-semibold">{uni}</h3>
                    <p className="text-gray-500 text-sm">Computer Science</p>
                    <p className="text-gray-400 text-xs">2012 - 2016</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <h2 className="font-semibold mb-3">Certifications</h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "Google UX Certification",
                  "NN/g UX Certification",
                  "Figma Advanced",
                ].map((cert, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 shadow-sm text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {/* SKILLS */}
        {tab === "skills" && (
          <div className="flex flex-wrap gap-3">
            {[
              "UX Design",
              "Figma",
              "User Research",
              "Prototyping",
              "Design Systems",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full shadow-md bg-green-100 text-green-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* EXPERIENCE */}
        {tab === "experience" && (
          <div className="space-y-4">
            {["Google", "Amazon"].map((company, i) => (
              <div key={i} className="shadow-md rounded-2xl p-5">
                <h3 className="font-semibold">UX Designer</h3>
                <p className="text-gray-500">{company}</p>
                <p className="text-sm text-gray-400 mt-2">2018 - Present</p>
              </div>
            ))}
          </div>
        )}

        {tab === "settings" && (
          <div className="space-y-4">
            {/* PROFILE SETTINGS */}
            <Link
              to="/"
              className="shadow-md rounded-2xl p-5 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="font-semibold">Profile Settings</h2>
                <p className="text-sm text-gray-500">
                  Edit profile, visibility & info
                </p>
              </div>
              <ChevronRight className="text-gray-400" />
            </Link>

            {/* HIRE ME */}
            <Link
              to="/"
              className="shadow-md rounded-2xl p-5 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="font-semibold">Hire Me</h2>
                <p className="text-sm text-gray-500">
                  Availability & recruiter settings
                </p>
              </div>
              <ChevronRight className="text-gray-400" />
            </Link>

            {/* NOTIFICATIONS */}
            <Link
              to="/"
              className="shadow-md rounded-2xl p-5 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="font-semibold">Notifications</h2>
                <p className="text-sm text-gray-500">
                  Job alerts, messages & updates
                </p>
              </div>
              <ChevronRight className="text-gray-400" />
            </Link>

            {/* PRIVACY */}
            <Link
              to="/"
              className="shadow-md rounded-2xl p-5 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="font-semibold">Privacy</h2>
                <p className="text-sm text-gray-500">
                  Control your personal information
                </p>
              </div>
              <ChevronRight className="text-gray-400" />
            </Link>

            {/* SECURITY */}
            <Link
              to="/"
              className="shadow-md rounded-2xl p-5 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="font-semibold">Security</h2>
                <p className="text-sm text-gray-500">
                  Password & account protection
                </p>
              </div>
              <ChevronRight className="text-gray-400" />
            </Link>

            {/* APPEARANCE */}
            <Link
              to="/"
              className="shadow-md rounded-2xl p-5 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="font-semibold">Appearance</h2>
                <p className="text-sm text-gray-500">
                  Theme, dark mode & UI preferences
                </p>
              </div>
              <ChevronRight className="text-gray-400" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
