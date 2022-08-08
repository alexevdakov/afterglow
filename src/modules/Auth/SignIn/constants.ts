export enum FieldType {
  Email = 'email',
  Password = 'password',
}

export const fieldsData = [
  {
    name: FieldType.Email,
    type: 'email',
    placeholder: 'Email address',
  },
  {
    name: FieldType.Password,
    type: 'password',
    placeholder: 'Password',
  },
];
