import { Search, MapPin, DollarSign, Bookmark, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function Jobs() {
  const jobs = [
    {
      title: "Senior UX Designer",
      company: "Google",
      location: "Dubai, UAE",
      salary: "AED 25,000 - 35,000",
      match: "95%",
      time: "2 hours ago",
    },
    {
      title: "Frontend Developer (React.js)",
      company: "Amazon",
      location: "Riyadh, KSA",
      salary: "SAR 18,000 - 25,000",
      match: "89%",
      time: "1 day ago",
    },
    {
      title: "Cloud Engineer - Azure",
      company: "Microsoft",
      location: "Doha, Qatar",
      salary: "QAR 22,000 - 30,000",
      match: "92%",
      time: "3 days ago",
    },
    {
      title: "Data Scientist",
      company: "Meta",
      location: "Remote",
      salary: "$6,000 - $8,000",
      match: "85%",
      time: "1 week ago",
    },
  ];

  const getMatchColor = (match) => {
    const val = parseInt(match);
    if (val >= 90) return "from-green-400 to-green-600";
    if (val >= 80) return "from-orange-400 to-orange-500";
    return "from-gray-400 to-gray-500";
  };

  return (
    <div className="bg-white min-h-screen px-4 md:px-10 lg:px-20 py-6 pb-24">
      {/* SEARCH SECTION */}
      <div className="bg-blue-400 p-4 rounded-2xl shadow-sm">
        <div className="flex items-center bg-white rounded-xl px-3 py-2 mb-3 shadow-sm">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Job title, skills, company..."
            className="ml-2 w-full outline-none text-sm"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex items-center bg-white rounded-xl px-3 py-2 flex-1 shadow-sm">
            <MapPin className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search country or city..."
              className="ml-2 w-full outline-none text-sm"
            />
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-xl flex items-center justify-center gap-2">
            <Search size={16} /> Find Jobs
          </button>
        </div>
      </div>

      {/* JOB LIST */}
      <Link
        to="/job/details"
        className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {jobs.map((job, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 shadow-md hover:shadow-lg transition"
          >
            {/* TOP */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.company}</p>
              </div>

              <Bookmark className="text-gray-400 cursor-pointer" />
            </div>

            {/* DETAILS */}
            <div className="flex flex-wrap gap-2 mt-3 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin size={14} /> {job.location}
              </span>

              <span className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                <DollarSign size={14} /> {job.salary}
              </span>
            </div>

            {/* MATCH */}
            <div className="mt-4 flex justify-between items-center">
              <div
                className={`text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r ${getMatchColor(
                  job.match,
                )}`}
              >
                {job.match} match
              </div>

              <div className="text-gray-400 text-xs flex items-center gap-1">
                <Clock size={14} /> {job.time}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-4 flex gap-2">
              <button className="flex-1 border border-gray-300 py-2 rounded-xl text-sm hover:bg-gray-100">
                Easy Apply
              </button>

              <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-sm hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
}

export default Jobs;
