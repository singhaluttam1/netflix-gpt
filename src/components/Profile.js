import React, { useState } from "react";

const ProfileEditForm = () => {
  const [formData, setFormData] = useState({
    name: "Uttam Singhal",
    email: "singhaluttam1@gmail.com",
    password: "Uttam@123",
    avatar: "https://images.pexels.com/photos/921646/pexels-photo-921646.jpeg",
    bio: "Hello! I'm Uttam, a movie enthusiast and tech lover.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md md:max-w-lg lg:max-w-2xl 
          bg-gray-900 text-white rounded-xl shadow-2xl p-6 
          sm:p-8 md:p-20 
          space-y-6
        "
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-red-600">
          Edit Profile
        </h2>

        {/* Avatar Upload */}
        <div className="flex flex-col items-center">
          <img
            src={formData.avatar || "https://via.placeholder.com/100"}
            alt="avatar"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-md border-2 border-red-600 mb-4"
          />
          <input
            type="url"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Paste Avatar Image URL"
            className="w-full px-3 py-2 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm sm:text-base mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm sm:text-base mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm sm:text-base mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm sm:text-base mb-2">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write something about yourself..."
            rows="3"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button
            type="submit"
            className="
              w-full sm:w-auto 
              bg-red-600 hover:bg-red-700 
              px-4 sm:px-6 py-2 rounded-lg font-semibold 
              text-white text-sm sm:text-base transition-colors
            "
          >
            Save Changes
          </button>
          <button
            type="reset"
            onClick={() => setFormData({ name: "", email: "", password: "", avatar: "", bio: "" })}
            className="
              w-full sm:w-auto 
              bg-gray-700 hover:bg-gray-600 
              px-4 sm:px-6 py-2 rounded-lg font-semibold 
              text-white text-sm sm:text-base transition-colors
            "
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;