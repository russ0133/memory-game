import uniqid from "uniqid";
export default function generateImageArray() {
  let Images = [];
  for (let i = 0; i < 10; i++) {
    let Object = {
      id: i,
      src: `Image Nr ${i}`,
      clicked: false,
      unique: uniqid(),
    };
    Images.push(Object);
  }
  return Images;
}
