import { useState } from "react";

export default function UploadPreview() {
  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState<string>();

  return (
    <form encType="multipart/form-data">
      <input
        type="file"
        accept="image/*"
        value={filePath}
        onChange={(e) => {
          setFilePath(e.target.value);
          if (e.target.files) {
            setFile(URL.createObjectURL(e.target.files[0]));
          }
        }}
      ></input>
      <button type="submit">Submit</button>
      <div>{filePath}</div>
      <div>{file}</div>
      {file && <div><img src={file} alt="a" /></div>}
    </form>
  );
}
