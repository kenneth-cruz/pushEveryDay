function toTime(seconds) {
    let hours = Math.floor(seconds / 3600)
    let leftover_minutes = Math.floor((seconds % 3600) / 60)
    return `${hours} hour(s) and ${leftover_minutes} minute(s)`
    }