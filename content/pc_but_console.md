---
title: How to turn your computer into a Gaming Console
description: A complete and simple guide with a lot of steps to turn your computer into a new experience, more console-like

author: 
  icon: 🍅
  name: ToMatt

navigation:
  icon: 🎮
  tags: ['tech', 'games', 'win10', 'playnite', 'jogos', 'console', 'pc', 'win']

categories: ['tech', 'games', 'win10', 'playnite', 'jogos', 'console', 'pc', 'win']

date: 2024-02-24
---

# {{ $doc.navigation.icon }} {{ $doc.title }}

## RESULTS:
- [The old version](https://www.reddit.com/link/13c7aon/video/dp30aq0dqoya1/player)
- The new version (Still on the making of the video)

Now that you saw how it is, lets go to the **requirements**:
- Windows 10 (Should work on Win11 too, but I didn't test it)
- A nice video that will be your intro (The duration depends on how good your PC is, I will use a 15s one)
- Playnite installed and logged with your launchers (Just the initial settup is good enough)
- Your game launchers XD (I have just GOG and Steam here)

- ### Win10 Activation
  - If your windows already is a Enterprise version, just skip this step
  - If not, follow it, of course
  - Open Power Shell
  - Type `irm https://massgrave.dev/get | iex`
  - It will open something like this:
    ![Windows Activation](/tutorials/pc_but_console/windows_activation.png)
  - If you windows is already activated:
    - Type `7`, then type `1`
    - When it asks you the edition, chose the one that says "Enterprise"
    - Reboot
    - Be happy =)
  - If you are lazy and never activated it:
    - Type `1`
    - If it asks you the edition, chose the one that says "IOTEnterprise"
    - Reboot
    - Be happy =)

- ### Win10 Brandless boot
  - First of all, make sure your account is an admin one
  - Then let's setup the auto-loggin:
    - Open PowerShell and type `irm https://christitus.com/win | iex`
    - Go to `Config` and click on `Set Up Autologin`
    - Type your password (If you have one) in the boxes and confirm
    - If you want, have a look in the tool you opened, it is a really interesting one
  - Now lets remove all that junk from the beggining of the system
    - Open CMD as Admin
      - Type `bcdedit.exe -set {globalsettings} bootuxdisabled on`
      - You can close CMD now lol
    - Open the `Control Panel`
      - Click on `Uninstall a Program`
      - On the left bar, click on `Turn Windows features on or off`
      - Find the tree called `Devide Lockdown` and expand it
      - Check all these boxes:
        - Custom Logon;
        - Shell Launcher;
        - Unbranded Boot;
  - Now it's time to mess up with the registre hehehe, so open `regedit`
    - Navigate until `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Embedded\EmbeddedLogon`
    - Double Click `HideAutoLogonUI` and set it to 1
    - Do the same with `HideFirstLogonAnimation`
  - You can test it, reboot your system and it should be totally clear, from a black screen to your desktop.

- ### Installing Playnite Plugins
  - This is easy, I will list some links here with the plugin description. You just need to open the plugin page, click on "Download", allow the browser to open it on Playnite and confirm the instalation, as the print shows:
  ![Playnite Plugins](/tutorials/pc_but_console/playnite_pluggins.png)
  - Plugins list:
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
</details>

- ### Configurating Playnite
  - Press F4 to open the settings menu.
  - Access the `General` settings and configure them as follows:  
    ![General Screen](/tutorials/pc_but_console/general_screen.png)
  - On Apparence, select your theme (Mine is "Mythic")
  - On `Metadata`, click on the select and let it like this:
    ![Metadata Screen](/tutorials/pc_but_console/metadata_screen.png)
  - Then click `Select All` button and finnaly `Apply to All`
  - On `Auto Close Clients`, select all clients and set a time limit that you believe is appropriate (I recommend 240 seconds).
  - Now you can close the config menu
  - Press `Ctrl + d`, it will open a download metadata screen
  - Select "All games from database" and uncheck the box asking to skip those who already have metadata
  - Let it download all metadata

- ### Configurating Pluggins
  - Press F9 to open the plugin settings.
  - Check for updates. If any are available, update the plugin and restart Playnite.
  - If you use Amazon Games, check the box that says `Start games directly without running official client.`
  - If you use Xbox, uncheck the boxes `Import not installed games` and `Import XBOX console games` (This will prevent Playnite importing games that were on Game Pass in the past, you played and don’t have access anymore.)
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
  - Then, scroll to the end and let configure it as follow:
    ![Extra Metadata Configs](/tutorials/pc_but_console/extra_metadata.png)
  - Go to the `Game Pass Catalog Browser` and select your country. Then, choose the boxes that best fit your preferences.
  - On `SuccessStory`, enable the achievements you want to track. If you want to play retro games, check out [RetroAchievements](https://retroachievements.org/) and get an API Key [here](https://retroachievements.org/controlpanel.php).
  - On `Steam Launcher Utility` check the box `Launch Steam in Big Picture Mode when starting a game` from the `FullScreen Mode`
  - Click `Save`
  - Download [Image Magick](https://imagemagick.org/) and install it wherever you want. Then, proceed with the steps on the image. (Do it with Image Size Saver too)
    ![Process Images](/public/tutorials/pc_but_console/process_images.png)
  - If it asks for Image Magick, just point it to where you install it.    

- ### Quick Filter and Fulscreen
  - Click on the Filter Icon
    ![Filter Icon](/tutorials/pc_but_console/filter_icon.png)
  - Chose the filter that most suits you, in my case I will create a filter for PS2 games: 
    ![Filter Settings]
  - I put Library as Playnite to just have the games that run on the emulator. You can have some games on Steam that will also have “PlayStation2” as their platform along with PC.
  - Click then on the Save icon
  - The name must be one of these icons [here](https://github.com/davidkgriggs/PlayniteModernUI/tree/main/source/FilterIcons) (If the name isn’t one of these, the icon will be a default one)
  - Click save
  - Press `F11` to open the Fullscreen vision
  - Click on the controller on the right-top corner
  - Navigate to `Visuals` and change:
    - Theme to `Playnite Modern UI`
    - Check `Darken not installed games`
    - Check `Show Background Image on Main Screen`
  - Navigate to `Layout`and change:
    - Columns to 6
    - Rows to 2 (If you cant change it, uncheck `Horizontal Scrolling`, change the Rows value and then check the box again)
    - Item Spacing to 40
  - Of course, you can change to what fits your like

- ### The experience
  - Create somewhere a folder called `Scripts` (I created it inside the Playnite folder)
  - Get your intro and move it to this folder, rename the video to "IntroVideo.mp4"
    - [Here](https://github.com/ToMattBan/PC_but_console/tree/main/splash%20videos) are some examples. Fell free to add more! Videos 1-4 credits to [here](https://playnite.link/forum/thread-686-post-4647.html))
  - Create a file called `Launch Playnite.bat`
  - Edit the file to contains this code here: (Change the paths to your own)
  - ```
    @echo off
    
    start "" "D:\Playnite\Playnite.FullscreenApp.exe" --hidesplashscreen
    "D:\Playnite\tools\ffmpeg-6.0-essentials_build\bin\ffplay.exe" -i "D:\Playnite\!_Scripts\IntroVideo.mp4" -fs -alwaysontop -noborder -autoexit -loglevel quiet 2>NUL
    ```
  - Playnite currently does not support controllers with DirectInput. If you are not using a controller with XInput or a mouse and keyboard, Download [XOutput](https://github.com/csutorasa/XOutput) to map your controllers to XInput.
    - You will also need to add the following line to the start of Launch Playnite.bat file to start this XOutput on startup. The timeout is to prevent XOutput from starting on top of Playnite.
      ```
      bash
      start ""  "C:\Path\to\XOutput.exe"
      timeout /t 1
      ```
  - Now we are going to convert the bat to an exe file
    - Download [this](https://blindhelp.net/software/bat-exe-converter-2480) tool and extract it somewhere
    - Open `BatToExeConverterX64.exe`
    - Drag your .bat file to the program
    - Check `Invisible Application`, `64 Bits` and `Add administrator manifest`
    - Click on compile
    - Minimize the program (We are going to use it later)
  - So lets make the system open our game library instead of all that Windows junk
    - Create a new file `explorerShell.bat`
    - Edit the file to contains this code here: (Change the paths to your own)
    - ```
      @echo off
      reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v Shell /t REG_SZ /d       "explorer.exe" /f
      timeout /t 1
      start explorer.exe
      timeout /t 1
      reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v Shell /t REG_SZ /d "D:      \Playnite\!_Scripts\Launch Playnite.exe" /f
      exit
      ```
    - Convert this one to an .exe too (Like we did earlier), but this time you don't need to check the Administrator manifest option
    - Now open Regedit and navigate to `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon`
    - Double Click on `Shell` and change the value from `explorer.exe` to the path to your `Launch Playnite.exe` file
      ![Regedit Shell](/tutorials/pc_but_console/regedit_shell.png)
    - Save it and close Regedit
  - Now to, in case you need, open Win10 again:
    - On Playnite, press `Insert` to add a game mannualy
    - Give it a name that you see fit
    - On The `Actions` tab, click on `Add Action`
    - On Path, paste the path to your `explorerShell.exe`
    - Save it and it's done! If you ever want/need to use your computer as a computer again, just run this "game"

- ### Fixing GamePass game not opening
  - If you try to start a Game Pass game, you will be welcomed with an error. This is simple to solve, but you will need to do it for every game.
  - Press F4 and navigate to `Scripts`
  - On `Execute before starting a game, paste this: (Change the paths to your own)
  - ```
    $pluginGUID = $Game.PluginId
    if ($pluginGUID -eq "7e4fbb5e-2ae3-48d4-8ba0-6b30e7a4e287") {
      $explorerRunning = Get-Process explorer -ErrorAction SilentlyContinue
      if (!$explorerRunning) {
       Start-Process "D:\Playnite\scripts\explorerShell.exe"
       timeout /t 30
      }
    }
    ```
