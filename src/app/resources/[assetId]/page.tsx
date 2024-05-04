
import MediaViewer from '@/components/MediaViewer';

import { cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret } from "@/lib/config";
import { v2 as cloudinary } from "cloudinary";
 
cloudinary.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
});

async function Resource({params}: {params:{assetId: string}}) {

  console.log('params', params)
  const {resources} = await cloudinary.api.resources_by_asset_ids(params.assetId)
  return (
    <MediaViewer
      resource={resources[0]

        }
    />
  );
}

export default Resource;