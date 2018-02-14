const parts = [
  {
    id: 1,
    description: "Part One" ,
    attachments: [
      {
        name: "part one - attachment one",
        sizes: [
          {
            '2.25': { price: 10.99 }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    description: "Part Two",
    attachments: [
      {
        name: "part two - attachment one",
        sizes: [
          {
            '1.5': { price: 5.49 }
          },
          {
            '2.5': { price: 7.99 }
          },
          {
            '1.25': { price: 2.49 }
          }
        ]
      }
    ]
  },
  {
    id: 3,
    description: "Part Three",
    attachments: [
      {
        name: "part three - attachment one",
        sizes: [
          {
             '2.75': { price: 9.99 }
          }
        ]
      }
    ]
  },
  {
    id: 4,
    description: "Part Four",
    attachments: [
      {
        name: "part four - attachment one",
        sizes: [
          {
            '2.5': { price: 8.49 }
           }
        ]
      },
      {
        name: "part four - attachment two",
        sizes: [
          {
            '1.75': { price: 6.99 }
          }
        ]
      },
      {
        name: "part four - attachment three",
        sizes: [
          {
            '1.5': { price: 5.99 }
          },
          {
            '2': { price: 3.49 }
          }
        ]
      }
    ]
  }
]

export {parts}
