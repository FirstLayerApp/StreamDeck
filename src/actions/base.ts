import { SingletonAction, KeyDownEvent, WillAppearEvent, WillDisappearEvent } from '@elgato/streamdeck'
import { sendCommand, getStatus } from '../client.js'
import { register, unregister } from '../poller.js'
import type { Status } from '../client.js'

export abstract class ToggleAction extends SingletonAction {
  abstract readonly command:   string
  abstract readonly statusKey: keyof Status

  private pollEntry: ReturnType<typeof register> | null = null

  async onKeyDown(ev: KeyDownEvent): Promise<void> {
    await sendCommand(this.command)
    const status = await getStatus()
    if (status) await ev.action.setState(status[this.statusKey] ? 1 : 0)
  }

  async onWillAppear(ev: WillAppearEvent): Promise<void> {
    const status = await getStatus()
    if (status) await ev.action.setState(status[this.statusKey] ? 1 : 0)
    this.pollEntry = register(ev.action as { setState(s: 0|1): Promise<void> }, this.statusKey)
  }

  async onWillDisappear(_ev: WillDisappearEvent): Promise<void> {
    if (this.pollEntry) {
      unregister(this.pollEntry)
      this.pollEntry = null
    }
  }
}
