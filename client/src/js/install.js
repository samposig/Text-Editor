const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    buttonInstall.classList.toggle('hidden', false);
});

buttonInstall.addEventListener('click', async () => {
    const prompt = window.deferredPrompt;
    if(!prompt){
        return;
    }
    prompt.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
