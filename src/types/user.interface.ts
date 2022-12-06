type TAddress = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
interface IUserData {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
  email: string;
  phone: string;
  address: TAddress;
}

export default IUserData;
