import { uuid } from 'uuidv4';

class Appointment {
  date: Date;

  id: string;

  provider: string;

  constructor(provider: string, date: Date) {
    this.date = date;
    this.id = uuid();
    this.provider = provider;
  }
}

export default Appointment;
