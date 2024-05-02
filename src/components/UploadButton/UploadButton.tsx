"use-client";

import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { Upload } from 'lucide-react';
import { useResources } from '@/hooks/useResources';
import { Photos } from '@/types/cloudinary';

const UploadButton = () => {

  const {addResources} = useResources({
    disableFetch: true,
    tag: 'media'
  });

  const handleSuccess = (results: CloudinaryUploadWidgetResults) => {
    debugger;
    addResources([ results.info as Photos])
  }
  return (

    <CldUploadButton
      signatureEndpoint={'/api/sign-cloudinary-params'}
      options={{
        autoMinimize: true,
        tags: ['media']
      }}
      onSuccess={handleSuccess}
    >
      <span className="flex gap-2 items-center">
        <Upload className="w-4 h-4 " /> Upload
      </span>
    </CldUploadButton>);
}

export default UploadButton; 