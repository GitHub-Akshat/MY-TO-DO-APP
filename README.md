## ToDo App

This project contains a simple TO-DO application . 
It has the following features-

- Anyone can create a todo.
- Anyone can see their existing todos.
- Anyone can mark a todo as done.

<!-- 

md = mark down 

Step 1.  =>  MAKE A README.md 
FILE ##TITLE NAME 
AND SOME BUNCH OF DESCRIPTIONS

STEP 2.  =>  START WITH THE BACKEND FIRST, MAKE SEPERATE FOLDER FOR BACKEND

INSIDE THE BACKEND FOLDER ->

STEP 3.  =>   FIRSTLY WE NEED TO CREATE/INITIALISE PACKAGE.JSON FOR THIS 
 USE "NPM INIT"  ->  IT WILL ASK SOME QUESTION ANSWER IT NAME YOUSELF AS THE AUTHOR
OTHERWISE U CAN USE "NPM INIT -Y" IT WILL AUTOMATICALLY ANSWER ALL QUESTIONS

STEP 4.  =>  INSTALL EXPRESS USING "NPM INSTALL EXPRESS" YOU WILL SEE DEPENDENCIES SECTION OF PACKAGE.JSON FILE WILL HAVE EXPRESS IN IT. WHEN WE USE "NPM INSTALL {..SOMETHING..} PACKAGE-LOCK.JSON & NODE_MODULES FOLDER GET CREATED AUTOMATICALLY WHICH HAVE ALL THE EXTERNAL LIBRARIES WHICH WE MIGHT NEED WE CAN ALSO DO "NPM INSTALL" ONLY, FOR THE SAME FOLDER TO GET CREATED. (WHEN WE MADE FRONTEND FIRST USING REACT WE DID THIS)

PACKAGE-LOCK.JSON => Contains locked versions of all libraries used so that for a particular project all members are on same versions.PACKAGE.JSON has `(tilda) sign against versions for updating the version but lock file has exact same version it is working on. 
1.0.0   is called Semantic Versioning 
(Major Version : Minor Version : Patch Version)

STEP 5.  =>  WHEN WE PASS OUR PROJECT TO
SOMEONE WE DON'T SEND THEM NODE_MODULES FOLDER. THEY TAKE THE FILES WITHOUT THE FOLDER AND RUN "NPM INSTALL COMMAND IN THEIR SYSTEM WHICH READS THE PACKAGE.JSON FILES DEPENDENCIES AND INSTALL THE NODE_MODULES FOLDER.

STEP 6.  =>  WE CREATE EXPRESS SERVER WITH ITS BOILERPLATE CODE AND ALL ENDPOINTS IN INDEX.JS FILE.

STEP 7.  =>  ZOD FOR INPUT VALIDATION/VERIFICATION IN TYPES.JS FILE WITH EXPORT CODE AS WELL

STEP 8.  =>  FOR DATABASE WE MAKE DB.JS FILE AND ON TERMINAL USE "NPM INSTALL MONGOOSE" , THE DEPENDENCIES WILL HAVE A ADDITION AND THIS IS ALL HAPPENING INSIDE BACKEND FOLDER.

STEP 9.  =>  WE DON'T DO THIS IN PROFESSIONAL WORLD WE CREATE A .ENV FILE FOR IT. FOR NOW DB.JS IS CORRECT. EXPORT IT IN THE END TO BE USED IN ORIGINAL INDEX.JS FILE.

STEP 10.  =>  AFTER ADDING DATA TO DATABASE, GIVING USER DATA FROM DATABASE & UPDATING DATA. U CAN CHECK THE BACKEND BY POSTMAN. AND HERE YOUR BACKEND CODE IS OVER. OBVIOUSLY THERE WILL BE SOME ERRORS WHICH WILL GET FIXED EVENTUALLY BY POSTMAN CHECK OR SOMEWHERE ELSE. 

BONUS STEP  =>  SINCE WE MADE BACKEND SERVER ON LOCALHOST:3000 AND FRONTEND ON LOCALHOST:5173 WHEN WE APPROCH OUR BACKEND WITH THE FRONTEND END SERVER WE WILL GET A CORS ERROR TO REMOVE IT WE NEED TO USE "NPM INSTALL CORS" IN BACKEND FOLDER THEN IN INDEX.JS FILE LOAD IT AND USE IT AS DONE.

STEP 11.  =>  CREATE A FRONTEND FOLDER

STEP 12.  =>  IN TERMINAL USE "NPM CREATE VITE@LATEST" , NAME THE PROJECT AND PACKAGE AS FRONTEND SELECT REACT AND JS.
NOW USE "NPM INSTALL" TO GET THE NODE_MODULES FOLDER.

INSIDE THE FRONTEND FOLDER ->

STEP 13.  =>  REMOVE THE PART INSIDE APP.JSX IN APP FUNCTION CREATE A DIV AND WRITE "HI" TO SEE IF IT IS RENDERING OR NOT RENDERING HAPPENS INSIDE APP.JSX APP FUNCTION

STEP 14. =>  CREATE A FOLDER NAME COMPONENTS AND MAKE ALL COMPONENTS U WILL NEED IN THIS PROJECT COMPONENT_NAME.JSX AND EXPORT IT, SO THAT APP.JSX FILE CAN IMPORT IT.

STEP 15.  =>  WE KNOW THERE ARE 3 THINGS IN REACT ( STATE , COMPONENT , RE-RENDERING ). WE RENDER THE COMPONENT INSIDE APP.JSX APP FUNCTION, WE CAN ALSO DECLARE STATES IN IT AND COMPONENTS WE MAKE IN COMPONENTS FOLDER.

STEP 14.  =>  TO GET DATA FROM DATABASE VIA BACKEND TO FRONTEND WE CAN USE FETCH BUT IT IS BAD PRACTISE. IT SENDS INFINITE FETCH REQUESTS FOR THIS WE NEED useEffect HOOK OF REACT JUST LIKE useState IS A REACT HOOK

STEP 15.  => FACED SOME ERRORS IN TODOS.JSX
1.  MAP IT SAID PROP-TYPE NEEDED &
2.  DIV IT SAID KEY REQUIRED 

STEP 16.  =>  FOR POSTING TODOS FROM FRONTEND TO BACKEND WE WILL DO THE FETCH CALL IN CREATETODO.JSX FILE IN THAT WE WILL NEED 

fetch ("LINK" , method : "POST" , body:{  })

THIS BODY CAN BE PASSED AS DOCUMENT.GETELEMENTBYID().INNERHTML BUT NEED TO CHANGE THIS THAT'S WHY WE CAME TO REACT SO THE MOST OPTIMAL WAY IS REACT-QUERY BUT MOST WIDELY USED IS TO CREATE A LOCAL STATE OF THE VARIABLE INSIDE THE BODY AND CONTINUE FROM THERE, BUT THIS APPROACH RE-RENDERS IT EVERYTIME, BUT WE NEED TO MINIMIZE THE AMOUNT OF RE-RENDERS AS REACT DEVELOPERS.

STEP 17.  =>  WE NEED TO GET THE TODOS ON SCREEN WITH BUTTON TO MARK AS COMPLETE 

STEP 18.  =>  IN TODOS.JSX WE USED CHATGPT CODE THE COMMENTED CODE IS ORIGINAL IT NEEDED SOME FIXING.

THANKS.
--> 