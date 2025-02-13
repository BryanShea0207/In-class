### Vue
Vue is fundamentally different the Javascript and Jquery  

MV* pattern is a family of patterns

MVC (Model view control) pattern an early member of the MV* Family 

Vue follows MVVM pattern (Model view view model) react uses its own pattern but it is similar 

Separation of concerns, just following these patterns does not ensure clean code.

Spaghetti code is to be avoided applications that grow quickly if not careful and thought out every part becomes interconnected 

"Each piece of code should do its own thing well and interact very little"

reliance of code should only go in one direction 
    if a piece of code calls another piece of code it should never loop back to the original method 

full stack programming is often called 3-tier programming (front-end, back-end, Database) this is MVC 

Vue is the front end 

Server will be MVC and client will be MVVM 

Typescript files will be the server and will not need to use Vue and should be compatible with React

outside communication should only happen in the model 

The Vue model should only change itself or interact with the model 

The model knows about itself
The Vue model knows about itself and the model 

### The progressive JavaScript Model

Vue can be added to a system piece by piece 

#### Framework vs Library

A Library is a piece of code the provides functionality that an application can use

A Framework is similar to a Library but structures the code 

"You call the code in the Library the Framework calls your code"

Vue has two diffrent versions one for modules one without

const app = createApp({
    setup() {
        const notification = ref([
            'This is a primary notification #1', 
            'This is a primary notification #2',
            'This is a primary notification #3',
            'This is a warning notification #4',
        ]);
      
        const removeNotification = (index) => {
            notification.value.splice(index, 1);
        };

        return { notification, removeNotification };
    }
})     

{} <= means object
[] <= means array

Mount means to bind something to a tag

{{ JavaScript }} is output

variables that will be tracked go in a ref
