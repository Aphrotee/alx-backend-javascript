export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    reject(new Error(`${filename} cannnot be processed`));
  });
}
