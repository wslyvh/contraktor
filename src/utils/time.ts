
export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function parseTimestampToMinutesAgo(timestamp: number) {
    const currentDate = new Date(); 
    const currentTimestamp = Math.floor(currentDate.getTime() / 1000); 
    var seconds = currentTimestamp - timestamp;

    if (seconds > 360 * 24 * 3600) {
      return "more than a year ago";
    }

    if (seconds > 60 * 24 * 3600) {
      return "a few months ago";
    }

    if (seconds > 30 * 24 * 3600) {
      return "a month ago";
    }

    if (seconds > 14 * 24 * 3600) {
      return "a few weeks ago";
    }

    if (seconds > 7 * 24 * 3600) {
      return "a week ago";
    }

    if (seconds > 2 * 24 * 3600) {
       return "a few days ago";
    }
    
    if (seconds > 24 * 3600) {
       return "yesterday";
    }

    if (seconds > 3600) {
       return "a few hours ago";
    }

    if (seconds > 60) {
       return Math.floor(seconds / 60) + " minutes ago";
    }
}