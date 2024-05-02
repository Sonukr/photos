import MediaGallery from '@/components/MediaGallery';
import {v2 as cloudinary} from 'cloudinary';
import { cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret  } from '../../lib/config';


cloudinary.config({
  // cloud_name: cloudinaryCloudName ,
  // api_key: cloudinaryApiKey,
  // api_secret: cloudinaryApiSecret,
  // secure: true,

  cloud_name: 'dvtzeylhv',
  api_key: '597931921642148',
  api_secret: '9RZnKJEPYj5gvFkuhjZV1oEtRSE',
  secure: true,
})

export default async function Home() {

  const {resources: photos} = await cloudinary.api.resources_by_tag('media');
  console.log(photos)
  return (
    <div className="h-full mt-6">
      <MediaGallery
        resources={photos}
      />
    </div>
  )
}