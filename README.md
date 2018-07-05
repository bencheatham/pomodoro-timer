# Pomodoro Timer with Todos

A live demo version can be found at https://pomodor-timer.firebaseapp.com/

# Overview
This pomodoro timer will follows the classic pattern of 4 rounds of 25 minutes with a 3-5 minute break and then after 4 rounds a
break of 15-30 minutes. A task list is also be available for tracking the work that needs
to be completed.

This application is a single user application and information does not need to be shared with anyone
else.

Also, state does not persist beyond a signle user session.

The application is meant to be viewed in a modern web browser.

This application satifies the following user stories:

| # | User Story |
| --------- | ------- | 
| 1 | As a user, I must be able to easily start the timer. |
| 2 | As a user, I must be alerted when there is no more time left on the timer. |
| 3 | As a user, I may be able to view the remaining time of the timer. |
| 4 | As a user, I must be able to add an item to a todo list. |
| 5 | As a user, I must be able to complete an item on a todo list. |

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To start the app, first run:
`npm install`

Then run
`npm run start`

### Testing

`npm run test`

### Type Checking with Flow

`npm run flow`


### Notes

The chosen alert is `window.alert`.  This is intentionally chosen for its invasiveness, because it intuitively seems that a strict pomodoro timer should be invasive to your current tasks, in order to truly ensure of awareness that the interval is expired.

