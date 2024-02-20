# MVC Architecture Pattern
When designing your project in NodeJs and other backend language, MVC design pattern are advised to follow. But what really is MVC patterns? Do we have to design our codebase according to certain pattern or aren't we allowed to be free and write all of them down in a single code file? 

First innovation of MVC architecture in found in SmallTalk-80 where each class and objects are assigned on the basis of task that each performs.

>The view manages the graphical and/or textual output to the portion of the bitmapped display that is allocated to its application. The controller interprets the mouse and keyboard inputs from the user, commanding the model and/or the view to change as appropriate. Finally, the model manages the behavior and data of the application domain, responds to requests for information about its state (usually from the view), and responds to instructions to change state (usually from the controller).
>
>-- <cite>[Details on MVC analysis in SmallTalk-80](https://web.archive.org/web/20120729161926/http://st-www.cs.illinois.edu/users/smarch/st-docs/mvc.html) </cite>


- Models : The model consists of application data, business rules, logic, and functions that will be performed in the data.
Every type of entry in your database is to be created as models. 
- Views: It is directly linked with UI where the changed data is to be shown to the user. 
- Controllers: It contains the application logic necessary to facilitate 
communications across the application, acting as an interface between the view and model layers.

Concerns are the different aspects of functionality that 
the software system provides. 
Separation of Concerns (SoC) is a design principle that manages complexity
by partitioning the software system so that 
each partition is responsible for a separate concern, 
minimizing the overlap of concerns as much as possible.









