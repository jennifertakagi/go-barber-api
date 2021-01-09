import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointmentService', () => {
  it('Create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment).toHaveProperty('date');
    expect(appointment.provider_id).toBe('123');
  });

  // it('Not create two appointments on the same date', () => {

  // })
});
