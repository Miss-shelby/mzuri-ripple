

export const DateCreated = (dateCreated,formattedDate) => {
    let dayCreated = '';
    if (dateCreated === formattedDate) {
        dayCreated = 'Today';
      } else {
        // Create Date objects from date strings
        const createdDate = new Date(dateCreated);
        const currentDate = new Date(formattedDate);
      
        // Calculate the difference in time
        const timeDiff = currentDate.getTime() - createdDate.getTime();
        
        // Calculate the number of days difference
        const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
      
        // Determine the day created
        if (dayDiff === 1) {
          dayCreated = 'Yesterday';
        } else if (dayDiff > 1) {
          dayCreated = `${dayDiff} days ago`;
        } else {
          dayCreated = 'Future date';
        }
    }
    return dayCreated;
}

export const calculateDaysLeft=(dateCreated, duration) =>{
    const createdDate = new Date(dateCreated);
    const targetDate = new Date(duration);
  
    if (createdDate > targetDate) {
      return '0 ';
    }
  
    const differenceInTime = targetDate - createdDate;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); 
  
    return `${differenceInDays}`;
  }