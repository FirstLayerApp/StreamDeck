import { getStatus } from './client.js'
import type { Status } from './client.js'

interface Settable {
  setState(state: 0 | 1): Promise<void>
}

type Entry = { action: Settable; statusKey: keyof Status }

const entries = new Set<Entry>()
let running = false

function start(): void {
  if (running) return
  running = true
  setInterval(async () => {
    if (entries.size === 0) return
    const status = await getStatus()
    if (!status) return
    for (const { action, statusKey } of entries) {
      await action.setState(status[statusKey] ? 1 : 0)
    }
  }, 2000)
}

export function register(action: Settable, statusKey: keyof Status): Entry {
  const entry = { action, statusKey }
  entries.add(entry)
  start()
  return entry
}

export function unregister(entry: Entry): void {
  entries.delete(entry)
}
