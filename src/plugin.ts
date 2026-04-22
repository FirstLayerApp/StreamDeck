import streamDeck from '@elgato/streamdeck'
import {
  ToggleToolbarAction,
  ToggleChatAction,
  TogglePulseAction,
  ToggleActivitiesAction,
  ToggleSmartGroupingAction,
  TogglePriorityFeedAction,
  ToggleCcAction,
  ToggleEditModeAction,
  ToggleClickThroughAction,
  OpenAppAction,
  SessionMarkerAction,
} from './actions/index.js'

streamDeck.actions.registerAction(new ToggleToolbarAction())
streamDeck.actions.registerAction(new ToggleChatAction())
streamDeck.actions.registerAction(new TogglePulseAction())
streamDeck.actions.registerAction(new ToggleActivitiesAction())
streamDeck.actions.registerAction(new ToggleSmartGroupingAction())
streamDeck.actions.registerAction(new TogglePriorityFeedAction())
streamDeck.actions.registerAction(new ToggleCcAction())
streamDeck.actions.registerAction(new ToggleEditModeAction())
streamDeck.actions.registerAction(new ToggleClickThroughAction())
streamDeck.actions.registerAction(new OpenAppAction())
streamDeck.actions.registerAction(new SessionMarkerAction())

streamDeck.connect()
