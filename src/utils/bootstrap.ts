type BootstrapGlobal = {
  Modal?: any
  Offcanvas?: any
  Tooltip?: any
}

export function getBootstrap(): BootstrapGlobal | null {
  const w = window as any
  return (w?.bootstrap ?? w?.Bootstrap) || null
}

export function getOrCreateModal(element: Element) {
  const Bootstrap = getBootstrap()
  if (!Bootstrap?.Modal) return null

  const existing = Bootstrap.Modal.getInstance?.(element) || null
  return existing ?? new Bootstrap.Modal(element)
}

export function showModalById(id: string) {
  const el = document.getElementById(id)
  if (!el) return null
  const modal = getOrCreateModal(el)
  modal?.show?.()
  return modal
}

export function hideModalById(id: string) {
  const el = document.getElementById(id)
  if (!el) return null
  const modal = getOrCreateModal(el)
  modal?.hide?.()
  return modal
}

export function getOffcanvasInstance(element: Element) {
  const Bootstrap = getBootstrap()
  return Bootstrap?.Offcanvas?.getInstance?.(element) || null
}

export function getOrCreateOffcanvas(element: Element) {
  const Bootstrap = getBootstrap()
  if (!Bootstrap?.Offcanvas) return null

  const existing = Bootstrap.Offcanvas.getInstance?.(element) || null
  return existing ?? new Bootstrap.Offcanvas(element)
}

export function hideOffcanvasById(id: string) {
  const el = document.getElementById(id)
  if (!el) return null
  const instance = getOffcanvasInstance(el)
  instance?.hide?.()
  return instance
}

export function showOffcanvasById(id: string) {
  const el = document.getElementById(id)
  if (!el) return null
  const instance = getOrCreateOffcanvas(el)
  instance?.show?.()
  return instance
}
