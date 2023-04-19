export default () => {
    const style = document.createElement('style');
    document.head.appendChild(style);
    if (style.sheet)
        style.sheet.insertRule('@media all { html {height: 100%; width: 100%;} *,body {margin:0; padding:0;} canvas { position: absolute; z-index: 2; } body { width: 100%; height: 100%;} }');
}

