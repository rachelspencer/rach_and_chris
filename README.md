# Wedding App

I am creating this app so I can manage the RSVP list for my wedding. Once this project is completed, I intend to write developer instructions so that my repository can be cloned and used by others. The app can be used for any event that requires guests to RSVP.

### Figma designs

The wireframes for this app have been created in Figma. You can check out the Figma file [here](https://www.figma.com/design/Li7D9eRPROGDH579wWMd6A/Untitled?node-id=0-1&t=rHglycKKQAtUMqP1-1).

Design screenshots:

![Screenshot 2024-09-06 at 3 53 46 PM](https://github.com/user-attachments/assets/2be54318-774f-4b0f-b158-5058c8061ad1)
![Screenshot 2024-09-06 at 3 56 24 PM](https://github.com/user-attachments/assets/65edfb62-3b1a-48c6-b022-cd0c72ecb01c)
![Screenshot 2024-09-06 at 3 54 13 PM](https://github.com/user-attachments/assets/eb7903ac-a0b6-4a47-bade-b44084bbdeb8)
![Screenshot 2024-09-06 at 3 57 29 PM](https://github.com/user-attachments/assets/b1cee9d1-c3db-411f-b64b-0f7daa40f7e5)

### How it works

My plan is to issue each guest or family an access code. This will enable them to enter the website. This code will also ensure that the guests' names associated with this passcode are rendered on the RSVP page. The guest can then select all, decline all, or individually select which guests in their family can/cannot make it.

When the guest submits their RSVP status, a success message will confirm this on the webpage. They will also receive a confirmation in their email, as well as an email sent to me.

### Database and hosting intentions

I am using the Next.js framework, and will host through Vercel because it provides seamless integration, automatic optimizations, and a globally distributed infrastructure, ensuring fast load times and effortless deployment for my application. For the database, I want to experiment with Vercel Postgres, which offers serverless scalability, built-in integration with Vercel's platform, and a simplified developer experience with automatic handling of connections and performance optimizations.

### Clone the project locally

1. Click on the "Code" tab on this repo's "Code" page.
2. Click the green "Code" button to reveal a "Clone" popup.
3. The "HTTPS" tab should be automatically selected. If not, click "HTTPS."
4. Click the copy button to copy the url of this repository to your clipboard.
5. Open your terminal and `cd` to the directory where you want this project to live.
6. Once you have successfully navigated to the directory, run `git clone` and paste the web URL right after (copied to your clipboard in step four).
   
```
git clone https://github.com/rachelspencer/rach_and_chris.git
```

7. In the terminal, run `ls` to determine you can see all the files associated with this directory. Once you are ready to open the project run `code .`.
```
ls
```
```
code .
```
