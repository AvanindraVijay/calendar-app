import dayjs from "dayjs";

export const generateDate = (
	month = dayjs().month(),
	year = dayjs().year()
) => {
	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
	const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

	const arrayOfDate = [];

	// create prefix date
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		const date = firstDateOfMonth.day(i);

		arrayOfDate.push({
			currentMonth: false,
			date,
		});
	}

	// generate current date
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		});
	}

	const remaining = 42 - arrayOfDate.length;

	for (
		let i = lastDateOfMonth.date() + 1;
		i <= lastDateOfMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({
			currentMonth: false,
			date: lastDateOfMonth.date(i),
		});
	}
	return arrayOfDate;
};

export const months = [
	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
];

export const newMeeting = {
	id: 7,
	name: 'John Doe',
	imageUrl: 'https://imgs.search.brave.com/SoOZnFDETUo-KlRlcgz9nm9yVVE91XoiqHTS-nZOkQY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbW9u/a2V5LWQtbHVmZnkt/c21pbGUtYW5kLXBl/YWNlLXNpZ25zLW9q/bzV0bWR0cnd1YXI0/YWIuanBn',
};

export const addMeeting = (meeting) => {
  // Corrected addMeeting function to accept the meeting parameter
  // and return the meeting object
  return {
    id: meeting.id,
    name: meeting.name,
    imageUrl: meeting.imageUrl,
    startDatetime: meeting.startDatetime,
    endDatetime: meeting.endDatetime,
  };
};

// Example usage of the addMeeting function
const meetingToAdd = addMeeting(newMeeting);
console.log(meetingToAdd);
