"use server";

import { AddPostRequestBody } from "@/app/api/posts/route";
import { Post } from "@/mongodb/models/post";
import { IUser } from "@/types/user";
import { currentUser } from "@clerk/nextjs/server";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { storage } from "@/lib/firebaseAdmin"; // Adjust the path as needed

export default async function createPostAction(formData: FormData) {
  const user = await currentUser();
  const postInput = formData.get("postInput") as string;
  const image = formData.get("image") as File;
  let image_url = undefined;

  if (!postInput) {
    throw new Error("Post input is required");
  }

  if (!user?.id) {
    throw new Error("User not authenticated");
  }

  const userDB: IUser = {
    userId: user.id,
    userImage: user.imageUrl,
    firstName: user.firstName || "",
    lastName: user.lastName || "",
  };

  try {
    if (image.size > 0) {
      console.log("Uploading image to Firebase Storage...", image);

      const timestamp = new Date().getTime();
      const file_name = `${randomUUID()}_${timestamp}.png`;
      const bucket = storage.bucket();

      const file = bucket.file(`images/${file_name}`);
      
      const stream = file.createWriteStream({
        metadata: {
          contentType: image.type,
        },
      });


      stream.on('error', (err: { message: any; }) => {
        throw new Error(`Unable to upload image: ${err.message}`);
      });

      stream.on('finish', async () => {
        image_url = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
        console.log("File uploaded successfully!", image_url);

        const body: AddPostRequestBody = {
          user: userDB,
          text: postInput,
          imageUrl: image_url,
        };
        await file.makePublic();


        await Post.create(body);
        revalidatePath("/");
      });

      const imageBuffer = await image.arrayBuffer();
      stream.end(Buffer.from(imageBuffer));
    } else {
      const body: AddPostRequestBody = {
        user: userDB,
        text: postInput,
      };

      await Post.create(body);
      revalidatePath("/");
    }
  } catch (error: any) {
    throw new Error(`Failed to create post: ${error.message}`);
  }
}
