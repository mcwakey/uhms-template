import { Modal, Offcanvas } from 'bootstrap'

export function getOrCreateModal(element: Element): Modal {
  return Modal.getInstance(element) ?? new Modal(element)
}

export function showModalById(id: string): Modal | null {
  const el = document.getElementById(id)
  if (!el) return null
  const modal = getOrCreateModal(el)
  modal.show()
  return modal
}

export function hideModalById(id: string): Modal | null {
  const el = document.getElementById(id)
  if (!el) return null
  const modal = Modal.getInstance(el)
  modal?.hide()
  return modal ?? null
}

export function getOrCreateOffcanvas(element: Element): Offcanvas {
  return Offcanvas.getInstance(element) ?? new Offcanvas(element)
}

export function getOffcanvasInstance(element: Element): Offcanvas | null {
  return Offcanvas.getInstance(element)
}

export function showOffcanvasById(id: string): Offcanvas | null {
  const el = document.getElementById(id)
  if (!el) return null
  const instance = getOrCreateOffcanvas(el)
  instance.show()
  return instance
}

export function hideOffcanvasById(id: string): Offcanvas | null {
  const el = document.getElementById(id)
  if (!el) return null
  const instance = Offcanvas.getInstance(el)
  instance?.hide()
  return instance ?? null
}
