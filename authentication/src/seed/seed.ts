import bcryptjs from "bcryptjs";

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      email: "admin@gmail.com",
      name: "Jonh Doe",
      password: bcryptjs.hashSync("1234567"),
      role: "admin",
    },
    {
      email: "user@gmail.com",
      name: "Angel Cruz",
      password: bcryptjs.hashSync("1234567"),
      role: "user",
    },
  ],
};
