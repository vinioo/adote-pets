import { IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { add } from "ionicons/icons";

interface ImageUploadProps {
  onImageUploaded: (image: string) => void;
}
const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUploaded }) => {
  const [image, setImage] = useState<string>("");
  return (
    <div className="image_upload_content">
      <div
        className="image_upload"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <IonIcon
          icon={add}
          className="icon"
          style={{
            display: image ? "none" : "block",
          }}
        ></IonIcon>
        <input
          type="file"
          accept="image/*"
          className="upload_file"
          name="imagem"
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : new Blob();
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target?.result) {
                setImage(e.target?.result?.toString());
                onImageUploaded(e.target?.result?.toString());
              }
            };

            reader.readAsDataURL(file);
          }}
        ></input>
      </div>
      <small className="image_upload_subtitle">adicionar uma imagem</small>
    </div>
  );
};

export default ImageUpload;
