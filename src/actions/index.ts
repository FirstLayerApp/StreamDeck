import { action, SingletonAction, KeyDownEvent } from '@elgato/streamdeck'
import { sendCommand } from '../client.js'
import { ToggleAction } from './base.js'

@action({ UUID: 'com.firstlayer.overlay.toggle-toolbar' })
export class ToggleToolbarAction extends ToggleAction {
  readonly command   = 'toggle_toolbar'
  readonly statusKey = 'toolbar' as const
}

@action({ UUID: 'com.firstlayer.overlay.toggle-chat' })
export class ToggleChatAction extends ToggleAction {
  readonly command   = 'toggle_chat'
  readonly statusKey = 'chat' as const
}

@action({ UUID: 'com.firstlayer.overlay.toggle-pulse' })
export class TogglePulseAction extends ToggleAction {
  readonly command   = 'toggle_pulse'
  readonly statusKey = 'pulse' as const
}

@action({ UUID: 'com.firstlayer.overlay.toggle-activities' })
export class ToggleActivitiesAction extends ToggleAction {
  readonly command   = 'toggle_activities'
  readonly statusKey = 'activities' as const
}

@action({ UUID: 'com.firstlayer.overlay.toggle-smart-grouping' })
export class ToggleSmartGroupingAction extends ToggleAction {
  readonly command   = 'toggle_smart_grouping'
  readonly statusKey = 'smart_grouping' as const
}

@action({ UUID: 'com.firstlayer.overlay.toggle-priority-feed' })
export class TogglePriorityFeedAction extends ToggleAction {
  readonly command   = 'toggle_priority_feed'
  readonly statusKey = 'priority_feed' as const
}

@action({ UUID: 'com.firstlayer.overlay.toggle-cc' })
export class ToggleCcAction extends ToggleAction {
  readonly command   = 'toggle_cc'
  readonly statusKey = 'cc' as const
}

@action({ UUID: 'com.firstlayer.overlay.toggle-edit-mode' })
export class ToggleEditModeAction extends ToggleAction {
  readonly command   = 'toggle_edit_mode'
  readonly statusKey = 'edit_mode' as const
}

@action({ UUID: 'com.firstlayer.overlay.toggle-click-through' })
export class ToggleClickThroughAction extends ToggleAction {
  readonly command   = 'toggle_click_through'
  readonly statusKey = 'click_through' as const
}

// ── Momentary actions (no on/off state) ──────────────────────────────────────

@action({ UUID: 'com.firstlayer.overlay.open-app' })
export class OpenAppAction extends SingletonAction {
  async onKeyDown(_ev: KeyDownEvent): Promise<void> {
    await sendCommand('open_app')
  }
}

@action({ UUID: 'com.firstlayer.overlay.session-marker' })
export class SessionMarkerAction extends SingletonAction {
  async onKeyDown(_ev: KeyDownEvent): Promise<void> {
    await sendCommand('session_marker')
  }
}
