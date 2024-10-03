const calWorkEx = () => {
    let joiningDate = new Date(2023, 4, 22); // 22 may, 2023
    let currentDate = new Date()

    let yearDiff = currentDate.getFullYear() - joiningDate.getFullYear()
    let monthDiff = currentDate.getMonth() - joiningDate.getMonth()
    let dateDiff = currentDate.getDate() - joiningDate.getDate()

    if (dateDiff < 0) {
      monthDiff -= 1;
      dateDiff += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (monthDiff < 0) {
      yearDiff -= 1;
      monthDiff += 12;
    }

    return `${yearDiff} year(s) ${monthDiff} month(s) ${dateDiff} day(s)`;
  }

  let about = {
    Name: "Nikhil Singh",
    Experience: calWorkEx(),
    Recent_Education: 'Btech, ECE',
    College: 'NIT Uttarakhand',
    Current_Designation: 'Fullstack Developer',
  }

  export default about