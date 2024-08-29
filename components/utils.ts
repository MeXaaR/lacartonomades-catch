export const redirectToApp = () => {
    window.location.replace(`lacartonomades:/${window.location.pathname}`);
    console.log("Redirecting to app");
    console.log(`lacartonomades:/${window.location.pathname}`)
}