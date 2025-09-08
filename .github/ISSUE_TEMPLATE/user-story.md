---
name: User Story
about: 'This tamplate define a user story '
title: ''
labels: ''
assignees: ''

---

As a gift app user
I need to search for gifts by name or keyword
So that I can quickly find items that match what I’m looking for

Details and Assumptions

The search should query the gifts collection in MongoDB

It should support partial matches (e.g., typing "Flo" should find "Flowers")

If no results are found, the app should return a 404 Not Found response

Acceptance Criteria

Given the gift database has entries like "Flowers" and "Frame"  
When I search for "Flo"  
Then I should see "Flowers" in the results  

Given the gift database has no entry starting with "X"  
When I search for "Xylophone"  
Then I should get a 404 response

Tasks

[ ] Add search endpoint to the back-end (/gifts?name=)

[ ] Implement regex or case-insensitive search in MongoDB query

[ ] Return JSON results if matches are found[ ] Return 404 error if no matches are found

[ ] Test with Postman
