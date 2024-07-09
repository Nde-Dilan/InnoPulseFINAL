import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";
import Widget from "@/components/Widget";
import { Post } from "@/mongodb/models/post";
import connectDB from "@/mongodb/db";
import LandinPage from "@/components/LandinPage";
import HomePage from "@/components/Home";
import Header from "@/components/Header";
import Headers from "./Header";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";


export const revalidate = 0;

export default async function Home() {
  await connectDB();
  const isSignedIn = true;

  return (

    <>


      <SignedIn>
      <Header/>
        <HomePage />
      </SignedIn>

      <SignedOut>
      <Headers />
        <LandinPage />
      </SignedOut>


    </>

  );
}
