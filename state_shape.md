```js
{
  entities {
    users {
      1: {
        id: 1,
        username: "john",
        email: john@john.com,
        eventIds: [1]
      },
      2: {
        username: "jane",
        email: jane@jane.com,
        ticketIds: [],  
      }
    },
    events {
      1: {
        id: 1,
        title: "Ice Creamfest",
        description: "Fun",
        userId: 1
      }
    },
    tickets {
      3: {
        id: 3,
        eventId: 1,
        userId: 2
      }
    },
    likes {
      id: 5,
      eventId: 1,
      userId: 2
    },
    categories {
      id: 1,
      name: "wholesome",
      description: "family-fun"
    },
    eventCategories {
      id: 1,
      eventId: 1,
      categoryId: 1
    },
    eventSaves {
      id: 3,
      eventId: 1,
      userId: 2
    }
  }
}
```js
