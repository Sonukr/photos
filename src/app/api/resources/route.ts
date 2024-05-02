import { cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret } from "@/lib/config";
import { v2 as cloudinary } from "cloudinary";
 
cloudinary.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
});
 
export async function GET () {
  const  {resources} = await cloudinary.api.resources_by_tag('media');
  return Response.json({
    data:  resources
  });
}