import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUserService: CreateUserService;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('Authenticate a user', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'abc123',
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@email.com',
      password: 'abc123',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('Not authenticate with non existent user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'johndoe@email.com',
        password: 'abc123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Not authenticate with wrong user's password", async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'abc123',
    });

    await expect(
      authenticateUser.execute({
        email: 'johndoe@email.com',
        password: 'abc',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
