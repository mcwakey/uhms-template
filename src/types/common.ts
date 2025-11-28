// Common type definitions shared across the application

export interface ApiResponse<T = any> {
  data: T
  message?: string
  status?: number
  total?: number
  page?: number
  per_page?: number
}

export interface PaginationConfig {
  current: number
  pageSize: number
  total: number
  showSizeChanger?: boolean
  showQuickJumper?: boolean
}

export interface TableColumn {
  title: string
  key: string
  dataIndex?: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
  sorter?: boolean
}

export interface SelectOption<T = any> {
  label: string
  value: T
  disabled?: boolean
}

export interface FormValidationRule {
  required?: boolean
  message?: string
  pattern?: RegExp
  validator?: (value: any) => boolean | Promise<boolean>
}

export interface UploadFile {
  uid: string
  name: string
  status: 'uploading' | 'done' | 'error' | 'removed'
  url?: string
  response?: any
}

export type LoadingState = boolean
export type ErrorState = string | null

export interface DateRange {
  start: string | Date
  end: string | Date
}

export interface TimeSlot {
  start: string
  end: string
  available: boolean
}

export interface Address {
  street?: string
  city?: string
  state?: string
  zip_code?: string
  country?: string
}

export interface ContactInfo {
  phone?: string
  email?: string
  emergency_contact?: string
  emergency_phone?: string
}
