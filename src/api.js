const API_BASE = import.meta.env.VITE_API_BASE || 'https://animal-adoption-backend-si97.onrender.com/api'

export async function fetchAnimals(species = 'all') {
  const url = species === 'all'
    ? `${API_BASE}/animals`
    : `${API_BASE}/animals?species=${encodeURIComponent(species)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch animals')
  return res.json()
}

export async function fetchAnimal(id) {
  const res = await fetch(`${API_BASE}/animals/${id}`)
  if (!res.ok) throw new Error('Animal not found')
  return res.json()
}

export async function submitAdoption(data) {
  const res = await fetch(`${API_BASE}/adoptions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const body = await res.json()
  if (!res.ok) throw new Error(body.error || 'Failed to submit adoption request')
  return body
}
