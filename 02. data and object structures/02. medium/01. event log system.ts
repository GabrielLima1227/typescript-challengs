type ErrorLog = {
    kind: "error";
    errorMessage: string;
    stackTrace: string;
};

type InfoLog = {
    kind: "info";
    message: string;
};

type WarningLog = {
    kind: "warning";
    warningMessage: string;
    severity: "low" | "medium" | "high";
};

type LogEvent = ErrorLog | InfoLog | WarningLog;

function handleLog(event: LogEvent): void {
    switch (event.kind) {
        case "error":
            console.error("Error:", event.errorMessage);
            console.error("StackTrace:", event.stackTrace);
            break;

        case "info":
            console.log("Info:", event.message);
            break;

        case "warning":
            console.warn(
                `Warning (${event.severity}):`,
                event.warningMessage
            );
            break;

        default:
            const _exhaustive: never = event;
            return _exhaustive;
    }
}