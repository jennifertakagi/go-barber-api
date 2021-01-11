import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUserService: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });
  it('Create a new user', async () => {
    const appointment = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'abc123',
    });

    expect(appointment).toHaveProperty('id');
  });

  it('Not create a new user with same email from another', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'abc123',
    });

    await expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: 'abc123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
