import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";
import Widget from "@/components/Widget";
import { Post } from "@/mongodb/models/post";
import { SignedIn } from "@clerk/nextjs";
import connectDB from "@/mongodb/db";
import LandinPage from "@/components/LandinPage";
import HomePage from "@/components/Home";

export const revalidate = 0;

export default async function Home() {
  await connectDB();
  const isSignedIn = true;

  return (
    isSignedIn ? (
    <HomePage/>) : (
      <LandinPage/>
    )
  );
}
