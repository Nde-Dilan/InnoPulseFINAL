// components/ProfilePage.tsx
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface ProfilePageProps {
  userType: "client" | "company";
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userType }) => {
  const { register, handleSubmit, reset } = useForm();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    // Here you can perform actions like saving to database or API
    // Reset form after submission
    reset();
    // Optionally perform other actions after submission
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="profile" className="pt-16 md:pt-20 lg:pt-28 mb-4">
      <div className="container mx-auto max-w-2xl px-4">
        <h1 className="mb-8 text-center text-3xl font-bold">Profile Page</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border rounded-lg p-6 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              {preview && (
                <img
                  src={preview as string}
                  alt="Profile Preview"
                  className="h-24 w-24 rounded-full object-cover border-2 border-gray-300"
                />
              )}
              <input
                type="file"
                {...register("image")}
                className="hidden"
                id="profile-image-upload"
                onChange={handleImageChange}
              />
              <label htmlFor="profile-image-upload" className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.707 10.293a1 1 0 011.414 0L11 12.586V10a1 1 0 112 0v3a1 1 0 01-.293.707l-2 2A1 1 0 019 15H6a1 1 0 010-2h2.586L7.293 12.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div>
              <label className="mb-2 block">Upload Image</label>
              <input
                type="file"
                {...register("image")}
                className="w-full rounded border p-2"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1 md:col-span-2">
              <label className="mb-2 block">Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full rounded border p-2"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="mb-2 block">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full rounded border p-2"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="mb-2 block">Description</label>
              <textarea
                {...register("description")}
                className="w-full rounded border p-2"
              />
            </div>
            {userType === "company" ? (
              <>
                <div className="col-span-1 md:col-span-2">
                  <label className="mb-2 block">Location</label>
                  <input
                    type="text"
                    {...register("location")}
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="mb-2 block">Upload Documents</label>
                  <input
                    type="file"
                    {...register("documents")}
                    className="w-full rounded border p-2"
                    multiple
                  />
                </div>
              </>
            ) : (
              <>
                <div className="col-span-1 md:col-span-2">
                  <label className="mb-2 block">CNI Number</label>
                  <input
                    type="text"
                    {...register("cniNumber")}
                    className="w-full rounded border p-2"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="mb-2 block">Upload CNI</label>
                  <input
                    type="file"
                    {...register("cni")}
                    className="w-full rounded border p-2"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfilePage;
