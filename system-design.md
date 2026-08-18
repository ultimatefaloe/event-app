## Plan completion of Event App

- landing page
- edit event
- home to disolay all event
- event will change to my events
- RBAC for event ( only authenticated user and right owner to an event can delete or modify the event)
- profile/account for authenticated user (dedicated page for account)
- create sidebar for mobile and improve responsiveness
- 

### Your features
- search (event name) (add 3s debounce optional)
- filter ( date, status, location ) ( reuseable filter component)
- slug [ grouping event base on category ] ( dedicated page)
- home page will a carosel with scroll-x-auto ( list all the categegories available) -> event/:[slug]


### Event creation
- userId ( session.id, )
- create slug for event category ( glug must be lower case, use category name for slug ), and add it to data be save together with the event data

### Acoount/profile page
- Edit personal details
- delete account
- change password
- basic statistics


## Structure of Execution
- creating page
- adding business logic
- component creation

## list ut
- account page
- home page
- event category page
- dal update
- compoonents