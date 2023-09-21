# SchedulerDragDrop

This project was generated with node version 16.13.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The application will automatically reload if you change any of the source files.


## Issue
The drag and drop of events is not working properly. The mouse pointer position 
does not reflect the underlying cell and a lot of flickering can be seen at 
times. 

The problem sometimes does not occur at the page start-up/reload but will occur 
at the slight resize of the page. e.g. when opening the development tools and
doing a slight resize of the application page. What is interesting is that the 
problem can be "treated" temporarily by a another slight screen/window resize.