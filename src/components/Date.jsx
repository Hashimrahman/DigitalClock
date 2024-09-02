function TodayDate() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return (
    <div className="date">
      <p>{formattedDate}</p>
    </div>
  );
}

export default TodayDate;
