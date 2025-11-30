export interface Staff {
  id: number | string
  uuid: string
  name: string
  email: string
  phone?: string
  avatar?: string
  role?: string
  designation?: string
  specialization?: string
  department?: string
  is_active?: boolean
}
