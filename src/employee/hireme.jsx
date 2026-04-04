import {
  MapPin,
  Eye,
  FileText,
  TrendingUp,
  Clock,
  MessageSquare,
} from "lucide-react";

const getStatusStyle = (status) => {
  switch (status) {
    case "Under Review":
      return "bg-yellow-100 text-yellow-600";
    case "Interview Scheduled":
      return "bg-blue-100 text-blue-600";
    case "Shortlisted":
      return "bg-green-100 text-green-600";
    case "Rejected":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

function HireMe() {
  return (
    <div className="bg-white min-h-screen px-4 md:px-10 lg:px-20 py-6 pb-24">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Hire Me</h1>
      </div>

      {/* PREMIUM BANNER */}
      <div
        className="bg-gradient-to-r from-blue-600 to-blue-200 text-white p-4 rounded-2xl mb-6"
        data-aos="fade-right"
      >
        <h3 className="font-semibold">Premium Member</h3>
        <p className="text-sm opacity-90">Priority visibility to employers</p>
      </div>

      {/* PROFILE CARD */}
      <div className="rounded-2xl p-5 shadow-md mb-6" data-aos="zoom-in">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <img
              src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              className="w-14 h-14 rounded-full"
            />

            <div>
              <h3 className="font-semibold text-lg">Ahmed Hassan</h3>
              <p className="text-sm text-gray-500">
                Senior UX Designer • 8 years
              </p>

              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} /> Dubai, UAE
              </p>

              <p className="text-green-600 text-sm mt-1">
                ● Available for hire
              </p>
            </div>
          </div>

          <div className="bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold">
            92
          </div>
        </div>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "UX Design",
            "Figma",
            "Prototyping",
            "User Research",
            "Design Systems",
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 border border-gray-400 rounded-xl py-2 hover:bg-gray-100">
            Edit Profile
          </button>
          <button className="flex-1 border border-gray-400 rounded-xl py-2 hover:bg-gray-100">
            Share Profile
          </button>
        </div>
      </div>

      {/* HIRING INSIGHTS */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Hiring Insights</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Eye, label: "Profile Views", value: "245" },
            { icon: FileText, label: "Applications", value: "18" },
            { icon: TrendingUp, label: "Response Rate", value: "65%" },
            { icon: Clock, label: "Avg Response", value: "2.5 days" },
          ].map((item, i) => (
            <div key={i} className=" rounded-xl p-4 text-center shadow-md">
              <item.icon className="mx-auto text-blue-500 mb-2" />
              <h3 className="font-semibold">{item.value}</h3>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVE APPLICATIONS */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Active Applications</h2>

        {[
          {
            title: "Senior UX Designer",
            company: "Google",
            status: "Under Review",
          },
          {
            title: "Frontend Developer",
            company: "Amazon",
            status: "Interview Scheduled",
          },
          {
            title: "Cloud Engineer",
            company: "Microsoft",
            status: "Shortlisted",
          },
        ].map((job, i) => (
          <div key={i} className="rounded-xl p-4 mb-3 shadow-md bg-white ">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full whitespace-nowrap flex items-center justify-center ${getStatusStyle(
                  job.status,
                )}`}
              >
                {job.status}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Next step: Interview process
            </p>
          </div>
        ))}
      </div>

      {/* PROFILE VIEWS */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Recent Profile Views</h2>

        {["Sarah Johnson", "Michael Chen", "David Wilson"].map((name, i) => (
          <div
            key={i}
            className=" rounded-xl p-3 flex justify-between items-center mb-2 shadow-md"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-xs text-gray-500">Viewed recently</p>
              </div>
            </div>

            <MessageSquare className="text-gray-400" />
          </div>
        ))}
      </div>

      {/* AI CARD */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-5 rounded-2xl">
        <h3 className="font-semibold mb-2">AI Recommendation</h3>
        <ul className="text-sm space-y-1">
          <li>• Update portfolio</li>
          <li>• Add certifications</li>
          <li>• Connect with recruiters</li>
        </ul>

        <button className="mt-4 w-full border border-white py-2 rounded-xl hover:bg-white hover:text-black transition">
          Get AI Action Plan
        </button>
      </div>
    </div>
  );
}

export default HireMe;
