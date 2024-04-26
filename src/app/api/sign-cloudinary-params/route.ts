import { cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret } from "@/lib/config";
import { v2 as cloudinary } from "cloudinary";
 
cloudinary.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
});
 
export async function POST(request: Request) {
  const body = await request.json();
  const { paramsToSign } = body;
 
  const signature = cloudinary.utils.api_sign_request(paramsToSign, cloudinaryApiSecret);
  
  return Response.json({ signature });
}