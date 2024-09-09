import { faker } from '@faker-js/faker';
import request from 'supertest';
import generateCPF from '../../src/utils/generateCPF';
// import generatePhone from '../../src/utils/generatePhone';

describe('Create User', () => {
  it('Should create a user successfully', async () => {

    const password = faker.internet.password();

    const user = {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      cpf: generateCPF(),
      phone: '15996366780',
      type: 'ADMIN',
      email: faker.internet.email(),
      password: password,
      confirmPassword: password,
    };

    const userCreated = await request('http://localhost:3000').post('/users').send(user);

    expect(userCreated.status).toBe(200);
    expect(userCreated.body).toHaveProperty('userCode');
    expect(userCreated.body).toHaveProperty('name', user.name);
    expect(userCreated.body).toHaveProperty('email', user.email);
    expect(userCreated.body).toHaveProperty('cpf', user.cpf);
    expect(userCreated.body).toHaveProperty('phone', user.phone);
    expect(userCreated.body).toHaveProperty('type', user.type);
    expect(userCreated.body).toHaveProperty('active', true);
    expect(userCreated.body).toHaveProperty('password');
    expect(userCreated.body.password).not.toBe(user.password);
    expect(userCreated.body).toHaveProperty('createdAt');
    expect(new Date(userCreated.body.createdAt)).toBeInstanceOf(Date);
    expect(userCreated.body).toHaveProperty('updatedAt');
    expect(new Date(userCreated.body.updatedAt)).toBeInstanceOf(Date);
  });

  it('Should return an error when email format is invalid', async () => {

    const password = faker.internet.password();

    const user = {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      cpf: generateCPF(),
      phone: '15996366780',
      type: 'ADMIN',
      email: 'invalid-email-format',
      password: password,
      confirmPassword: password,
    };

    const userCreated = await request('http://localhost:3000').post('/users').send(user);

    expect(userCreated.status).toBe(400);
    expect(userCreated.body).toHaveProperty('error');
    expect(userCreated.body).toHaveProperty('description', 'Email inválido');
  });

  it('Should return an error when passwords do not match', async () => {

    const password = faker.internet.password();

    const user = {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      cpf: generateCPF(),
      phone: '15996366780',
      type: 'ADMIN',
      email: faker.internet.email(),
      password: password,
      confirmPassword: `${password}123`,
    };

    const userCreated = await request('http://localhost:3000')
      .post('/users')
      .send(user);

    expect(userCreated.status).toBe(400);
    expect(userCreated.body).toHaveProperty('error');
    expect(userCreated.body).toHaveProperty('description', 'As senhas devem coincidir');
  });

  it('Should return an error when email is already registered', async () => {

    const password = faker.internet.password();
    const email = faker.internet.email();

    const existingUser = {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      cpf: generateCPF(),
      phone: '15996366780',
      type: 'ADMIN',
      email: email,
      password: password,
      confirmPassword: password,
    };

    const response = await request('http://localhost:3000')
      .post('/users')
      .send(existingUser);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('userCode');
    expect(response.body).toHaveProperty('email', existingUser.email);

    const userWithDuplicateEmail = {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      cpf: generateCPF(),
      phone: '15996366780',
      type: 'ADMIN',
      email: existingUser.email,
      password: password,
      confirmPassword: password,
    };

    const duplicateResponse = await request('http://localhost:3000')
      .post('/users')
      .send(userWithDuplicateEmail);

    expect(duplicateResponse.status).toBe(400);
    expect(duplicateResponse.body).toHaveProperty('error', true);
    expect(duplicateResponse.body).toHaveProperty('description', 'Esse email já está cadastrado.');
  });

  it('Should return an error when CPF is invalid', async () => {

    const password = faker.internet.password();

    const userWithInvalidCPF = {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      cpf: '12345678900',
      phone: '15996366780',
      type: 'ADMIN',
      email: faker.internet.email(),
      password: password,
      confirmPassword: password,
    };

    const response = await request('http://localhost:3000')
      .post('/users')
      .send(userWithInvalidCPF);


    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', true);
    expect(response.body).toHaveProperty('description', 'CPF inválido');
  });

});
