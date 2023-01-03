export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannnot be processed`));
}
