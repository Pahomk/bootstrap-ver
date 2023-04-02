    if (!(typeof footerHandler === 'function' && typeof getVars === 'function' && typeof messageHandler === 'function'))
    {
        try{
            warningHandler();
        }
        catch{
            document.body.innerHTML="";
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
    }
