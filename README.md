# ChristmasHatChallenge

### Christmas/Holiday Hat Challenge Page Instructions:

-- To Update the webpage info --
1. Open the assets folder
2. Find the data.json file and open it.
3. Here you'll find a data object containing an array of all the contestants.
    - Update, add and/or remove contestants in this file.
    - Both names and vote counts can be updated and the changes will be reflected on the html page.
    - Here's an example contestant object (Don't forget to add a comma between each new contestant):
```
{
  "name":   "Zed",
  "votes":  123
}
```

4. Automatic calculations
    - The totals for money collected and votes (these show in the upper right of the webpage) are automatically calculated.
    - The contestants will automatically be placed in the correct order based on their number of votes.
    - The top three show on the left and the rest of the contestants show on the right.
5. OVERRIDE for auto calculations **(Defaulted to true!)**.
    - If the values for the automatically calculated totals need to be overridden and manually entered (in case they differ), you may do so at the bottom of the data.json file.
    - Simply set the "overrideAutoCalculate" value to true and enter the totals below in the corresponding fields.
6. Updating title text.
    - This can also be done in the data.json file.
    - Find the "title" object near the bottom of the data.json file.
    - You are free to change both the year and the title text here.
7. Updating footer text.
    - Both the upper and lower footer text can be updated in the data.json file as well.
    - Find the "footerText" object and the "upper" and "lower" sub-components.
    - The strings of text directly below these sub-components are what will show up in the footer of the page.
8. Last years winner image.
    - Place the jpg image of the previous years winner in the **img** folder (replacing the one thats currently there).
    - It must be named last_years_winner.jpg or it will not work.

9. If anything breaks, let me know and I'll help you fix it!

10. Thanks and enjoy!

By: Cory Loeffelman

Link to original creator of Santa: http://codepen.io/Alireza29675/pen/KwgwMy
Link to original creator of snow effect: http://codepen.io/loktar00/pen/CHpGo
Link to original creator of Christmas lights: http://codepen.io/tobyj/pen/QjvEex

Link to React.js: https://facebook.github.io/react/
Link to webpack: https://webpack.github.io/docs/