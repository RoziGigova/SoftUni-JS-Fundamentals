function previosDay (year, month, day) {
    let actualDay = new Date(year, month-1, day);
    actualDay.setDate (actualDay.getDate() -1);

    console.log (`${actualDay.getFullYear ()}-${actualDay.getMonth () +1}-${actualDay.getDate ()}`);

}

previosDay (2000, 1, 1);
previosDay (2015, 5, 10);
