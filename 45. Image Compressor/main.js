import Compressor from "compressorjs";
const before = document.querySelector(".before");
const after = document.querySelector(".after");
const input = document.querySelector(".input");

function binaryTobase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    base64 = reader.result;
  };
  return base64;
}

const success = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    const base64 = reader.result;
    after.src = base64;
    // console.log({ base64 });
  };
  
};
const error = (err) => console.log({ error });
input.oninput = () => {
  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const base64 = reader.result;
    before.src = base64;
    // console.log({ base64 });
  };

  new Compressor(file, {
    quality: 0.6,
    success,
    error,
  });
};

console.log("connected");
