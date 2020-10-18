import { Router } from 'express';
import { uuid } from 'uuidv4';
import { isEqual, startOfHour, parseISO } from 'date-fns';

interface Appointment {
  date: Date;
  id: string;
  provider: string;
}

const appointmentsRouter = Router();
const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;
  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointments.find(appointment => isEqual(parsedDate, appointment.date))

  if (findAppointmentInSameDate) {
    return response.status(400).json({ message: 'This appointment is already booked 😞'})
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  }

  appointments.push(appointment);

  return response.json(appointment)
});

export default appointmentsRouter;
