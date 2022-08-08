export enum FieldType {
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
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
  {
    name: FieldType.ConfirmPassword,
    type: 'password',
    placeholder: 'Confirm password',
  },
];
