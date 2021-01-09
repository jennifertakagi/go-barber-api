import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUserService', () => {
  it('Create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const appointment = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'abc123',
    });

    expect(appointment).toHaveProperty('id');
  });

  it('Not create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'abc123',
    });

    expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: 'abc123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
