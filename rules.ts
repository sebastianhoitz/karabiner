import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      {
        type: "basic",
        description: "Disable CMD + Tab to force Hyper Key usage",
        from: {
          key_code: "tab",
          modifiers: {
            mandatory: ["left_command"],
          },
        },
        to: [
          {
            key_code: "tab",
          },
        ],
      },
    ],
  },
  ...createHyperSubLayers({
    // o = "Open" applications
    o: {
      b: app("Brave Browser"),
      r: app("Reflect"),
      v: app("Cursor"),
      m: app("Spotify"),
      n: app("Linear"),
      s: app("Slack"),
      w: app("WhatsApp"),
      p: app("1Password"),
      t: app("iTerm"),
      i: app("Insomnia"),
      x: app("Microsoft Excel"),
      // open calendar
      // c: open("https://calendar.google.com/calendar/u/1/r/week"),
      c: app("Notion Calendar"),
      // open daily
      d: open("https://meet.google.com/nqa-csfc-wbk?authuser=0&pli=1"),
      // // Open todo list managed via *H*ypersonic
      // h: open(
      //   "notion://www.notion.so/graphcdn/7b33b924746647499d906c55f89d5026?v=7f9a78e5477d40088f54bdbaf212f304"
      // ),
      // z: app("zoom.us"),
    },

    // w = "Window" via rectangle.app
    w: {
      // h: {
      //   description: "Window: Hide",
      //   to: [
      //     {
      //       key_code: "h",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
      m: {
        description: "Window: Center half",
        to: [
          // {
          //   key_code: "u",
          //   modifiers: ["right_option", "right_control"],
          // },
          {
            shell_command:
              'open -g "rectangle://execute-action?name=center-half"',
          },
        ],
      },
      y: {
        description: "Window: First Fourth",
        to: [
          // {
          //   key_code: "y",
          //   modifiers: ["right_option", "right_control"],
          // },
          {
            shell_command:
              'open -g "rectangle://execute-action?name=first-fourth"',
          },
        ],
      },
      o: {
        description: "Window: Last Fourth",
        to: [
          // {
          //   key_code: "i",
          //   modifiers: ["right_option", "right_control"],
          // },
          {
            shell_command:
              'open -g "rectangle://execute-action?name=last-fourth"',
          },
        ],
      },
      h: {
        description: "Window: First Third",
        to: [
          // {
          //   key_code: "d",
          //   modifiers: ["right_option", "right_control"],
          // },
          {
            shell_command:
              'open -g "rectangle://execute-action?name=first-third"',
          },
        ],
      },
      l: {
        description: "Window: Last Third",
        to: [
          // {
          //   key_code: "g",
          //   modifiers: ["right_option", "right_control"],
          // },
          {
            shell_command:
              'open -g "rectangle://execute-action?name=last-third"',
          },
        ],
      },
      j: {
        description: "Window: Left Half",
        to: [
          // {
          //   key_code: "left_arrow",
          //   modifiers: ["right_option", "right_control"],
          // },
          {
            shell_command:
              'open -g "rectangle://execute-action?name=left-half"',
          },
        ],
      },
      k: {
        description: "Window: Right Half",
        to: [
          // {
          //   key_code: "right_arrow",
          //   modifiers: ["right_option", "right_control"],
          // },
          {
            shell_command:
              'open -g "rectangle://execute-action?name=right-half"',
          },
        ],
      },
      f: {
        description: "Window: Full Screen",
        to: [
          {
            shell_command: 'open -g "rectangle://execute-action?name=maximize"',
          },
        ],
        // to: [
        //   {
        //     key_code: "up_arrow",
        //     modifiers: ["right_control", "right_option"],
        //   },
        // ],
      },
      u: {
        description: "Window: Previous Tab",
        to: [
          {
            key_code: "left_arrow",
            modifiers: ["right_command", "right_option"],
          },
        ],
      },
      i: {
        description: "Window: Next Tab",
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["right_command", "right_option"],
          },
        ],
      },
      n: {
        description: "Window: Next Window",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_option"],
          },
        ],
      },
      d: {
        description: "Window: Next display",
        to: [
          // {
          //   key_code: "right_arrow",
          //   modifiers: ["right_control", "right_option", "right_command"],
          // },
          {
            shell_command:
              'open -g "rectangle://execute-action?name=next-display"',
          },
        ],
      },
      // b: {
      //   description: "Window: Back",
      //   to: [
      //     {
      //       key_code: "left_arrow",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
      // // Note: No literal connection. Both f and n are already taken.
      // m: {
      //   description: "Window: Forward",
      //   to: [
      //     {
      //       key_code: "right_arrow",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
    },

    // d = "digits"
    d: {
      j: {
        to: [
          {
            key_code: "9",
            modifiers: ["left_shift"],
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "0",
            modifiers: ["left_shift"],
          },
        ],
      },
      u: {
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["left_shift"],
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["left_shift"],
          },
        ],
      },
      m: {
        to: [
          {
            key_code: "open_bracket",
          },
        ],
      },
      comma: {
        to: [
          {
            key_code: "close_bracket",
          },
        ],
      },
    },

    // s = "System"
    s: {
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      // lock screen
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      e: {
        to: [
          {
            // Emoji picker
            key_code: "spacebar",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      // Turn on Elgato KeyLight
      y: {
        to: [
          {
            shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 50, "temperature": 175 } ] }' http://192.168.8.84:9123/elgato/lights`,
          },
        ],
      },
      h: {
        to: [
          {
            shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 50, "temperature": 175 } ] }' http://192.168.8.84:9123/elgato/lights`,
          },
        ],
      },
    },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      // delete whole word to the left
      y: {
        to: [{ key_code: "delete_or_backspace", modifiers: ["right_option"] }],
      },
      // delete whole word to the right
      o: {
        to: [{ key_code: "delete_forward", modifiers: ["right_option"] }],
      },
      // move word left
      u: {
        to: [{ key_code: "left_arrow", modifiers: ["right_option"] }],
      },
      // move word right
      i: {
        to: [{ key_code: "right_arrow", modifiers: ["right_option"] }],
      },
      // move to beginning of line
      g: {
        to: [{ key_code: "home" }],
      },
      // move to end of line
      semicolon: {
        to: [{ key_code: "end" }],
      },
    },
  }),
  {
    description: "Change hyper key to left_command",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "t",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        to: [
          {
            key_code: "t",
            modifiers: ["left_command"],
          },
        ],
      },
      {
        type: "basic",
        from: {
          key_code: "w",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        to: [
          {
            key_code: "w",
            modifiers: ["left_command"],
          },
        ],
      },
      {
        type: "basic",
        from: {
          key_code: "c",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        to: [
          {
            key_code: "c",
            modifiers: ["left_command"],
          },
        ],
      },
    ],
  },
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
