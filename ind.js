window.onload = function(){
    var _ = $("#phone_outer_case").height();
    $('#phone_outer_case').css({"width":(_/2)+'px'});
    
    _ = $('.app').width();
    $('.app').css({"height":_+'px'});

    setTimeout(Update,1000);
    
    window.navigator.vibrate = window.navigator.vibrate || function(){};
    
    function Update(){
        var ctime = new Date();
        var _ = " AM";
        if(ctime.getHours() > 12){
            _ = " PM";
        }
        
        
        $("#time").html((ctime.getHours() % 12) + ":" + ctime.getMinutes() + _);
        
        setTimeout(Update,1000);
    }

    setTimeout(load,250);
    
    function load(){
    
        var _ = $("#phone_outer_case").height();
    $('#phone_outer_case').css({"width":(_/2)+'px'});
    
    _ = $('.app').width();
    $('.app').css({"height":_+'px'});
    
        setTimeout(CloseLoading,1000);
    }
    
    function CloseLoading(){
        $("#loading").fadeOut();
    }
    
    var Phone = document.getElementById("phone");
    
    var AppDataNames = {
        "chrome":Chrome,
        "sololearn":Sololearn,
        "gmail":Gmail,
        "settings":Settings,
        "music":Music,
        "app_store":App_Store,
        "text":Text,
        "notepad":Notepad,
        "edge":Edge,
        "excel":Excel,
        
    };
    
    var OpenApps = [];
    
    function GetGUIElement(_){
        return(document.getElementById(_));
    }
    
    function AddGUIElement(_){
        Phone.appendChild(_)
    }
    
    function ReturnHome(){
        for(var i = 0;i < OpenApps.length;i++){
           OpenApps[i].style.display = "none";
        }
    }
    

    
    var InitApp = function(id){
        var AppWindow = document.createElement("div");
        AppWindow.className = "AppWindow";
        GetAppData(id,AppWindow);
        OpenApps.push(AppWindow);
        AddGUIElement(AppWindow);
    }
    
    $(".app").on("click",function(){
        window.navigator.vibrate(10);
        InitApp(this.id);
    });
    
    GetGUIElement("to_home").onclick = function(){
        ReturnHome();
        window.navigator.vibrate(10);
    }
    
    function GetAppData(id,AppWindow){
        AppDataNames[id](AppWindow);
    }
    
    function Chrome(GUI){
        var TaskBar = document.createElement("div");
        TaskBar.textContent = "";
        TaskBar.className = "Chrome_Taskbar";
        
        var Search = document.createElement("input");
        Search.placeholder = "Search the web.";
        Search.className = "Chrome_Search";
        
        Search.onsubmit = function(){
            alert(1)
        }
        
        var Back = document.createElement("div");
        Back.textContent = "◁";
        Back.className = "Chrome_Back";
        
        var SearchBtn = document.createElement("div");
        SearchBtn.textContent = "GO";
        SearchBtn.className = "Chrome_SearchBtn";
        
        //var Forward = document.createElement("div");
        //Forward.textContent = "▷";
        //Forward.className = "Chrome_Forward";
        
        var history = ["https://bing.com"];
        
        var Web = document.createElement("iframe");
        Web.src = history[0];
        Web.className = "Chrome_Web";
        
        TaskBar.appendChild(Search);
        TaskBar.appendChild(Back);
        TaskBar.appendChild(SearchBtn);
        GUI.appendChild(TaskBar);
        GUI.appendChild(Web);
        
        var _n = 0;
        
        SearchBtn.onclick = function(){
        
            Search = GUI.getElementsByClassName("Chrome_Search")[0];
            ;
            
            //alert(Search.value)
            Web.src = "http://www.bing.com/search?q="+Search.value;
            history.push(Web.src)
            Search.value = "";
            _n++;
            
            if(_n > history.length){
                history.splice(_n - 1,_n - history.length)
            }
        }
        
        Back.onclick = function(){
            
            if(_n > 0){
                --_n;
                Web.src = history[_n];
            }
            
        }
        
        GetGUIElement("back").onclick = function(){
            
            if(_n > 0){
                --_n;
                Web.src = history[_n];
            }
            
        }
    }
    
    function Sololearn(GUI){
        var Page = document.createElement("iframe");
        Page.src = "https://sololearn.com";
        Page.className = "Sololearn_Web";
        
        GUI.appendChild(Page);
    }
    
    function Gmail(GUI){
        var TopBar = document.createElement("div");
        TopBar.textContent = "Gmail - Inbox";
        TopBar.className = "Gmail_TopBar";
        
        var GmailIcon = document.createElement("img");
        GmailIcon.className = "Gmail_Icon";
        GmailIcon.src = "https://i.imgur.com/eHwwXZx.png";
        
        
        var Email = document.createElement("div");
        Email.className = "Gmail_Email";
        Email.innerHTML = "From <b>Jayden LeCorps</b><br><br>Thanks for trying out my code!<br><br>This is a model of the phone I use for SoloLearn "
        
        TopBar.appendChild(GmailIcon);
        GUI.appendChild(Email);
        GUI.appendChild(TopBar);
    }
    
    function Settings(GUI){
        var TopBar = document.createElement("div");
        TopBar.textContent = "Settings";
        TopBar.className = "Settings_TopBar";
        
        var SettingsPanel = document.createElement("div");
        
        SettingsPanel.className = "Settings_SettingsPanel";
        
        var SettingsOption = document.createElement("div");
        SettingsOption.className = "Settings_SettingsOption";
        SettingsOption.textContent = "Delete all Files";
        
        SettingsOption.onclick = function(){
            Phone.innerHTML = "_Android failed to boot";    
            Phone.style.color = "white";
            Phone.style.background = "black";
        }
        
        var SettingsOption1 = document.createElement("div");
        SettingsOption1.className = "Settings_SettingsOption";
        SettingsOption1.textContent = "See system info";
        
        SettingsOption1.onclick = function(){
            alert("Made by Jayden LeCorps ©2019 - 2020 JaydenL \n\nOS Version: Android Oreo 8.0.1\n\nModel: LG Stylo 4\n\nNetwork: 2G - 4G");
        }
        
        var SettingsOption2 = document.createElement("div");
        SettingsOption2.className = "Settings_SettingsOption";
        SettingsOption2.textContent = "Turn off firewall";
        
        SettingsOption2.onclick = function(){
            setInterval(hack,0.1);
            
            function hack(){
                alert("Never turn off the Firewall!!! 💀");
            }
        }
        
        var SettingsOption3 = document.createElement("div");
        SettingsOption3.className = "Settings_SettingsOption";
        SettingsOption3.textContent = "Advanced";
        
        SettingsOption3.onclick = function(){
            alert("Memory: 2GB\nCPU: 1.8GHz AMD Snapdragon\n6'' Display")
        }
        
        SettingsPanel.appendChild(SettingsOption);
        SettingsPanel.appendChild(SettingsOption1);
        SettingsPanel.appendChild(SettingsOption2);
        
      SettingsPanel.appendChild(SettingsOption3);
        GUI.appendChild(SettingsPanel);
        GUI.appendChild(TopBar);
        
    }
    
    function Music(GUI){
        var MusicTitle1 = document.createElement("div");
        MusicTitle1.textContent = "Zelda Theme";
        MusicTitle1.className = "Music_Title";
        
        var Music1 = document.createElement("audio");
        Music1.src = "http://23.237.126.42/ost/the-legend-of-zelda-skyward-sword-expanded/jvfacnkx/1-04%20Theme%20of%20Skyward%20Sword%20-%20Ballad%20of%20the%20Goddess.mp3";
        Music1.controls = true;
        Music1.className = "Music_Player";
        
        var MusicTitle2 = document.createElement("div");
        MusicTitle2.textContent = "Sky & Sea";
        MusicTitle2.className = "Music_Title";
        
        var Music2 = document.createElement("audio");
        Music2.src = "http://23.237.126.42/ost/super-mario-sunshine-game-rip/zjtziimo/39%20-%20Sky%20%26%20Sea.mp3";
        Music2.controls = true;
        Music2.className = "Music_Player";
        
        var MusicTitle3 = document.createElement("div");
        MusicTitle3.textContent = "Underground";
        MusicTitle3.className = "Music_Title";
        
        var Music3 = document.createElement("audio");
        Music3.src = "http://23.237.126.42/ost/super-mario-sunshine-game-rip/dzmojits/13%20-%20Underground.mp3";
        Music3.controls = true;
        Music3.className = "Music_Player";
        
        
        GUI.appendChild(MusicTitle1);
        GUI.appendChild(Music1);
        
        GUI.appendChild(MusicTitle2);
        GUI.appendChild(Music2);
        
        GUI.appendChild(MusicTitle3);
        GUI.appendChild(Music3);
    }
    
    function App_Store(GUI){
        var TopBar = document.createElement("div");
        TopBar.className = "App_Store_TopBar";
        TopBar.textContent = "Google Play"
        
        var Showcase = document.createElement("div");
        Showcase.className = "App_Store_Showcase";
        
        var ShopApp = document.createElement("div");
        ShopApp.className = "App_Store_ShopApp";
        
        var ShopApp2 = document.createElement("div");
        ShopApp2.className = "App_Store_ShopApp";
        
        var ShopApp3 = document.createElement("div");
        ShopApp3.className = "App_Store_ShopApp";
        
        var Info = document.createElement("div");
        Info.className = "App_Store_Info";
        Info.innerHTML = "Want your app here? <br>Let us know!";
        
        var Download = document.createElement("div");
        Download.className = "App_Store_Download";
        Download.textContent = "GET";
        
        Download.onclick = function(){
            Download.textContent = "✓";
            Download.textContent = "✓";
            var _ = document.createElement("div");
            _.className = "app";
            _.id = "notepad";
            _.onclick = function(){InitApp("notepad");}
            _.style.backgroundImage = "url(https://i.imgur.com/xToQ7wQ.png)";
            document.getElementById("home").appendChild(_);
        }
        
        var Download2 = document.createElement("div");
        Download2.className = "App_Store_Download";
        Download2.textContent = "GET";
        
        Download2.onclick = function(){
            Download2.textContent = "✓";
            var _ = document.createElement("div");
            _.className = "app";
            _.id = "edge";
            _.onclick = function(){InitApp("edge");}
            _.style.backgroundImage = "url(https://i.imgur.com/92RBxy5.png)";
            document.getElementById("home").appendChild(_);
            
        }
        
        var Download3 = document.createElement("div");
        Download3.className = "App_Store_Download";
        Download3.textContent = "GET";
        
        Download3.onclick = function(){
            Download3.textContent = "✓";
            var _ = document.createElement("div");
            _.className = "app";
            _.id = "excel";
            _.onclick = function(){InitApp("excel");}
            _.style.backgroundImage = "url(https://i.imgur.com/LrS0odr.png)";
            document.getElementById("home").appendChild(_);
            
        }
        
        var App1 = document.createElement("img");
        App1.src = "https://i.imgur.com/xToQ7wQ.png";
        App1.className = "App_Store_App";
        
        var App2 = document.createElement("img");
        App2.src = "https://i.imgur.com/92RBxy5.png";
        App2.className = "App_Store_App";
        
        var App3 = document.createElement("img");
        App3.src = "https://i.imgur.com/LrS0odr.png";
        App3.className = "App_Store_App";
        
        ShopApp.appendChild(App1);
        ShopApp2.appendChild(App2);
        ShopApp3.appendChild(App3);
        ShopApp.appendChild(Download);
        ShopApp2.appendChild(Download2);
        ShopApp3.appendChild(Download3);
        Showcase.appendChild(ShopApp);
        Showcase.appendChild(ShopApp2);
        Showcase.appendChild(ShopApp3);
        Showcase.appendChild(Info);
        GUI.appendChild(Showcase);
        GUI.appendChild(TopBar);
    }
    
    function Text(GUI){
        var TopBar = document.createElement("div");
        TopBar.className = "Text_TopBar";
        TopBar.textContent = "(123)-456-7890";
        
        var TextContent = document.createElement("div");
        TextContent.className = "Text_Content";
        
        var Message = document.createElement("div");
        Message.className = "Text_Message1";
        Message.textContent = "PLEASE GO TO \nscammed.com!!!";
        
        var Message2 = document.createElement("div");
        Message2.className = "Text_Message2";
        Message2.textContent = "No, I don't think I will.";
        
        var Message3 = document.createElement("div");
        Message3.className = "Text_Message3";
        Message3.textContent = "I SAID PLEASE";
        
        TextContent.appendChild(Message);
        TextContent.appendChild(Message2);
        TextContent.appendChild(Message3);
        GUI.appendChild(TextContent);
        GUI.appendChild(TopBar);
    }
    
    function Notepad(GUI){
        var TopBar = document.createElement("div");
        TopBar.className = "Notepad_TopBar";
        TopBar.textContent = "Notepad";
        ;
        var TextArea = document.createElement("textarea");
        TextArea.className = "Notepad_TextArea";
        TextArea.placeholder = "Start Typing here";
        
        GUI.appendChild(TextArea);
        GUI.appendChild(TopBar);
        
    }
    
    function Edge(GUI){
        var TaskBar = document.createElement("div");
        TaskBar.textContent = "";
        TaskBar.className = "Edge_Taskbar";
        
        var Search = document.createElement("input");
        Search.placeholder = "Search the web.";
        Search.className = "Edge_Search";
        
        Search.onsubmit = function(){
            alert(1)
        }
        
        var SearchBtn = document.createElement("div");
        SearchBtn.textContent = "GO";
        SearchBtn.className = "Edge_SearchBtn";
        
        var Web = document.createElement("iframe");
        Web.src = history[0];
        Web.className = "Edge_Web";
        
        TaskBar.appendChild(Search);
        TaskBar.appendChild(SearchBtn);
        GUI.appendChild(TaskBar);
        GUI.appendChild(Web);
        
        SearchBtn.onclick = function(){
        
            Search = GUI.getElementsByClassName("Edge_Search")[0];
            ;
            
            
            Web.src = "http://www.bing.com/search?q="+Search.value;
            
        }
        
    }
    
    function Excel(GUI){
        GUI.innerHTML = "<br>Phone.Apps.Excel";
    }
}
