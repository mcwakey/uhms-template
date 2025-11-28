// Patient related type definitions

import type { Address, ContactInfo } from './common'

export type PatientGender = 'MALE' | 'FEMALE' | 'OTHER'

export type PatientBloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'

export interface Patient {
  id: number | string
  uuid?: string

  // Personal information
  name: string
  full_name?: string // Display name
  first_name?: string
  last_name?: string
  middle_name?: string
  other_names?: string
  date_of_birth?: string
  age?: number | { value: number; unit: string }
  gender?: PatientGender
  blood_group?: PatientBloodGroup
  marital_status?: string
  religion?: string
  occupation?: string

  // Contact information
  phone?: string
  other_phones?: string
  email?: string
  emergency_contact?: string | {
    name?: string
    phone?: string
    other_phone?: string
    relation?: string
  }
  emergency_phone?: string
  emergency_relation?: string

  // Address
  address?: string | Address | {
    address_line_1?: string
    address_line_2?: string
    city?: string
    state?: string
    country?: string
    zip_code?: string
    latitude?: number
    longitude?: number
  }
  city?: string
  state?: string
  zip_code?: string
  country?: string

  // Medical information
  medical_history?: string
  allergies?: string[]
  current_medications?: string[]
  chronic_conditions?: string[]
  vital_signs?: {
    temperature?: string | number
    blood_pressure?: string
    heart_rate?: string | number
    respiratory_rate?: string | number
    spo2?: string | number
    weight?: string | number
    height?: string | number
    bmi?: string | number
  }

  // Insurance
  insurance_provider?: string
  insurance_number?: string
  insurance_expiry?: string

  // Profile
  avatar?: string
  patient_number?: string
  opd_no?: string
  registration_date?: string
  last_visit_date?: string

  // Status
  is_active?: boolean
  status?: boolean | string

  // Metadata
  created_at?: string
  updated_at?: string
  notes?: string
}

export interface PatientFormData {
  id?: number | string
  name?: string
  first_name?: string
  last_name?: string
  date_of_birth?: string
  gender?: PatientGender
  blood_group?: PatientBloodGroup
  phone?: string
  email?: string
  address?: string
  city?: string
  state?: string
  zip_code?: string
  country?: string
  emergency_contact?: string
  emergency_phone?: string
  insurance_provider?: string
  insurance_number?: string
  medical_history?: string
  allergies?: string[]
  notes?: string
}

export interface PatientFilters {
  search?: string
  gender?: PatientGender
  blood_group?: PatientBloodGroup
  age_from?: number
  age_to?: number
  registration_from?: string
  registration_to?: string
  is_active?: boolean
}

export interface PatientStats {
  total: number
  active: number
  new_today: number
  new_this_week: number
  new_this_month: number
}

export interface PatientVitals {
  patient_id: number | string
  appointment_id?: number | string
  recorded_at: string
  recorded_by?: string

  // Vital signs
  temperature?: number // in Celsius
  temperature_unit?: 'C' | 'F'
  blood_pressure_systolic?: number
  blood_pressure_diastolic?: number
  heart_rate?: number // beats per minute
  respiratory_rate?: number // breaths per minute
  oxygen_saturation?: number // percentage
  weight?: number // in kg
  weight_unit?: 'kg' | 'lbs'
  height?: number // in cm
  height_unit?: 'cm' | 'in'
  bmi?: number

  // Additional measurements
  glucose_level?: number
  pain_level?: number // 0-10 scale

  notes?: string
}
