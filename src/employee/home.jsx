import {
  Bell,
  ArrowRight,
  Flame,
  Star,
  MapPin,
  DollarSign,
  FileText,
  User,
  Users,
  Briefcase,
} from "lucide-react";

function Home() {
  return (
    <div className=" bg-gradient-to-b from-blue-50 via-white to-white min-h-screen px-4 pb-24 text-gray-900">
      {/* HERO */}
      <div
        className="bg-gradient-to-b from-blue-500 to-blue-200 text-white rounded-b-[40px] p-6 relative shadow-md"
        data-aos="fade-down"
      >
        <h1 className="text-3xl font-semibold leading-snug">
          Find Your <br /> Dream Job
        </h1>

        <div className="absolute top-6 right-6 bg-white p-2 rounded-xl shadow">
          <Bell className="text-blue-600" size={20} />
        </div>
      </div>

      {/* USER */}
      <div className="flex justify-between items-center mt-6 max-w-6xl mx-auto">
        <div>
          <p className="text-gray-500">Welcome back,</p>
          <h2 className="text-xl font-semibold">Alex Morgan! 👋</h2>
        </div>

        <img
          src="https://i.pravatar.cc/100"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-6 max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>

        <div className="grid grid-cols-4 gap-3">
          {[
            {
              title: "CV Builder",
              color: "from-purple-500 to-indigo-500",
              icon: FileText,
            },
            {
              title: "Create Profile",
              color: "from-green-400 to-green-600",
              icon: User,
            },
            {
              title: "Community",
              color: "from-green-500 to-emerald-600",
              icon: Users,
            },
            {
              title: "Hire Me",
              color: "from-orange-400 to-yellow-500",
              icon: Briefcase,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-3 text-center shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${item.color} mb-2 flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs text-gray-600">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI CARD */}
      <div className="max-w-6xl mx-auto mt-6 bg-gradient-to-r from-blue-500 to-blue-200 p-5 rounded-3xl flex items-center justify-between shadow">
        <div>
          <h4 className="font-semibold text-lg text-white">AI Assistant</h4>
          <p className="text-sm text-white/90">
            Get personalized job suggestions
          </p>
        </div>

        <div className="bg-white p-3 rounded-xl shadow">
          <ArrowRight className="text-blue-600" size={20} />
        </div>
      </div>

      {/* TRENDING */}
      <div className="mt-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-3">
          <h3 className="flex items-center gap-2 font-semibold text-lg">
            <Flame className="text-orange-500" size={20} /> Trending Jobs
          </h3>
          <button className="text-blue-600 text-sm font-medium">See All</button>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <p className="text-gray-500 text-sm">Google</p>
          <h4 className="text-lg font-semibold mt-1">Senior UX Designer</h4>

          <div className="flex gap-2 mt-3 flex-wrap text-sm">
            <span className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin size={14} /> Dubai, UAE
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
              <DollarSign size={14} /> AED 25,000
            </span>
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl flex justify-center items-center gap-2">
            Apply Now <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* RECOMMENDED */}
      <div className="mt-8 max-w-6xl mx-auto">
        <h3 className="flex items-center gap-2 font-semibold text-lg mb-3">
          <Star className="text-yellow-400" size={20} /> Recommended For You
        </h3>

        {[
          { title: "iOS Developer", company: "Apple", match: "95%" },
          { title: "Product Manager", company: "Meta", match: "88%" },
          { title: "Content Strategist", company: "Netflix", match: "92%" },
        ].map((job, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-4 mb-4 flex items-center justify-between shadow-sm"
          >
            <div className="flex gap-3">
              <div className="bg-green-500 text-white font-bold rounded-xl w-14 h-14 flex items-center justify-center">
                {job.match}
              </div>

              <div>
                <h4 className="font-semibold">{job.title}</h4>
                <p className="text-gray-500 text-sm">{job.company}</p>

                <div className="flex gap-2 mt-2 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    <MapPin size={12} className="inline" /> UAE
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    <DollarSign size={12} className="inline" /> AED 22k
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white p-3 rounded-xl shadow">
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
