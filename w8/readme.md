# **MY UNDERSTANDING**
- starting at renderTblBody
    - renderTblBody is a function 
    - inside renderTblBody we have an argument called objectCollector
    - objectCollector has data that has been passed down by start()
        - as we step in we invoke renderTblBody, therefore getting transferred to render.js file where renderTblBody() is
        - argument objectorCollector now becomes a parameter, however we reference it with the name data
        - **we first encounter TBL.innerHTML however, nothing happens as their is no data in table yet. This basically clears data off table**
        - NEXT STEP: variable tbody is created in HTML file, which is index
        - NEXT STEP: variable table is created and invokes renderTblHeading()
        - NEXT STEP: we go to renderTblHeading and no parameter is set
        - NEXT STEP: in renderTblHeading we start off by creating variables that create elements/tags in DOM. We create table, thead, and tr, respectefully variables named accordingly
        - NEXT STEP: we use attribute ".appendChild" to create structure. like add on's or making connections to. We add on/append thead to table, and then add on tr to thead. In step through it's difficult to see what's going on however we can verify add on's simply by calling it on console, their you can see structure being created as we move forward.
        - NEXT STEP:variable headingTextArr has 2 elements recognized
        - NEXT STEP: itterate through headingTextArr with .forEach method, will loop two times only as their is only 2 elements recognized
        - anonymous function is created which iterates only through elements. syntax of itteration (item, index, array) in that order
        - NEXT STEP: inside loop we create element th in dom
        - NEXT STEP: add element text in th using .textcontent
        - NEXT STEP: use appendChild to append th into tr. note tr is parent of th
        - NEXT STEP: will loop one more time as one more element is recognized. like to call it the **tri step** . create, add element text, append.
        - NEXT STEP: **return table; this is huge as this finalizes what renderTblHeading will represent. This is a very good time to check table variable and see what is inside of it. Use console and input "table" in cosole to see!!!** this creates the header
        - NEXT STEP: back to renderTblBody and we move onto next line statement which is another loop, but we loop through data/objectCollector
        - NEXT STEP: we create a row but making a variable that represents tr tag, utilizing document.createElement('tr')
        - NEXT STEP: we create a variable called nameCell that has "td" element/tag. **create element in DOM**
        - NEXT STEP: **add element VALUE** in loop however, we can more clearly specify what we want as this is an object that is being loopthrough. we can use objects keys to specifiy
        - NEXT STEP: **append** nameCell to tr (row)
        - NEXT STEP: create variable footprintCell use **tri step** technique
        - NEXT STEP: everything that is in tr append to tbody
        - NEXT STEP: EXITING LOOP; we append everything in tbody to table
        - NEXT STEP: append everything in table and append to TBL
        - NEXT STEP: return tbody: renderTblBody now represents tbody
        - NEXT STEP: FORM.RESET resets the form within DOM

### QUESTIONS and understanding:
- QUESTION: in innerHTML it gets passed when stepping through, I know this is essential because when i comment it out it will add previous data on top of recent data, so I know it clears out the previous data therefore making it look proper with header and table only. i guess my question is why does it step over innerHTML? like to me it would be nice if it gave me a hint of what it did, or something. 

- UNDERSTANDING: yes to me this is helpful everytime because i'm a beginner and the more I do this the more it sticks in my head. I don't know how many times I have broken this code apart because I wanted to further understand it, got to the point where I printed papers out and put them across my floor for I can see better whats going on. It took me time, but in doing so I understand it just that much more. 

- FEEDBACK: this is huge for me as I see i'm pretty much in par with the information given. I use to have trouble with figuring out how the thead, tr, td were all connected. Also with calling variables within scope was another thing I had trouble in outputting, however, I did figure it out but this video shows all that in detail, so muchly appreciated.



### week 8 code along
- tried by adding form from main.js and i thought that may be I can just re-enter data. also try deleting then inputting data, but thats not the point, deleting is deleting, not editing. Did try but gonna move forward.