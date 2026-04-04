import {
  ArrowLeft,
  Bookmark,
  Share2,
  MapPin,
  Building2,
  DollarSign,
  Briefcase,
  Clock,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

function JobDetails() {
  return (
    <div className="bg-white min-h-screen pb-28 ">
      {/* HEADER */}
      <div className="bg-gradient-to-b from-blue-200 to-white p-5 rounded-b-3xl ">
        <div className="flex justify-between items-center">
          <ArrowLeft className="cursor-pointer" />
          <div className="flex gap-4">
            <Bookmark className="cursor-pointer" />
            <Share2 className="cursor-pointer" />
          </div>
        </div>

        {/* COMPANY */}
        <div className="mt-6 flex items-center gap-4 max-w-6xl mx-auto">
          <div className="w-14 h-14 bg-gray-300 rounded-xl" />
          <h2 className="text-2xl font-semibold">Microsoft</h2>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-5 mt-6 max-w-6xl mx-auto">
        {/* TITLE */}
        <h1 className="text-2xl font-bold">Software Engineer</h1>

        <div className="flex gap-4 text-gray-500 mt-2 text-sm">
          <span className="flex items-center gap-1">
            <Building2 size={14} /> Microsoft
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} /> Bangalore, India
          </span>
        </div>

        {/* STATS CARD */}
        <div className="mt-6 bg-sky-100 rounded-2xl p-4 grid grid-cols-2 gap-4 text-center ">
          <div>
            <DollarSign className="mx-auto text-purple-600 mb-1" />
            <p className="font-semibold">₹ 40,000 - 60,000</p>
            <p className="text-xs text-gray-500">Salary</p>
          </div>

          <div>
            <Briefcase className="mx-auto text-purple-600 mb-1" />
            <p className="font-semibold">Full-time</p>
            <p className="text-xs text-gray-500">Type</p>
          </div>

          <div>
            <Clock className="mx-auto text-purple-600 mb-1" />
            <p className="font-semibold">1 day ago</p>
            <p className="text-xs text-gray-500">Posted</p>
          </div>

          <div>
            <TrendingUp className="mx-auto text-purple-600 mb-1" />
            <p className="font-semibold">92%</p>
            <p className="text-xs text-gray-500">Match</p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Job Description</h2>
          <p className="text-gray-600 leading-relaxed">
            Microsoft is looking for a Software Engineer to develop enterprise
            applications and scalable systems. You will work with modern
            technologies and cloud-based infrastructure.
          </p>
        </div>

        {/* REQUIREMENTS */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Requirements</h2>

          <ul className="space-y-2">
            {[
              "Bachelor's degree in Computer Science",
              "3+ years experience with .NET",
              "Experience with Azure cloud",
              "Strong SQL knowledge",
              "Problem-solving skills",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 mt-1" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY CARD */}
        <div className="mt-8 bg-sky-100 rounded-2xl p-5">
          <h3 className="text-lg font-semibold">Microsoft</h3>
          <p className="text-sm text-gray-500 mb-3">
            220,000+ employees • Software
          </p>

          <p className="text-sky-600 text-sm">
            Microsoft Corporation is a multinational technology company focused
            on software, cloud computing, and AI innovation.
          </p>

          <div className="flex gap-3 mt-4">
            <div className="flex-1 bg-white rounded-xl p-3 text-center shadow-sm">
              <p className="font-semibold">4.2 ★</p>
              <p className="text-xs text-gray-500">Glassdoor</p>
            </div>

            <div className="flex-1 bg-white rounded-xl p-3 text-center shadow-sm">
              <p className="font-semibold">5.1k</p>
              <p className="text-xs text-gray-500">Reviews</p>
            </div>

            <div className="flex-1 bg-white rounded-xl p-3 text-center shadow-sm">
              <p className="font-semibold">50+</p>
              <p className="text-xs text-gray-500">Jobs</p>
            </div>
          </div>
        </div>

        {/* SIMILAR JOBS */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Similar Jobs</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {["Senior Frontend Developer", "React Native Developer"].map(
              (job, i) => (
                <div key={i} className="bg-sky-100 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold">{job}</h4>
                  <p className="text-sm text-gray-500">Microsoft</p>

                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <span>Dubai</span>
                    <span>AED 25,000</span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION BAR */}
      <div className=" w-full bg-white mt-12 p-4 flex gap-3 max-w-6xl mx-auto">
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium">
          Quick Apply
        </button>

        <button className="flex-1 border border-purple-500 text-purple-600 py-3 rounded-xl font-medium">
          Full Application
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
