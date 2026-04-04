import { Search, MoreVertical, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function Messages() {
  const messages = [
    {
      name: "Google Recruiting",
      text: "We'd like to schedule an interview...",
      time: "10:30 AM",
      unread: 2,
      tags: ["Employer", "Interview"],
      active: false,
    },
    {
      name: "Sarah Johnson",
      text: "Your application has been shortlisted!",
      time: "Yesterday",
      unread: 0,
      tags: ["Employer"],
      active: true,
    },
    {
      name: "Amazon HR",
      text: "Can you share your portfolio?",
      time: "2 days ago",
      unread: 1,
      tags: ["Employer"],
      active: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen px-4 md:px-10 lg:px-20 py-6 pb-24">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Messages</h1>

        <div className="flex gap-4">
          <Search className="text-gray-500 cursor-pointer" />
          <MoreVertical className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* MESSAGE LIST */}
      <Link to="/chat" className="space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`border rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition ${
              msg.active ? "bg-white" : "bg-gray-50"
            }`}
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/100"
                  className="w-12 h-12 rounded-full"
                />

                {/* Active dot */}
                {msg.active && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold">{msg.name}</h3>
                <p className="text-gray-500 text-sm truncate max-w-[200px] md:max-w-xs">
                  {msg.text}
                </p>

                {/* TAGS */}
                <div className="flex gap-2 mt-1">
                  {msg.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full ${
                        tag === "Employer"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-right flex flex-col items-end gap-2">
              <p className="text-sm text-gray-400">{msg.time}</p>

              {msg.unread > 0 && (
                <span className="bg-black text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                  {msg.unread}
                </span>
              )}
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
}

export default Messages;
