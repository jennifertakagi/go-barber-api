import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @Column('timestamp with time zone')
  date: Date;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;
}

export default Appointment;
