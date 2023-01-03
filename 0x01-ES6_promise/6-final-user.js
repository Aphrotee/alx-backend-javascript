import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return (Promise.allSettled([
    uploadPhoto(fileName),
    signUpUser(firstName, lastName),
  ])
    .then((results) => {
      const [photo, user] = results;
      if (photo.status === 'rejected') {
        return [user.value, photo.reason];
      }
      return [user.value, photo.value];
    })
  );
}
