# Bikes Front-end Application
## Assumptions
* React and Redux were the desired stack
* The use case would not be requiring mobile-first design
* I am not expected to spend much time on this task

## Discussion
The very first thing I did was to identify this task as very similar to one I have completed in React and Redux before. Reusing code is one of the best reasons to use React. However, I hadn't visited that codebase in quite a while, so I've updated it to more modern practises in this rendition. My strong suit is not design, and since it wasn't developed with a design spec in mind, do not judge too harshly.

I am actually not sure what is meant by "custom order based on class." I implemented it as a filter instead. Selection persistence ought to be fully functional as well on reloads, etc. I used localStorage.

I absolutely would have used TDD if not for code reuse regardless of "time saved" by electing to not integrate proper unit testing. I did not use separate dev, feature branches because of the time constraint.

Ultimately, the code needs to be stress tested and be a little less brittle by handling more failure cases. Given more time, I'd improve this. I've neglected proper PropTypes for many of the components.

Interestingly enough, this is the first time I've had any issue with airbnb-eslint not working by default. That linter is critical to keeping up code cleanliness, but I didn't want to bikeshed for this task by figuring it out. Code should be kept very similar to the airbnb style anyway because of habit. Though obviously it isn't linted, so I'm probably messing up here and there... Hence the need for linting.
