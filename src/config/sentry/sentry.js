import * as Sentry from 'sentry-expo';

if(Sentry){
    Sentry.init({
        dsn: "https://302f480dbc324a3a93529ce3595c22b3@o488440.ingest.sentry.io/5577496",
        enableInExpoDevelopment: true,
        debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
    });

    Sentry.Native.nativeCrash();
}




export const logcaptureMessageSentry = (msg)=>{
    Sentry.Native.captureMessage(msg);
}

export const logcaptureExceptionSentry = (err)=>{
    Sentry.Native.captureException(err);
}