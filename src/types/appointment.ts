export type AppointmentStatus = 
  | 'SCHEDULED' 
  | 'IN-PROGRESS' 
  | 'COMPLETED' 
  | 'CANCELLED' 
  | 'RESCHEDULED'
  | 'MISSED'

export type AppointmentMode = 'IN-PERSON' | 'VIRTUAL' | 'TELEHEALTH'

export interface Appointment {
  id: number | string
  appointment_number?: string
  patient: {
    id: number | string
    uuid: string
    name: string
    avatar?: string
    phone?: string
    email?: string
    opd_no?: string
  }
  staff: {
    id: number | string
    uuid: string
    name: string
    avatar?: string
    specialization?: string
    designation?: string
  }
  service?: {
    id: number | string
    name: string
  }
  start_date: string
  start_time?: string
  end_date?: string
  end_time?: string
  status: AppointmentStatus
  mode?: AppointmentMode
  type?: string
  location?: string
  notes?: string
  
  // Mapped properties used in UI
  patient_name?: string
  patient_avatar?: string
  staff_name?: string
  doctor_avatar?: string
  service_name?: string
  formatted_date?: string
  formatted_time?: string
}

export interface Service {
  id: number | string
  name: string
  description?: string
  duration?: number
  price?: number
}
