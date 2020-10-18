import { uuid } from 'uuidv4';

class Appointment {
  date: Date;

  id: string;

  provider: string;

  constructor({ date, provider }: Omit<Appointment, 'id'>) {
    this.date = date;
    this.id = uuid();
    this.provider = provider;
  }
}

export default Appointment;
