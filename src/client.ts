const BASE = 'http://127.0.0.1:57432'

export interface Status {
  toolbar:        boolean
  chat:           boolean
  pulse:          boolean
  activities:     boolean
  cc:             boolean
  smart_grouping: boolean
  priority_feed:  boolean
  edit_mode:      boolean
  click_through:  boolean
  session_active: boolean
}

export async function sendCommand(command: string): Promise<boolean> {
  try {
    const res = await fetch(`${BASE}/action`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ command }),
    })
    return res.ok
  } catch {
    return false
  }
}

export async function getStatus(): Promise<Status | null> {
  try {
    const res = await fetch(`${BASE}/status`)
    if (!res.ok) return null
    return res.json() as Promise<Status>
  } catch {
    return null
  }
}
