export enum LoginProviders {
  EMAIL = 'EMAIL',
  GOOGLE = 'GOOGLE',
  APPLE = 'APPLE',
}

// export interface Profile {
//   /**
//    * Version of the application
//    */
//   APP_VERSION?: string;
//   /**
//    * Email address (primarily used from email login)
//    */
//   EMAIL?: string;
//   /**
//    * enum of login providers to help catch instagram vs email differences
//    */
//   LOGIN_PROVIDER?: LoginProviders;
//   /**
//    * Display name from instagrm
//    */
//   DISPLAY_NAME?: string;
//   /**
//    * Photo url
//    */
//   PHOTO_URL?: string
//   /**
//    * Photo thumbnail
//    */
//   PHOTO_THUMB_256_URL?: string;
//   /**
//    * User UID - email:{uid}
//    */
//   UID?: string;
// }

export interface Profile {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
