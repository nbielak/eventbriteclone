
# EventBrite Schema

## Users
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|id              |integer   | not null, unique, primary
|email           |string    | not null, unique, idx
|password digest |string    | not null
|session token   |string    | not null, unique, idx
|created at      |datetime  | not null
|updated at      |datetime  | not null

## Events
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|id              |integer   | not null, unique, primary
|title           |string    | not null, idx
|description     |string    | not null
|user_id         |integer   | not null, idx, foreign key
|created at      |datetime  | not null
|updated at      |datetime  | not null

## Tickets
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|id              |integer   | not null, unique, primary
|event_id        |integer   | not null, idx, foreign key
|user_id         |integer   | not null, idx, foreign key
|created at      |datetime  | not null
|updated at      |datetime  | not null

## Likes
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|id              |integer   | not null, unique, primary
|event_id        |integer   | not null, idx, unique, foreign key
|user_id         |integer   | not null, idx, unique, foreign key
|created at      |datetime  | not null
|updated at      |datetime  | not null

## Categories
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|id              |integer   | not null, unique, primary
|name            |string    | not null, idx
|description     |string    | not null, idx, foreign key
|created at      |datetime  | not null
|updated at      |datetime  | not null

## Event Categories
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|id              |integer   | not null, unique, primary
|event_id        |integer   | not null, idx, unique, foreign key
|category_id     |integer   | not null, idx, unique, foreign key
|created at      |datetime  | not null
|updated at      |datetime  | not null


## Event Saves/Bookmark
|Col Name    |Data Type |Details
|----------------|:--------:|:-------------------------:|
|id              |integer   | not null, unique, primary
|event_id        |integer   | not null, idx, unique, foreign key
|category_id     |integer   | not null, idx, unique, foreign key
|created at      |datetime  | not null
|updated at      |datetime  | not null
