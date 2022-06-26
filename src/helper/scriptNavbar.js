export const ScriptNavbar = () => {
    const script = document.createElement('script');
    
    script.src = "/script/sidebar.js"
    script.async = true
    
    document.body.appendChild(script)
    
    return () => {
        document.body.removeChild(script)
    }
};