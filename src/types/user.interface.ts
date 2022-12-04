interface IUserData {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }[];
}

export default IUserData;
