import { Outlet, Navigate } from 'react-router-dom';
import UserCartDetailsPage from '../pages/user/UserCartDetailsPage';
import UserChatComponent from './user/UserChatComponent';

const ProtectedRoutesComponent = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent /> <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutesComponent;


/* Please tell me if I have the flow of the app right so far. Also, please 
correct my technical communication — I want it to be as precise as possible.
App.jsx is essentially functioning as my routes directory/setup (what's the 
proper name) for my entire app. It's where all the routes are defined. Some
routes are wrapped in a wrapper, i.e., (is this a proper use of i.e.?) 
ProtectedroutesComponent. Presumably, this wrapper exists ultimately to 
verify that the person trying to access the routes contained within the 
wrapper has the proper credentials. So, App.jsx renders 
ProtectedRoutesComponent and passes it a prop (is it a prop?) of 
admin={false}. Currently, if I understand this correctly, the boolean is 
hardcoded, but the intention is that later it'll be dynamically or progromattically
generated (is that correct?). Inside ProtectedRoutes component, we destructure
the admin prop. Basically, within the component, we have a conditional 
statement asking if the routes being accessed are indeed protected or not, 
and then depending on the answer, we either grant access to the desired route
or we re-route them to them to the /login page. I'm not sure what the Outlet
component does. But if access is granted we render the UserChatComponent. 

Now, within UserChatComponent, we're rendering a chat component, as indicated 
by the component's name. The way we're doing that is by creating a dynamic 
input that responds to state based upon CSS styling. In other words, depending 
on whether or not the input element (is it an element?) is checked or not, 
the label renders one of two Bootstrap icons, indicating whether or not the 
chat is open or closed. When the chat is open, you see a header at the top
of the chat that reads "Let's chat - Online". This exists primarily as an
additional indicator that the chat is live. Then, there's a div that 
progromatically renders another div containing an array of the history of
the chat. Lastly, there's a text area within which to type and a submit button.
*/

/* It appears that the guy doing the tutorial has 
created two user directories, one within the components 
directory, and another within the pages directory. Is
that typical? It seems a bit confusing to me to have 
two identically named directories, even if they're located
in different areas of the folder structure (is it technically
called the folder structure?).  */