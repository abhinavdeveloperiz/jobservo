import { Send } from "lucide-react";

function Chat() {
  const messages = [
    { text: "Hi Ahmed, we liked your profile!", sender: "other" },
    { text: "Thanks! Glad to hear that 🙌", sender: "me" },
    { text: "Can you share your portfolio?", sender: "other" },
    { text: "Sure, I’ll send it right away.", sender: "me" },
    { text: "Great! Looking forward to it.", sender: "other" },
    { text: "Hi Ahmed, we liked your profile!", sender: "other" },
    { text: "Thanks! Glad to hear that 🙌", sender: "me" },
    { text: "Can you share your portfolio?", sender: "other" },
    { text: "Sure, I’ll send it right away.", sender: "me" },
    { text: "Great! Looking forward to it.", sender: "other" },
    { text: "Hi Ahmed, we liked your profile!", sender: "other" },
    { text: "Thanks! Glad to hear that 🙌", sender: "me" },
    { text: "Can you share your portfolio?", sender: "other" },
    { text: "Sure, I’ll send it right away.", sender: "me" },
    { text: "Great! Looking forward to it.", sender: "other" },
    { text: "Hi Ahmed, we liked your profile!", sender: "other" },
    { text: "Thanks! Glad to hear that 🙌", sender: "me" },
    { text: "Can you share your portfolio?", sender: "other" },
    { text: "Sure, I’ll send it right away.", sender: "me" },
    { text: "Great! Looking forward to it.", sender: "other" },
  ];

  return (
    <>
      <style>
        {`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="h-screen flex flex-col bg-gradient-to-b from-blue-200 to-white">
        {/* HEADER */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md flex items-center justify-center gap-3 px-4 py-3 shadow-sm border-b">
          <img
            src="https://i.pravatar.cc/100"
            className="w-10 h-10 rounded-full"
            alt="Profile"
          />
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">Google HR</h3>
            <p className="text-xs text-green-500">● Online</p>
          </div>
        </div>

        {/* CHAT BODY */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 max-w-4xl mx-auto w-full pb-20 scrollbar-hide mb-32">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "other" && (
                <img
                  src="https://i.pravatar.cc/100"
                  className="w-8 h-8 rounded-full mr-2 self-end flex-shrink-0"
                  alt="Sender"
                />
              )}

              <div
                className={`max-w-[70%] px-4 py-2 text-sm shadow-md ${
                  msg.sender === "me"
                    ? "bg-blue-600 text-white rounded-2xl rounded-br-sm"
                    : "bg-white text-gray-800 rounded-2xl rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === "me" && (
                <img
                  src="https://i.pravatar.cc/101"
                  className="w-8 h-8 rounded-full ml-2 self-end flex-shrink-0"
                  alt="Me"
                />
              )}
            </div>
          ))}
        </div>

        {/* INPUT BOX */}
        <div className="fixed bottom-30 left-0 w-full px-4 py-4 bg-gradient-to-t from-white to-transparent">
          <div className="max-w-4xl mx-auto flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg rounded-full px-4 py-2 border">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none px-2 text-sm"
            />

            <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-md flex-shrink-0">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
