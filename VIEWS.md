# Dashboard
   - `/` 
   includes:
   - statistic of day order (remote and local order)
   - list of reservation and event planned today
   
# Login
  `/login`
  includes:
  - input for login and passwords
  - button for login (link to dashboard)

# View of tables available
  `/tables` - all tables available
  includes:
  - date and hour selector
  - table with list of reservation and event
    - each colum will be each table
    - each row will be block of 30 minutes time
    - it should look like week view in google calendar, instead days it should be tables
    - after click on reservation or event open detail view. 
  `/tables/booking/:id` - reservation detail view and modification
  includes:
  - all booking information
  - must allow edit and save change
  `/tables/booking/new` - add new reservation
  includes:
  - analogous to the previous one but without start data
  `/tables/events/:id` - event and cyclic event detail view and modification
    includes:
  - analogous to the previous one but for event
  `/tables/events/new` - and new event
  includes:
  - analogous to the previous one but for event and without start data

# View waiter
  `/waiter` - list of tables with it state. (order submitted, paid etc.)
  includes:
  - table with in rows tables in columns set of information (state, last state time)
  - at last column action for tables (change table state, open order detail etc.)
  `/waiter/order/new` - add order with ability choosing products
  includes:
  - table number (editable)
  - menu of product
  - detail option of chosen product
  - order with details: includes products with it options and prices 
  - total order price
  `/waiter/order/:id` - order detail 
  includes:
  - analogous to the previous one but with previous save information

# View kitchen
  `/kitchen` - view with order list.
  - list of orders sort by ordering time
  - list should contain: 
    - table number or number of remote order
    - and all detail information about ordered dishes
  - ability to mark order as done

