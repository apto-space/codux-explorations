import { createMachine } from "xstate";

export const machine = createMachine(
  {
    id: "Events",
    initial: "Events tab opened",
    states: {
      "Events tab opened": {
        on: {
          "already joined events": {
            target: "My events list (join event + update my profile",
          },
          "no events joined yet": {
            target: "View: join event only (onboarding)",
          },
          "Create event button clicked": {
            target: "Create Event Form",
          },
        },
      },
      "My events list (join event + update my profile": {
        on: {
          "join event button clicked": {
            target: "View: join event only (onboarding)",
          },
          'User clicked "update my profile"': {
            target: "Edit User profile (popup / non-blocking)",
          },
          "User clicked on event in list": {
            target: "Event details page",
          },
        },
      },
      "View: join event only (onboarding)": {
        on: {
          "enter code": {
            target: "View: join event only (onboarding)",
          },
          "submit code": {
            target: "check event existence and user profile completeness",
          },
        },
      },
      "Create Event Form": {
        on: {
          "Event 1": {
            target: "Event Dashboard + QR + CODE",
          },
        },
      },
      "Edit User profile (popup / non-blocking)": {
        on: {
          "Profile saved": {
            target: "My events list (join event + update my profile",
          },
        },
      },
      "Event details page": {
        on: {
          "Back to events button clicked": {
            target: "My events list (join event + update my profile",
          },
        },
      },
      "check event existence and user profile completeness": {
        on: {
          "event not found": {
            target: "View: join event only (onboarding)",
          },
          "profile incomplete": {
            target: "Edit User profile (full page)",
          },
          "Profile complete & Event found": {
            target: "Event details page",
          },
        },
      },
      "Event Dashboard + QR + CODE": {
        on: {
          "Member view cliecked": {
            target: "Event details page",
          },
        },
      },
      "Edit User profile (full page)": {
        on: {
          confirm: {
            target: "Event details page",
          },
        },
      },
      "New state 1": {
        history: "shallow",
        type: "history",
      },
    },
    on: {
      "Event 1": {
        target: "#Events",
      },
    },
    types: {
      events: {} as
        | { type: "Event 1" }
        | { type: "confirm" }
        | { type: "enter code" }
        | { type: "submit code" }
        | { type: "Profile saved" }
        | { type: "event not found" }
        | { type: "profile incomplete" }
        | { type: "Member view cliecked" }
        | { type: "no events joined yet" }
        | { type: "already joined events" }
        | { type: "join event button clicked" }
        | { type: "USER_ALREADY_JOINED_EVENTS" }
        | { type: "Create event button clicked" }
        | { type: "Back to events button clicked" }
        | { type: "User clicked on event in list" }
        | { type: "Profile complete & Event found" }
        | { type: 'User clicked "update my profile"' },
    },
  },
  {
    actions: {},
    actors: {},
    guards: {},
    delays: {},
  },
);