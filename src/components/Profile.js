import React from "react";
import { Home, CreditCard, Shield, Monitor, Users, Lock, Settings, UserPlus, AlertTriangle, Repeat } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm border-r hidden md:flex flex-col">
        <div className="p-4 text-lg font-semibold border-b">Back to Netflix</div>
        <nav className="flex-1 p-4 space-y-4">
          <a href="#" className="flex items-center gap-3 text-black font-medium">
            <Home className="w-5 h-5" /> Overview
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black">
            <CreditCard className="w-5 h-5" /> Membership
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black">
            <Shield className="w-5 h-5" /> Security
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black">
            <Monitor className="w-5 h-5" /> Devices
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black">
            <Users className="w-5 h-5" /> Profiles
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-1 text-black" >Account</h1>
        <p className="text-gray-600 mb-6">Membership details</p>

        {/* Membership Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
            Member since June 2025
          </span>
          <h2 className="text-lg font-semibold mt-4">Basic plan</h2>
          <p className="text-gray-600 text-sm">Next payment: 7 October 2025</p>
          <p className="text-gray-600 text-sm mt-2">s***@ybl</p>
          <button className="mt-4 text-purple-600 font-medium">Manage membership →</button>
        </div>

        {/* Quick Links */}
        <h2 className="text-lg font-semibold mb-4">Quick links</h2>
        <div className="bg-white rounded-lg shadow-sm border divide-y text-black">
          {[
            { label: "Change plan", icon: Repeat },
            { label: "Manage payment method", icon: CreditCard },
            { label: "Manage access and devices", icon: Monitor },
            { label: "Update password", icon: Lock },
            { label: "Transfer a profile", icon: UserPlus },
            { label: "Adjust parental controls", icon: AlertTriangle },
            { label: "Edit settings", icon: Settings, sub: "Languages, subtitles, autoplay, notifications, privacy and more" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">{item.label}</p>
                  {item.sub && <p className="text-sm text-gray-500">{item.sub}</p>}
                </div>
              </div>
              <span className="text-gray-400">›</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Profile;