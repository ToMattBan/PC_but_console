# Playnite as a Game Station Tutorial

## The guide is better when it's read here on notion [here](https://shiny-cafe-bdd.notion.site/Playnite-as-a-Game-Station-Tutorial-7564a4e7bf8d468f947777a7912a7a58)


## Index

[0 - Introduction](#0---introduction) 

[1 - Softwares](#1---softwares) 

[1.1 - Playnite](#11---playnite) 

[1.2 - Plugins](#12---plugins) 

[1.3 - Scripts](#13---scripts) 

[2 - Credits](#2---credits) 

# 0 - Introduction

Hey people from Earth, this guide is for you (if you are an alien, then get out of here and bring me a better PC). I put all this info together to help my future self set up all these things again if I need to, but I'm a good person and decided to share it with you all. The results can be found [here](https://www.reddit.com/link/13c7aon/video/dp30aq0dqoya1/player)

So, first of all, I need to tell you some things:

**0 - Read the entire guide before proceeding!**

1 - I will not teach you how to download any kind of game. You will need to find it yourself.

2 - I am not responsible for any damage that this guide may cause to your PC, especially with regards to the [Scripts](#13---scripts) guide. While everything worked for me, there is no guarantee that it will also work for you.

3 - You will need a basic level of computer experience to follow this guide.

3 - Everything is configured and customized to my preferences. If you believe that any step can be improved, feel free to modify it. However, I cannot guarantee that the changes will work.

4 - At the end of this guide, you will find all the links that I used during my searches. This guide is a compilation of many useful resources, and I highly recommend reading it in its entirety.

5 - Please feel free to leave comments with any suggestions or feedback on this guide. I will review them and perhaps update the guide accordingly.

# 1 - Softwares

### 1.1 - Playnite

- Install
    - Download Playnite from [here](https://playnite.link/).
    - Install Playnite where you want it.
    - Open Playnite for the first time, choose your libraries, and log in to all of them.
    - Install all the extensions from [1.2 - Plugins](#12---plugins).
- General Settings
    - Press *F4* to open the settings menu.
    - Access the `General` settings and configure them as follows:
    
        ![0](/Images/0.png)
    
    - On `Metadata`, configure it as follows:
    
        ![1](/Images/1.png)
    
    - On `Auto Close Clients`, select all clients and set a time limit that you believe is appropriate (I recommend 240 seconds).
- Pluggins Settings
    - Press *F9* to open the plugin settings.
    - Check for updates. If any are available, update the plugin and restart Playnite.
    - If you use Amazon Games, check the box that says `Start games directly without running official client.`
    - If you use Xbox, uncheck the boxes `Import not installed games` and `Import XBOX console games` (This will prevent Playnite importing games that were on Game Pass in the past, you played and don’t have access anymore. Instead you can use `Game Pass Catalog Browser`)
    - Configure the other library extensions as you prefer.
    - Create an account on [SteamGridDB](https://www.steamgriddb.com/), then go [here](https://www.steamgriddb.com/profile/preferences/api) and copy your API Key.
    - Back in Playnite, go to `Metadata Sources → SteamGridDB` and paste your API Key where it is requested. No other changes are necessary.
    - On `Generic → DKG Theme Modifier` (All of this you can see what fit you most)
        - Chose `PlayniteModernUI`
        - Select your preferred color
        - Mark the boxes `Background Stretch With Fade` and `Background Blur`
        - Mark the box `Rounded Corners` and set it to 15
        - Click on `Apply changes` on the button on the beggining of the page
    - On `Extra Metadata Loader` click on `Download ffmpeg package` and `Download yt-dlp`. Save these files to a location of your choice (I saved them inside the extension folder). Next, point the files to Playnite by clicking on `Browse…`
    
        ![2](/Images/2.png)
    
    - Then, scroll to the end and let configure it as follow:
    
        ![3](/Images/3.png)
    
    - Go to the `Game Pass Catalog Browser` and select your country. Then, choose the boxes that best fit your preferences.
    - On `SuccessStory`, enable the achievements you want to track. If you want to play retro games, check out [RetroAchievements](https://retroachievements.org/) and get an API Key [here](https://retroachievements.org/controlpanel.php).
    - On `Steam Launcher Utility` check the box `Launch Steam in Big Picture Mode when starting a game` from the `FullScreen Mode`
    - Click `Save`
    - Download [Image Magick](https://imagemagick.org/) and install it wherever you want. Then, proceed with the steps on the image.
    
        ![4](/Images/4.png)
    
    - If it asks for Image Magick, just point it to where you install it.
- Emulators Settings
    - Press *Ctrl+T* to open the emulator settings screen.
    - I recommend you to have just one folder with all of your emulators and another one with your games.
    - Click `Import`, then `Scan folder`, and point Playnite to where you installed your emulators. Wait for Playnite to list all of your emulators (that it supports), then select them all and click `Import`.
    - For PCSX2, select the Default profile, check `Override Emulator Arguments`, and put `-nogui -fullscreen -slowboot -- {ImagePath}` in the `Custom Arguments` field.
    - For Xenia, select the Default profile, check `Override Emulator Arguments`, and put `"{ImagePath}" --fullscreen` in the `Custom Arguments` field.
    - At the top of the settings page, select `Auto-scan configuration`. Then, for each emulator you have, follow these steps (we'll use PCSX2 as an example):
        - Click `Add`.
        - Name it as `PS2`.
        - Point the scan folder to where your ROMs are located.
        - For `Scan with emulator`, choose `PCSX2` and the `Default` profile.
        - For `Override platform`, choose `Sony Playstation 2`.
        - Leave all other settings at their default values.
        - Example Pics
            
             ![5](/Images/5.png)
            
            PCSX2 Settings Screen
            
             ![6](/Images/6.png)
            
            Flash Player Settings Screen
            
    - Click on `Save`
- Fullscreen settings
    - Press `F5` to update all the library, this must dowload all metadata missing
    - Press `F11` to open the Fullscreen mode
    - On the upper right corner, select the joycon icon nad it will open a sidenav
    - Select then `Layout` and set:
        - Columns to 6
        - Rows to 2 (If you can’t use it, uncheck `Horizontal Scrolling` and then try again, just remember to check it again later)
        - Item spacing to 40
    - You can play with the settings to see what most suits you
- QuickFilter Settings
    
    To have nice icons on Fullscreen with your Quick Filters is quite simple. 
    
    - Open Playnite on Window Mode
    - Click on the filter icon
        
        ![7](/Images/7.png)
        
    - Chose the filter that most suits you, in my case I will create a filter for PS2 games:
    
        ![8](/Images/8.png)
    
    - I put Library as Playnite to just have the games that run on the emulator. You can have some games on Steam that will also have “PlayStation2” as their platform along with PC.
    - Click then on the Save icon
    - Check both boxes
    - The name must be one of these icons [here](https://github.com/davidkgriggs/PlayniteModernUI/tree/main/source/FilterIcons) (If the name isn’t one of these, the icon will be a default one)
    - Click save and enjoy

### 1.2 - Plugins

- Metadata
    - [SteamGridDB](https://playnite.link/addons.html#SteamGridDB_Playnite_Metadata) - Retrieve covers from SteamGridDB.
    - [Universal Steam Metadata](https://playnite.link/addons.html#Universal_Steam_Metadata) - Retrieve metadata from Steam, even if the game is from another library.
- Generic
    - [DKG Theme Modifier](https://playnite.link/addons.html#DKGThemeModifier_ee4ed2de-7e02-4447-8441-685d320b0520) - Use to configure themes that support it.
    - [Extra Metadata Loader](https://playnite.link/addons.html#ExtraMetadataLoader_705fdbca-e1fc-4004-b839-1d040b8b4429) - Provides additional information.
    - [Extra Metadata Fullscreen Mode Helper](https://playnite.link/addons.html#Extra_Metadata_tools_2e0349ed-6da2-4095-9457-4c9fb544551e) - Provides additional information in fullscreen mode.
    - [Game Pass Catalog Browser](https://playnite.link/addons.html#GamePassCatalogBrowser_50c85177-570f-4494-be16-99d6aa5b8a93) - Browse the Game Pass Catalog on Playnite (optional).
    - [Image Cache Size Saver](https://playnite.link/addons.html#Image_Cache_Size_Saver) - Saves space on your hard drive by processing images in the cache folder.
    - [Image Size Saver](https://github.com/ToMattBan/PC_but_console/tree/main/Image_Size_Saver) - Same as above, but for covers (adapted from [here](https://github.com/darklinkpower/PlayniteExtensionsCollection/tree/master/source/Generic/ImageCacheSizeSaver)).
    - [Save File View](https://playnite.link/addons.html#SaveFileView_f68f302b-9799-4b77-a982-4bfca97130e2) - Shows the location of the game's save folder (optional).
    - [Splash Screen](https://playnite.link/addons.html#SplashScreen_d8c4f435-2bd2-49d8-98f6-87b1d415934a) - Set an image or video to open before a game.
    - [SuccessStory](https://playnite.link/addons.html#playnite-successstory-plugin) - View your achievements (optional, but highly recommended).
- Themes
    - [Mythic](https://playnite.link/addons.html#Mythic_e231056c-4fa7-49d8-ad2b-0a6f1c589eb8) - Optional
    - [Playnite Modern UI](https://playnite.link/addons.html#PlayniteModernUI_b600472c-c10c-4136-86d0-82bf0e576200) - One of the best themes available. Check out how to configure it in the [General Settings](Playnite%20as%20a%20Game%20Station%20Tutorial%207564a4e7bf8d468f947777a7912a7a58.md)
- **How to install**
    
    Click on the extension name, it will take you to playnite extensions page, then just click on “Download” button. It will ask to open the link on Playnite, just allow it. 
    If any of them isn’t available anymore, you can get a backup [here](https://github.com/ToMattBan/PC_but_console/tree/main/extensions) (You will just need to drag them to the Playnite window). 
    Playnite will ask if you want to install, choose yes, and then restart. You only need to restart once after installing all extensions, not after each one.
    
    To install Image Size Saver, create a folder called “Image_Size_Saver” in \Playnite\Extensions and put all the contents from the GitHub link inside it. The result will be:
    
    ![9](/Images/9.png)
    

### 1.3 - Scripts

- Open Windows
    - Chose a place and create a folder called “Scripts”
    - Put any mp4 video here, it must be called “IntroVideo.mp4” ([Here](https://github.com/ToMattBan/PC_but_console/tree/main/splash%20videos) are some examples. Fell free to add more! Videos 1-4 credits to [here](https://playnite.link/forum/thread-686-post-4647.html))
    - Create a file called `Launch Playnite.bat`
    - Open the file and past the code:
    
    ```bash
    @echo off
    
    start "" "D:\Playnite\Playnite.FullscreenApp.exe" --hidesplashscreen
    start "" "D:\Playnite\tools\ffmpeg-6.0-essentials_build\bin\ffplay.exe" -left 0 -top 0 -x 1920 -y 1080 -alwaysontop -noborder -autoexit -loglevel quiet -loop 2 "D:\Playnite\!_Scripts\IntroVideo.mp4" 2>NUL
    ```
    
    - Change the paths to your owns.
    - Before the video path, there is the `-loop` argument with the value 2, this will make the video be played 2 times, you can change it to how many times it will be needed. Here, just 1 time don’t give Playnite time to really open, so play with this number until you get what you want.
    - Then follow Converting bat scripts to exe (guide below)
    - Then follow Open Playnite on Windows place (guide below), in the end, come back and follow the last steps:
    - On Playnite, select the option to add a manual game, put the name as “Run Windows” or something like that
    - On “Actions”, create a new Play Action and point it to your `explorerShell.exe`
    
        ![10](/Images/10.png)
    
    - Save it and done! Now, everythime you want to use your computer as Windows, just run this “Game”. I recommend to put it in your favorites.
- Open Playnite on Windows place
    - Come back to Scripts folder you create here on "Open Windows" above.
    - Inside the folder, create a file called `explorerShell.bat`
    - Open the file and past the code:
    
    ```bash
    @echo off
    reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v Shell /t REG_SZ /d "explorer.exe" /f
    timeout /t 1
    start explorer.exe
    timeout /t 1
    reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v Shell /t REG_SZ /d "D:\Playnite\!_Scripts\Launch Playnite.exe" /f
    exit
    ```
    
    - On the 6th line, change the Playnite path to where is the exe we created at "Open Windows"
    - Then follow "Converting bat scripts to exe" (guide below)
    - Now open Regex and navegate to `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon`
    - Open on the key named “Shell” with a double click and point it to where is the exe we created at "Open Windows"
    
        ![11](/Images/11.png)
    
    - Save it
- Converting bat scripts to exe
    - Download [this](https://blindhelp.net/software/bat-exe-converter-2480) tool
    - Extract wherever you want it.
    - Open `BatToExeConverterX64.exe`
    - Drag your .bat file to the program
    - Check `Invisible application` and `64 Bit`
    - If is the Open Window Script, also mark the Administrator option
    - Then click on Compile
- Game Pass Games Settings
    
    So, if you try to start a Game Pass game, you will be wellcomed with an error. This is simple to solve, but you will need to do it for every game.
    
    - In Desktop mode, sellect your game and press `F3`
    - Go to Scripts tab and paste the following code to `Execute before starting a game`:
    
    ```bash
    $explorerRunning = Get-Process explorer -ErrorAction SilentlyContinue
    if (!$explorerRunning) {
    	Start-Process "D:\Playnite\scripts\explorerShell.exe"
    	timeout /t 30
    }
    ```
    
    ![12](/Images/12.png)
    
    - This will make sure that explorer.exe starts before the game.

# 2 - Credits

Credits for Playnite and Universal Steam Metadata to [JosefNemec](https://github.com/JosefNemec)

Credits for almost all the extensions to [darklinkpower](https://github.com/darklinkpower/)

Credit for Success Story (playnite pluggin) to [Lacro59](https://github.com/Lacro59)

Credit for DKG Theme Modifier (playnite pluggin) and Playnite Modern UI (playnite theme) to [davidkgriggs](https://github.com/davidkgriggs)

Guide on how to set Playnite Moden UI [Playnite Forums](https://playnite.link/forum/thread-791.html)

Guide on how to start playnite instead of windows [Playnite Forums](https://playnite.link/forum/thread-967.html)

Guide on how to start a video instead of playnite splashcreen [Playnite Forums](https://playnite.link/forum/thread-686-post-4647.html)
