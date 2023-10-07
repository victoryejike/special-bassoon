"use client";

import React from "react";
interface ImageUploadProps {
  onChange: (value: number) => void;
  value: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  return <div>ImageUpload</div>;
};

export default ImageUpload;
