import { NavLink } from "react-router-dom";
import { Home, Briefcase, MessageCircle, User, Sparkles } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/jobs", icon: Briefcase, label: "Jobs" },
  { path: "/hireme", icon: Sparkles, label: "Hire Me" },
  { path: "/messages", icon: MessageCircle, label: "Messages" },
  { path: "/profile", icon: User, label: "Profile" },
];

function Navbar() {
  const triggerHaptic = () => {
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.vibrate === "function"
    ) {
      navigator.vibrate(50);
    }
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-full bg-white/50 border border-white shadow-2xl backdrop-blur-xl">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              onPointerDown={triggerHaptic}
              onClick={triggerHaptic}
              className="flex-1"
            >
              {({ isActive }) => (
                <div className="flex flex-col items-center gap-1 text-[11px] transition">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-3xl transition ${
                      isActive
                        ? "bg-blue-100 text-blue-600 shadow"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className={`font-semibold ${isActive ? "text-blue-600" : "text-slate-500"}`}
                  >
                    {item.label}
                  </span>
                </div>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
